/**
 * 
 * !!! DO NOT MODIFY THIS FILE FOR STUPID REASONS !!!
 * @author leydev
 * 
 */

import { EventEmitter } from "events"
import { v4 as uuidv4 } from "uuid"
import WS from "ws"

import { Context, Events, Payload } from "./types/core"
import { Requests } from "./types/request"
import { Responses } from "./types/response"

export class Manager<Req extends Events = Requests, Res extends Events = Responses> extends EventEmitter {
  private websocket: WS.Server

  constructor(websocket: WS.Server) {
    super()

    this.websocket = websocket

    this.websocket.on("error", (error: Error) => console.error(error))

    this.websocket.on("connection", (socket: WS.WebSocket, req) => {
      Object.assign(socket, { uuid: uuidv4() });

      console.log(`\n\n✨ New client: ${socket.uuid} from ${req.socket.remoteAddress}`)

      socket.on("close", () => console.log(`Client ${socket.uuid} closed conection.`))

      socket.on("message", (message: WS.RawData) => {
        let payload: Payload = { type: "", msg: undefined };

        try {
          payload = Manager.decodePayload(message);
        } catch (error) {
          console.error(error);
          socket.send(`Unknown command: ${message.toString()}`)
        }

        super.emit(payload.type, payload.msg, socket.uuid)
      })

    });
  }

  private static decodePayload(message: WS.RawData): Payload {
    const payload = JSON.parse(message.toString()) as Payload;

    if (payload.type || payload.type && payload.msg) return payload;

    throw new Error(`Wrong payload. Expected {type: string, msg: any} recived: {${payload.type}, ${payload.msg}}`)
  }

  private static encodePayload(data: Payload): string {
    return JSON.stringify(data)
  }

  /**
   * Send a message to all connected clients
   * 
   * @example
   * manager.sendBroadcast("CHANNEL", { data: "test" })
   */
  sendBroadcast<K extends keyof Res>(type: K, msg: Res[K], uuid?: string) {
    const payload = Manager.encodePayload({ type: type as string, msg });

    this.websocket.clients.forEach((client) => {
      if (client.uuid === uuid) return;

      client.send(payload)
    })
  }

  /**
   * Send a message to specific client based in UUID
   * 
   * @example
   * manager.send("CHANNEL", { data: "test" }, "UUID")
   */
  send<K extends keyof Res>(type: K, msg: Res[K], uuid: string): boolean {
    const payload = Manager.encodePayload({ type: type as string, msg });
   
    const client = Array.from(this.websocket.clients).find((client) => client.uuid === uuid);

    if (client) {
      client.send(payload)
      return true;
    }
    
    return false;
  }

  /**
   * Wait for message in spacific channel
   * 
   * @example
   * manager.on("CHANNEL", (context: Context, msg) => void)
   */
  on<K extends keyof Req>(eventName: K, listener: (context: Context<Res>, msg: Req[K]) => void) {
    const callback = (msg: any, uuid: string) => listener({
      sendBroadcast: (type, msg) => this.sendBroadcast(type, msg, uuid),
      send:(type,msg,uuid) =>  this.send(type,msg,uuid),
      originId: uuid
    }, msg);

    return super.on(eventName as string, callback);
  }
}

export default Manager;
