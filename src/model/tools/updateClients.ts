import { Clients } from "../clients";
import { updatePlayer } from "@/types/updatePlayer";
import { playerProperty } from "../../types/playerType";
import fs from "fs";

/*
----: update a specify data of client
*/
function UpdateDatabaseClients(players: playerProperty[], msg: updatePlayer): void {
    players.map((player) => {

        Clients.map((element: playerProperty) => {
            if (element.uuid == player.uuid) {

                switch (msg.type) {
                    case "available":
                        element.available = msg.value
                        break;
                }

            }
        })
    })
}

export default UpdateDatabaseClients;