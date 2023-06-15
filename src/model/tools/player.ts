import { Clients } from "../clients";
import { playerProperty } from "../../types/playerType";
/*
----: find a specify player 
*/
function findPlayer(uuid: string): playerProperty | undefined {
    try {
        return Clients.find((element: playerProperty) => {
            return (element.uuid == uuid)
        });
    } catch (err) {
        console.error(err)
        return undefined;
    }
}

export default findPlayer;