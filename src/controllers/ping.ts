import Manager from "@/manager";
import { Clients } from "@/model/clients";
import { ignoreClients } from "@/model/tools/heartbeat";
import isPlayerAvailable from "@/model/tools/heartbeat";
import turnPingOrPong from "@/model/tools/turnPingOrPong";
import { playerProperty } from "@/types/playerType";

export default (manager: Manager) => {
    setInterval(() => {
        let playes:Array<playerProperty> = []; 

        Clients.map((player) => {
            let ignore = ignoreClients.find((client) => { return client.uuid == player.uuid });

            if (!ignore?.ignore || ignore == undefined) {

                turnPingOrPong(player.uuid, "PING", true);

                manager.send("PING", { uuid: player.uuid }, player.uuid);

                playes.push(player);
            }
        })

        setTimeout(() => {
            isPlayerAvailable(playes);
        }, 1000)
    }, 1000 * 60)
}