import { pingOrPong } from "@/types/pingReceive";
import UpdateDatabaseClients from "./updateClients";
import findPingOrPong from "./findHearbeat";
import { playerProperty } from "@/types/playerType";
import findRoom from "../match/findRoom";
import { roomContainer } from "@/types/roomType";
import exit from "@/types/exitType";
import removeRoom from "../match/removeRoom";
import findPlayer from "./player";

interface IgnoreClients {
    uuid: string,
    ignore: boolean
}

export let ignoreClients: Array<IgnoreClients> = []

function isPlayerAvailable(players: playerProperty[]) {
    let available: playerProperty[] = [];
    let unAvailable: playerProperty[] = [];

    players.map((player) => {
        let POP = findPingOrPong(player.uuid) as pingOrPong;
        let ignoreC = ignoreClients.find((client) => { return client.uuid == POP.uuid }) as IgnoreClients;

        if (ignoreC == undefined) {
            ignoreClients.push({ ignore: false, uuid: POP.uuid })
            ignoreC = ignoreClients.find((client) => { return client.uuid == POP.uuid }) as IgnoreClients
        }
        if (POP != undefined) {

            if (POP.ping) {
                switch (POP.pong) {
                    case true:

                        ignoreC.ignore = false;
                        available.push(player);
                        break;

                    case false:
                        let currentRoom = findRoom(player.uuid) as roomContainer;

                        if (currentRoom !== undefined) {
                            currentRoom.room.map((uuid) => {
                                if (uuid != player.uuid) {
                                    let player = findPlayer(uuid) as playerProperty;

                                    exit.player = player;
                                    exit.room = currentRoom.room;
                                    exit.value = "left the room";

                                    removeRoom(currentRoom);

                                    exit.state = true;
                                };
                            })
                        }

                        ignoreC.ignore = true;
                        unAvailable.push(player);
                        break;
                }

                POP.ping = false;
                POP.pong = false;
            }
        }
    })

    if (available.length != 0) UpdateDatabaseClients(available, { type: "available", value: true });

    if (unAvailable.length != 0) UpdateDatabaseClients(unAvailable, { type: "available", value: false });
}

export default isPlayerAvailable;