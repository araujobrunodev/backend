import Manager from "@/manager";
import { listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

interface Available {
    nick: string,
    uuid: string
}

export default (manager: Manager) => {
    manager.on("available-list", (context, msg) => {
        const availables:Available[] = []; 
        
        listOfAvailable.forEach((perfil, index) => {
            const uuid = decrypt(index)

            if (uuid == msg.id) return;
            if (perfil.player.hadRoom) return;

            if (perfil.player.inviteStrangers) {
                availables.push({
                    nick: perfil.player.nick,
                    uuid: perfil.player.id
                })
            }
        })

        context.send("list-of-available", availables, msg.id)
    })
}