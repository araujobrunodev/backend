import Manager from "@/manager";
import findAvailable from "@/model/tools/findAvailable";

export default (manager:Manager) => {
    manager.on("MARKED",(context,msg) => {
        const opponent_uuid = findAvailable(msg.opponent_uuid, false) as string

        context.send("MARKED",{
            collumn:msg.collumn,
            position:msg.position,
            mark:msg.mark
        }, opponent_uuid)
    })
}