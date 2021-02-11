import {rpc} from "protobufjs";
import {Call} from 'grpc-bus/lib/client/call';

export type Metadata = Record<string, string>;

export type SerivceConstructor<T extends rpc.Service> = new (...args: any[]) => T;

export type ServiceInstance<T> = T extends SerivceConstructor<infer K> ? K : never;

export type ServiceGetter<T extends Record<string, unknown>, K extends SerivceConstructor<rpc.Service>> = (ns: T) => K;

export type Namespace = Record<string, unknown>;

export type ServiceMapCreator<
  N extends Namespace = Namespace,
  K extends SerivceConstructor<rpc.Service> = SerivceConstructor<rpc.Service>
> = Record<string, ServiceGetter<N, K>>;

type ServiceMethodCallback<Res> = (error: (Error|null), response?: Res) => void;

type ServiceMethod<Req, Res> = (request: Req, meta?: Metadata | ServiceMethodCallback<Res>, callback?: ServiceMethodCallback<Res>) => Call<Res>;

export type BuildService<T extends rpc.Service> = {
  [key in keyof T]: T[key] extends (request: infer Req) => Promise<infer Res> ? ServiceMethod<Req, Res> : T[key];
};

export type BuildServiceTree<T extends Record<string, unknown>> = {
  [key in keyof T]: T[key] extends rpc.Service
    ? BuildService<T[key]>
    : T[key] extends Record<string, unknown>
    ? BuildServiceTree<T[key]>
    : T[key];
}

export type BuildServiceMap<
  T extends ServiceMapCreator<N>,
  N extends Namespace = Namespace
> = {
  [key in keyof T]: BuildService<ServiceInstance<ReturnType<T[key]>>>;
};
