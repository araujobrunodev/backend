import Manager from "@/manager";
import { addPlayerAvailable, listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

export default (manager: Manager) => {
    manager.on("change-permission", (context, msg) => {
        if (msg.id.length < 36) return;
        if (listOfAvailable.length == 0) {
            addPlayerAvailable({
                id: msg.id,
                inviteStrangers: msg.inviteStrangers,
                nick: msg.nick,
                randomRoom: msg.randomRoom
            })
        } else {
            listOfAvailable.forEach((available,index) => {
                let availableId = decrypt(index)
            
                if (availableId == msg.id) {
                    available.player.inviteStrangers = msg.inviteStrangers
                    available.player.randomRoom = msg.randomRoom
                }
            })
        }
    })
}