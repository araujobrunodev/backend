import Manager from "@/manager";
import { playerAvailable } from "@/model/listOfAvailable";
import findRoom from "@/model/match/findRoom";
import removeRoom from "@/model/match/removeRoom";
import findAvailable from "@/model/tools/findAvailable";

export default (manager: Manager) => {
    manager.on("leave-room", (context, msg) => {
        //find room
        //warn all player in the room
        //remove room
        //its over
        const player = findAvailable(msg.me, true) as playerAvailable
        const currentRoom = findRoom(player.id)

        if (currentRoom == undefined) return;

        currentRoom.room.forEach((uuid) => {
            const uuid_decrypted = findAvailable(uuid, false) as string
            manager.send("EXIT", {nick: player.nick, value: "left the room"}, uuid_decrypted)
        })
        
        removeRoom(currentRoom)
    })
}