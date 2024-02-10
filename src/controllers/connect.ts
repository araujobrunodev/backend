import Manager from "@/manager";
import { saveClient } from "@/model/clients";
import PingOrPongReceive from "@/types/pingReceive";
import tempPlayer from "@/types/tempPlayer";

export default (manager:Manager) => {
    manager.on("CONNECT",(context,msg) => {
        context.send("CONNECTED",{uuid: context.originId},context.originId);
        
        saveClient({
            name:msg.player,
            uuid:context.originId,
            available:true
        });

        tempPlayer.uuids.push(context.originId);
        tempPlayer.uuid = context.originId;

        PingOrPongReceive.push({
            ping:false,
            pong:false,
            uuid:context.originId
        })
    })
}