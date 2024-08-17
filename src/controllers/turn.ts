import Manager from "@/manager";
import { playerAvailable } from "@/model/listOfAvailable";
import findRoom from "@/model/match/findRoom";
import findAvailable from "@/model/tools/findAvailable";
import findPlayer from "@/model/tools/player";
import { playerProperty } from "@/types/playerType";
import { roomContainer } from "@/types/roomType";

export default (manager: Manager) => {
    manager.on("TURN", (context, msg) => {
        let currentRoom = findRoom(msg.opponent_uuid) as roomContainer;
        let player:playerAvailable;
        let begin = false;

        if (currentRoom == undefined) return;

        switch (msg.value) {
            case "begin":
                let prizeDraw = Math.round(Math.random() * (currentRoom.room.length - 1));
                player = findAvailable(currentRoom.room[prizeDraw], true) as playerAvailable
                
                begin = true;
                break;

            case "change":
                player = findAvailable(msg.opponent_uuid, true) as playerAvailable
                
                begin = false;
                break;
        }

        currentRoom.room.map((uuid:string) => {
            let  NewBegin = false;
            
            if (begin == true) {
                if (player.id == uuid) NewBegin = begin 
            }

            context.send("TURN",{
                nick: player.nick,
                value: "your turn",
                beginningOfTheGame: NewBegin
            }, findAvailable(uuid,false) as string)
        })
    })
}