import Manager from "@/manager";
import { addPlayerAvailable } from "@/model/listOfAvailable";

export default (manager: Manager) => {
    manager.on("pop-up_permission", (context, msg) => {
        addPlayerAvailable({
            id: msg.uuid,
            inviteStrangers: msg.inviteStrangers,
            nick: msg.nick,
            randomRoom: msg.randomRoom
        })
    })
}