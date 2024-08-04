import Manager from "@/manager";
import findPlayer from "@/model/tools/player";
import { playerProperty } from "@/types/playerType";

export default (manager:Manager) => {
    manager.on("DENIED",(context,msg) => {
        let client1 = findPlayer(context.originId) as playerProperty;
        let client2 = findPlayer(msg.uuid) as playerProperty;

        if (client1 != undefined && client2 != undefined) {
            if (!client1.available || !client2.available) return;
            
            context.send("DENIED",client1.name as string ,client2.uuid);
        }
    })
}