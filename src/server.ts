import {Server as WebSocketServer, ServerOptions} from 'ws';
import {Server as GrpcBus} from 'grpc-bus/lib/server';
import { IGBServerMessage, IGBCreateService } from 'grpc-bus/lib/proto';
import { createLogger } from './logger';

const gbProtoRoot = require('./grpc-bus');

const GBClientMessage = gbProtoRoot.lookup('GBClientMessage');
const GBServerMessage = gbProtoRoot.lookup('GBServerMessage');

type Config = {
  ws: ServerOptions;
  proto: unknown;
  endpoints: string[];
  debug?: boolean;
};

function isProtobufRoot(proto: unknown): proto is import('protobufjs').Root {
  return typeof (proto as Record<string, unknown>)?.lookup === 'function';
}

export function listen({proto, endpoints, ws, debug}: Config): WebSocketServer {
  if (!isProtobufRoot(proto)) {
    throw new Error('proto should be an instance of protobufjs.Root');
  }

  const logger = createLogger(!!debug);

  var wss = new WebSocketServer(ws);

  logger.log('Starting...');
  wss.on('connection', function connection(ws, request) {
    logger.log(`New connection established from ${request.connection.remoteAddress}`);
  
    const handleServerMessage = (message: IGBServerMessage): void => {
      logger.log('sending (pre-stringify): %s')
      logger.dir(message, { depth: null });
      logger.log('sending (post-stringify): %s')
      logger.dir(JSON.stringify(message));
      // ws.send(JSON.stringify(message));
      var pbMessage = GBServerMessage.encode(message).finish();
      logger.log('sending (raw message):', pbMessage);
      logger.log('re-decoded message:', GBServerMessage.decode(pbMessage));
      if (ws.readyState === ws.OPEN) {
        ws.send(pbMessage);
      } else {
        logger.error('WebSocket closed before message could be sent:', pbMessage);
      }
    }

    const gb = new GrpcBus(proto, handleServerMessage, require('@grpc/grpc-js'));

    const handleClientMessage = (data: any, flags: any): void => {
      logger.log('received (raw):', data);
      logger.log('with flags:', flags)
      var message = GBClientMessage.decode(data);
      logger.log('received (parsed):');
      logger.dir(message, { depth: 3 });
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

  return wss;
}

