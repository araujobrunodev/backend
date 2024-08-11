import Manager from "@/manager";
import { listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

export default (manager:Manager) => {
    manager.on("MARKED",(context,msg) => {
        listOfAvailable.forEach((available, index) => {
            if (msg.opponent_uuid == available.player.id) 
                return msg.opponent_uuid = decrypt(index)
        })

        context.send("MARKED",{
            collumn:msg.collumn,
            position:msg.position,
            mark:msg.mark
        },msg.opponent_uuid)
    })
}