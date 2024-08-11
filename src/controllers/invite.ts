import findPlayer from "@/model/tools/player";
import Manager from "@/manager";
import { playerProperty } from "@/types/playerType";

export default (manager: Manager) => {
    manager.on("INVITE", (context, msg) => {
        let player1 = findPlayer(context.originId) as playerProperty,
            player2 = findPlayer(msg.uuid) as playerProperty;

        if (player1 != undefined && player2 != undefined) {
            if (!player1.available || !player2.available) return;
            context.send("INVITE", { nick: player1.name, uuid: player1.uuid, value: "invite you for a match" }, player2.uuid)
        }
    })
}