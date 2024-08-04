import findPlayer from "./tools/player";
import { playerProperty } from "../types/playerType";

var Clients: playerProperty[] = [];

/*
----: get the client and put into clients database
*/

function saveClient(client: playerProperty): any {
    if (Clients.length == 0) 
        Clients.push(client)
    else {
        let isCompare = findPlayer(client.uuid) as playerProperty;

        if (isCompare == undefined) Clients.push(client)
    }
}

export { saveClient, Clients };