import Manager from "@/manager";
import findRoom from "@/model/match/findRoom";
import findPlayer from "@/model/tools/player";
import { playerProperty } from "@/types/playerType";
import { roomContainer } from "@/types/roomType";

export default (manager: Manager) => {
    manager.on("TURN", (context, msg) => {
        let currentRoom = findRoom(msg.uuid) as roomContainer;
        let player:playerProperty;
        let begin:boolean;
        let playerIsAvailable = false;

        if (currentRoom == undefined) return console.log("room return undefined");

        currentRoom.room.map((uuid) => {
            let Player = findPlayer(uuid) as playerProperty;

            if (Player == undefined) return;

            playerIsAvailable = true;
            
            if (!Player.available) return playerIsAvailable = false;
        })

        if (!playerIsAvailable) return;

        switch (msg.value) {
            case "begin":
                let prizeDraw = Math.round(Math.random() * (currentRoom.room.length - 1));
                player = findPlayer(currentRoom.room[prizeDraw]) as playerProperty;
                begin = true;
                break;

            case "change":
                player = findPlayer(msg.opponent_uuid) as playerProperty;
                if (player == undefined) console.warn("player return undefined","uuid:",msg.opponent_uuid);
                begin = false;
                break;
        }

        currentRoom.room.map((uuid:string) => {
            let  NewBegin = false;
            
            if (begin == true) {
                if (player.uuid == uuid) NewBegin = begin 
            }

            manager.send("TURN",{
                nick:player.name,
                value:"your turn",
                beginningOfTheGame:NewBegin
            },uuid)
        })
    })
}