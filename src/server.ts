import {Server as WebSocketServer} from 'ws';
import {Server as GrpcBus} from 'grpc-bus/lib/server';

const gbProtoRoot = require('./grpc-bus');

const GBClientMessage = gbProtoRoot.lookup('GBClientMessage');
const GBServerMessage = gbProtoRoot.lookup('GBServerMessage');

type Config = {
  proto: unknown;
  port: number;
  hosts: string[];
};

function isProtobufRoot(proto: unknown): proto is import('protobufjs').Root {
  return typeof (proto as Record<string, unknown>)?.lookup === 'function';
}

export function listen({proto, hosts, port}: Config): void {
  if (!isProtobufRoot(proto)) {
    throw new Error('proto should be an instance of protobufjs.Root');
  }

  var wss = new WebSocketServer({ port });

  console.log('Starting...');
  wss.on('connection', function connection(ws, request) {
    console.log(`New connection established from ${request.connection.remoteAddress}`);
  
    const gb = new GrpcBus(proto, function(message) {
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
    }, require('@grpc/grpc-js'));
    
    ws.on('message', function incoming(data: any, flags: any) {
      console.log('received (raw):', data);
      console.log('with flags:', flags)
      var message = GBClientMessage.decode(data);
      console.log('received (parsed):');
      console.dir(message, { depth: 3 });
      gb.handleMessage(message);
    });
  
    ws.on('error', error => console.error(`WebSocket Error: ${error.message}`));
  });
  
  wss.on('error', error => console.error(`WebSocket Server Error: ${error.message}`));
}

