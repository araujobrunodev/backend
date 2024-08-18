import { Payload, QueuePayloads } from "./core";

type ExamplePayload = Payload<"BROADCAST", string>

type Connect = Payload<"CONNECT",{player:string}> 

type Accepted = Payload<"ACCEPTED",{uuid: string}>

type Denied = Payload<"DENIED",{uuid: string}>

type Pong = Payload<"PONG",{uuid:string}>

type Turn = Payload<"TURN",{uuid:string,value:string,opponent_uuid:string}>

type Marked = Payload<"MARKED",{collumn:string,position:string,mark:string,opponent_uuid:string}>

type State = Payload<"STATE",{winner:string}> 

type Tie = Payload<"TIE",{value:string}>

type InviteByRandomRoom = Payload<"invite-by-random-room",{blockPlayers: string[]}>

type changePermission = Payload<"change-permission", {
  nick: string,
  id: string,
  inviteStrangers: boolean,
  randomRoom: boolean
}>

type availableList = Payload<"available-list", {id:string}>

type invite = Payload<"invite",{strangerID: string, yourUUID: string, yourNick: string}>

type LeaveRoom = Payload<"leave-room",{me: string, otherPlayer: string}>

export type Requests = QueuePayloads<[
  ExamplePayload,
  Connect,
  Accepted,
  Denied,
  Pong,
  Turn,
  Marked,
  State,
  Tie,
  changePermission,
  availableList,
  invite,
  InviteByRandomRoom,
  LeaveRoom
]>
