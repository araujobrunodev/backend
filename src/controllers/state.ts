import Manager from "@/manager";
import { playerAvailable } from "@/model/listOfAvailable";
import findRoom from "@/model/match/findRoom";
import findAvailable from "@/model/tools/findAvailable";
import { roomContainer } from "@/types/roomType";

export default (manager:Manager) => {
    manager.on("STATE",(context,msg) => {
        const myID = findAvailable(context.originId, false) as string
        let currentRoom = findRoom(myID) as roomContainer;
        let loser = "";

        if (currentRoom == undefined) return;

        currentRoom.room.find((uuid) => {
            let player = findAvailable(uuid, true) as playerAvailable

            if (player.nick != msg.winner) 
                return loser = player.nick;
        })

        currentRoom.room.map((uuid) => {
            context.send("STATE",{winner:msg.winner,loser:loser},findAvailable(uuid, false) as string);
        })
    })
}