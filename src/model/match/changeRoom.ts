import { playerProperty } from "@/types/playerType"
import findRoom from "./findRoom"
import findPlayer from "../tools/player"
import { roomContainer } from "@/types/roomType"
import exit from "@/types/exitType"
import removeRoom from "./removeRoom"

var changeRoom = (uuid: string): boolean => {
    let player = findPlayer(uuid) as playerProperty;
    let currentRoom = findRoom(uuid) as roomContainer;
    let result: boolean = false;

    if (currentRoom != undefined) {
        currentRoom.room.map((currentUuid) => {
            if (currentUuid !== uuid) {
                let player1 = findPlayer(currentUuid) as playerProperty;

                if (player1 == undefined || player == undefined) return changeRoom(uuid);

                exit.player = player;
                exit.room = currentRoom.room;
                exit.value = "left the room";

                removeRoom(currentRoom);

                exit.state = true;
                result = true;
            }
        })
    }

    return result;
}

export default changeRoom;