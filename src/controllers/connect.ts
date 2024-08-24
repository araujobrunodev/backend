import Manager from "@/manager";
import { saveClient } from "@/model/clients";
import PingOrPongReceive from "@/types/pingReceive";
import tempPlayer from "@/types/tempPlayer";
import { Clients } from "@/model/clients";
import { createRandom } from "@/model/tools/createRandom";
import { addPlayerAvailable } from "@/model/listOfAvailable";

export default (manager:Manager) => {
    manager.on("CONNECT",(context,msg) => {
        let nick = msg.player

        Clients.forEach((client) => {
            let lenthMax = Math.abs(nick.length - 7)
            
            if (client.name == nick) {
                if (lenthMax == 0) {
                    nick = (nick.slice(0, nick.length - 2))
                    nick += createRandom(2)
                } else 
                    nick += createRandom(lenthMax)
            }
        })

        context.send("CONNECTED",{uuid: context.originId, newNick: nick},context.originId);
        
        saveClient({
            name:nick,
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

        addPlayerAvailable({
            id: context.originId,
            inviteStrangers: false,
            nick: nick,
            randomRoom: false,
            hadRoom: false
        })
    })
}