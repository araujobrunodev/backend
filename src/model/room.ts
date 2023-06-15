import { roomType } from "@/types/roomType";
// contain all roons;
var AllRooms:roomType = {rooms:[]};

/*
----: create a room 
*/

function createRoom(uuid1: string, uuid2: string):void {
    AllRooms.rooms.push({room:[uuid1,uuid2]})
}

export {createRoom,AllRooms};