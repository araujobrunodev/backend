/**
 * 
 * !!! DO NOT MODIFY THIS FILE FOR STUPID REASONS !!!
 * @author leydev
 * 
 */

import "ws";

declare module "ws" {
  export interface WebSocket {
    /** The connected user UUID */
    uuid: string
  }
}
