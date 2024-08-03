import Manager from "@/manager";
import { listOfAvailable } from "@/model/listOfAvailable";

interface Available {
    nick: string,
    uuid: string
}

export default (manager: Manager) => {
    manager.on("available-list", (context, msg) => {
        const availables:Available[] = []; 
        
        listOfAvailable.forEach(perfil => {
            availables.push({
                nick: perfil.player.nick,
                uuid: perfil.player.id
            })
        })

        context.send("list-of-available", availables, msg.id)
    })
}