/**
 * 
 * !!! DO NOT MODIFY THIS FILE FOR STUPID REASONS !!!
 * @author leydev
 * 
 */

export interface Events {
  [event: string | symbol]: any
}

export type SignRest<A extends any[]> = A extends Payload<string, any>[] ? A : never;

export interface Payload<T extends string = string, M extends any = any> {
  type: T,
  msg: M
}

export type QueuePayloads<QP extends Payload<string, any>[], E extends Events = {}> =
  QP extends [infer P, ...infer RP] ?
  P extends Payload<string, any> ?
  QueuePayloads<SignRest<RP>, { [K in P["type"]]: P["msg"] } & E> : never : E;


export interface Context<A extends Events> {
  sendBroadcast<K extends keyof A>(type: K, msg: A[K] ): void
  send<K extends keyof A>(type: K, msg: A[K], uuid: string): void
  originId: string
}