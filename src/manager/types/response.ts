import { Payload, QueuePayloads } from "./core";

type ExamplePayload = Payload<"BROADCAST", string>
type Connected = Payload<"CONNECTED",{uuid: string}> 
type Invite = Payload<"INVITE",{nick: string,uuid:string,value: string}>
type Accepted = Payload<"ACCEPTED",{nick:string,uuid:string}>
type Denied = Payload<"DENIED",string>
type Ping = Payload<"PING",{uuid:string}>
type Turn = Payload<"TURN",{nick:string,value:string,beginningOfTheGame:boolean}>
type Marked = Payload<"MARKED",{collumn:string,position:string,mark:string}>
type State = Payload<"STATE",{winner:string,loser:string}>
type Tie = Payload<"TIE",{value:string}>
type Exit = Payload<"EXIT",{nick:string,value:string}>
type sendList = Payload<"list-of-available",{nick:string,uuid:string}[]>

export type Responses= QueuePayloads<[
  ExamplePayload,
  Connected,
  Invite,
  Accepted,
  Denied,
  Ping,
  Turn,
  Marked,
  State,
  Tie,
  Exit,
  sendList
]>