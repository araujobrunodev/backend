import Manager from "@/manager";
import findRoom from "@/model/match/findRoom";
import findAvailable from "@/model/tools/findAvailable";
import { roomContainer } from "@/types/roomType";

export default (manager:Manager) => {
    manager.on("TIE",(context,msg) => {
        const playerID = findAvailable(context.originId, false) as string 
        const currentRoom = findRoom(playerID) as roomContainer;

        currentRoom.room.map(async (uuid) => {
            context.send("TIE",{value:msg.value}, findAvailable(uuid, false) as string)
        })
    })
}