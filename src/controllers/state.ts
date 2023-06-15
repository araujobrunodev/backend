import Manager from "@/manager";
import findRoom from "@/model/match/findRoom";
import findPlayer from "@/model/tools/player";
import { playerProperty } from "@/types/playerType";
import { roomContainer } from "@/types/roomType";

export default (manager:Manager) => {
    manager.on("STATE",(context,msg) => {
        let currentRoom = findRoom(context.originId) as roomContainer;
        let loser = "";

        if (currentRoom == undefined) return;

        currentRoom.room.find((uuid) => {
            let player = findPlayer(uuid) as playerProperty;

            if (player == undefined) return;

            if (player.name != msg.winner) 
                loser = player.name;
        })

        currentRoom.room.map((uuid) => {
            context.send("STATE",{winner:msg.winner,loser:loser},uuid);
        })

    })
}