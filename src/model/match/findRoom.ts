import { AllRooms } from "../room";
import { roomContainer } from "@/types/roomType";

function findRoom(uuid1: string): roomContainer | undefined {
    try {
        let ROOM:roomContainer|undefined;

        AllRooms.rooms.map((current) => {
            current.room.map((uuid2) => {
                if (uuid2 == uuid1) 
                    return ROOM = current;
            })
        })

        return ROOM;
    } catch (err) {
        console.error(err);
    }
}

export default findRoom;