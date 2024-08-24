import { roomType } from "@/types/roomType";
import { listOfAvailable } from "./listOfAvailable";
// contain all roons;
var AllRooms:roomType = {rooms:[]};

/*
----: create a room 
*/

function createRoom(uuid1: string, uuid2: string):void {
    listOfAvailable.forEach((perfil) => {
        if (uuid1 == perfil.player.id || uuid2 == perfil.player.id) {
            perfil.player.hadRoom = true
        }
    })
    
    AllRooms.rooms.push({room:[uuid1,uuid2]})
}

export {createRoom,AllRooms};