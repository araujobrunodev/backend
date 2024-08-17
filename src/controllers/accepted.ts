import Manager from "@/manager";
import { createRoom } from "@/model/room";
import findPlayer from "@/model/tools/player";
import changeRoom from "@/model/match/changeRoom";
import { playerProperty } from "@/types/playerType";
import findRoom from "@/model/match/findRoom";
import { roomContainer } from "@/types/roomType";
import findAvailable from "@/model/tools/findAvailable";

export default (manager: Manager) => {
    manager.on("ACCEPTED", (context, msg) => {
        let myID = findAvailable(context.originId, false) as string
        let strangerID = findAvailable(msg.uuid,false) as string

        let player1 = findPlayer(context.originId) as playerProperty;
        let room = findRoom(myID) as roomContainer;

        if (room === undefined || changeRoom(myID) == false) {
            createRoom(myID, msg.uuid);
        } 

        context.send("ACCEPTED", {
            nick: player1.name,
            uuid: myID,
        }, strangerID);
    })
}