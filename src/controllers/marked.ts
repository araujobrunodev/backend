import Manager from "@/manager";

export default (manager:Manager) => {
    manager.on("MARKED",(context,msg) => {
        context.send("MARKED",{
            collumn:msg.collumn,
            position:msg.position,
            mark:msg.mark
        },msg.opponent_uuid)
    })
}