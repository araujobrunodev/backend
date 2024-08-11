import Manager from "@/manager";
import { createRoom } from "@/model/room";
import findPlayer from "@/model/tools/player";
import changeRoom from "@/model/match/changeRoom";
import { playerProperty } from "@/types/playerType";
import findRoom from "@/model/match/findRoom";
import { roomContainer } from "@/types/roomType";
import { listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

export default (manager: Manager) => {
    manager.on("ACCEPTED", (context, msg) => {
        listOfAvailable.forEach((available, index) => {
            if (msg.uuid == available.player.id) 
                return msg.uuid = decrypt(index)
        })

        let player1 = findPlayer(context.originId) as playerProperty;
        let player2 = findPlayer(msg.uuid) as playerProperty;

        if (player1 != undefined && player2 != undefined) {
            let room = findRoom(player1.uuid) as roomContainer;

            if (!player1.available || !player2.available) return;

            if (room === undefined) {
                createRoom(context.originId, msg.uuid);

                context.send("ACCEPTED", {
                    nick: player1.name,
                    uuid: player1.uuid,
                }, player2.uuid);
            } else {
                if (changeRoom(player1.uuid) == true) {
                    createRoom(context.originId, msg.uuid);

                    context.send("ACCEPTED", {
                        nick: player1.name,
                        uuid: player1.uuid
                    }, player2.uuid);
                }
            }
        }
    })
}