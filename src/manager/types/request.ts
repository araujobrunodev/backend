import { Payload, QueuePayloads } from "./core";

type ExamplePayload = Payload<"BROADCAST", string>

type Connect = Payload<"CONNECT",{player:string}> 

type Invite = Payload<"INVITE",{uuid:string}>

type Accepted = Payload<"ACCEPTED",{uuid: string}>

type Denied = Payload<"DENIED",{uuid: string}>

type Pong = Payload<"PONG",{uuid:string}>

type Turn = Payload<"TURN",{uuid:string,value:string,opponent_uuid:string}>

type Marked = Payload<"MARKED",{collumn:string,position:string,mark:string,opponent_uuid:string}>

type State = Payload<"STATE",{winner:string}> 

type Tie = Payload<"TIE",{value:string}>

type changePermission = Payload<"change-permission", {
  nick: string,
  id: string,
  inviteStrangers: boolean,
  randomRoom: boolean
}>

type availableList = Payload<"available-list", {id:string}>

export type Requests = QueuePayloads<[
  ExamplePayload,
  Connect,
  Invite,
  Accepted,
  Denied,
  Pong,
  Turn,
  Marked,
  State,
  Tie,
  changePermission,
  availableList
]>
