import { roomContainer, roomType } from "@/types/roomType";
import { AllRooms } from "../room";

function removeRoom(room: roomContainer) {
    let NewRooms:roomContainer[] = [];

    AllRooms.rooms.map((currentRoom) => {
        if (currentRoom.room[0] !== room.room[0] && room.room[1] !== currentRoom.room[1]) {
            NewRooms.push(currentRoom);
        }
    })

    AllRooms.rooms = NewRooms;
}

export default removeRoom;