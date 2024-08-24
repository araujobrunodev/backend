import { roomContainer } from "@/types/roomType";
import { listOfAvailable } from "../listOfAvailable";
import { AllRooms } from "../room";

function removeRoom(room: roomContainer) {
    let NewRooms:roomContainer[] = [];

    listOfAvailable.forEach((perfil) => {
        if (room.room[0] == perfil.player.id || room.room[1] == perfil.player.id) {
            perfil.player.hadRoom = false
        }
    })

    AllRooms.rooms.map((currentRoom) => {
        if (currentRoom.room[0] !== room.room[0] && room.room[1] !== currentRoom.room[1]) {
            NewRooms.push(currentRoom);
        }
    })

    AllRooms.rooms = NewRooms;
}

export default removeRoom;