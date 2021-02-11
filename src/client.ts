//
// GRPC-Bus-Websocket-Client - Connect to standard GRPC service(s) via a WebSocket proxy.
//

"use strict";

import {Client} from 'grpc-bus/lib/client';
import {IGBClientMessage} from 'grpc-bus/lib/proto';
import {GrpcBus} from './grpc-bus';
import {promiseHash, wsPromise} from './utils';
import {ServiceMapCreator, Namespace, BuildServiceMap} from './types';

export type SerivceConstructor<T> = new (...args: any[]) => T;

export default class GRPCWS<
  TServiceGetters extends ServiceMapCreator<NS>,
  NS extends Namespace,
  TServices = BuildServiceMap<TServiceGetters, NS>,
  THosts = Record<string, Array<keyof TServiceGetters> | true>
> {
  gb: Client;
  ws: WebSocket;
  proto: NS;
  proxyURL: string;
  serviceGetters: TServiceGetters;
  services: TServices;
  hostConfig: THosts;

  constructor(proxyURL: string, proto: NS, serviceGetters: TServiceGetters, hostConfig: THosts) {
    this.proto = proto;
    this.proxyURL = proxyURL;
    this.serviceGetters = serviceGetters;
    this.hostConfig = hostConfig;
  }

  connect(): Promise<GRPCWS<TServiceGetters, NS, TServices, THosts>> {
    const ws = new WebSocket(this.proxyURL);
    const protoRoot = (this.proto as unknown as import('protobufjs').NamespaceBase).root;
    ws.binaryType = 'arraybuffer';  // We are talking binary

    this.ws = ws;

    return wsPromise(this.ws).then(() => {
      const gb = new Client(protoRoot, (msg) => {
        ws.send(GrpcBus.GBClientMessage.encode(msg).finish());
      });
      ws.onmessage = (event) => {
        let data = event.data;
        if (data instanceof ArrayBuffer) {
          data = new Uint8Array(data);
        }
        
        // protobufjs adds `|null` to types. Check the discussion:
        // https://github.com/protobufjs/protobuf.js/issues/1171
        const message = GrpcBus.GBServerMessage.decode(data) as unknown as IGBClientMessage;
        gb.handleMessage(message);
      };

      let defaultHost = '';
      const hostsByServiceName = {};
      Object.keys(this.hostConfig).forEach(address => {
        const services: true | Array<keyof TServiceGetters> = this.hostConfig[address];
        if (services === true) {
          defaultHost = address;
        } else {
          services.forEach(service => {
            hostsByServiceName[service as string] = address;
          });
        }
      });

      const map = Object.keys(this.serviceGetters).reduce((next, name) => {
        const proto = gb.root as unknown as NS & import('protobufjs').Root;
        next[name] = (this.serviceGetters[name](proto) as unknown as Function)(hostsByServiceName[name] || defaultHost);
        return next;
      }, {});

      this.gb = gb;
      return promiseHash(map);
    }).then(results => {
      this.services = results as TServices;
      return this;
    });
  }
}
