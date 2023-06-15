import Manager from "@/manager";
import findPlayer from "@/model/tools/player";
import { playerProperty } from "@/types/playerType";
import turnPingOrPong from "@/model/tools/turnPingOrPong";
import "../model/tools/disableAvailable"

export default (manager:Manager) => {
    manager.on("PONG",(context,msg) => {
        let player = findPlayer(msg.uuid) as playerProperty;

        if (player == undefined) return;
        turnPingOrPong(msg.uuid,"PONG",true);
    })
}