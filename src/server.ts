import {Server as WebSocketServer, ServerOptions} from 'ws';
import {Server as GrpcBus} from 'grpc-bus/lib/server';
import { IGBServerMessage, IGBCreateService } from 'grpc-bus/lib/proto';

const gbProtoRoot = require('./grpc-bus');

const GBClientMessage = gbProtoRoot.lookup('GBClientMessage');
const GBServerMessage = gbProtoRoot.lookup('GBServerMessage');

type Config = {
  ws: ServerOptions;
  proto: unknown;
  endpoints: string[];
};

function isProtobufRoot(proto: unknown): proto is import('protobufjs').Root {
  return typeof (proto as Record<string, unknown>)?.lookup === 'function';
}

export function listen({proto, endpoints, ws}: Config): void {
  if (!isProtobufRoot(proto)) {
    throw new Error('proto should be an instance of protobufjs.Root');
  }

  var wss = new WebSocketServer(ws);

  console.log('Starting...');
  wss.on('connection', function connection(ws, request) {
    console.log(`New connection established from ${request.connection.remoteAddress}`);
  
    const handleServerMessage = (message: IGBServerMessage): void => {
      console.log('sending (pre-stringify): %s')
      console.dir(message, { depth: null });
      console.log('sending (post-stringify): %s')
      console.dir(JSON.stringify(message));
      // ws.send(JSON.stringify(message));
      var pbMessage = GBServerMessage.encode(message).finish();
      console.log('sending (raw message):', pbMessage);
      console.log('re-decoded message:', GBServerMessage.decode(pbMessage));
      if (ws.readyState === ws.OPEN) {
        ws.send(pbMessage);
      } else {
        console.error('WebSocket closed before message could be sent:', pbMessage);
      }
    }

    const gb = new GrpcBus(proto, handleServerMessage, require('@grpc/grpc-js'));

    const handleClientMessage = (data: any, flags: any): void => {
      console.log('received (raw):', data);
      console.log('with flags:', flags)
      var message = GBClientMessage.decode(data);
      console.log('received (parsed):');
      console.dir(message, { depth: 3 });
      const serviceCreate = message.serviceCreate as IGBCreateService | undefined;
      const endpoint = serviceCreate?.serviceInfo?.endpoint;
      if (serviceCreate && endpoint && endpoints.indexOf(endpoint) === -1) {
        handleServerMessage({
          serviceCreate: {
              serviceId: serviceCreate.serviceId,
              result: 1,
              errorDetails: `Enpoint ${endpoint} is not allowed.`,
          },
        });
      } else {
        gb.handleMessage(message);
      }
    };

    ws.on('message', handleClientMessage);
    ws.on('error', error => console.error(`WebSocket Error: ${error.message}`));
  });
  
  wss.on('error', error => console.error(`WebSocket Server Error: ${error.message}`));
}

