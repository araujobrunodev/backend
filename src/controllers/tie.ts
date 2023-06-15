import Manager from "@/manager";
import findRoom from "@/model/match/findRoom";
import { roomContainer } from "@/types/roomType";

export default (manager:Manager) => {
    manager.on("TIE",(context,msg) => {
        let currentRoom = findRoom(context.originId) as roomContainer;

        currentRoom.room.map((uuid) => {
            context.send("TIE",{value:msg.value},uuid)
        })
    })
}