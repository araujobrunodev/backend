import Manager from "@/manager";
import { listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

export default (manager: Manager) => {
    manager.on("invite-by-random-room", (context, msg) => {
        const blockPlayers = msg.blockPlayers;

        let strangerPlayerIdCrypt = ""
        let strangerPlayerIdDecrypt = ""
        let ownPlayer = {nick: "", uuid: ""}

        listOfAvailable.find((perfil,index) => {
            const decryptID = decrypt(index)
            
            if (decryptID == context.originId) {
                ownPlayer.nick = perfil.player.nick
                ownPlayer.uuid = perfil.player.id
                return
            }
        })

        listOfAvailable.forEach((perfil, index) => {
            const playerID = perfil.player.id
            let existedInBlockPlayers = false
            
            if (perfil.player.randomRoom && !perfil.player.hadRoom) {
                blockPlayers.forEach(blockPlayer => {
                    if (blockPlayer == playerID) return existedInBlockPlayers = true
                })

                if (!existedInBlockPlayers && 
                    playerID != ownPlayer.uuid) {
                    strangerPlayerIdDecrypt = decrypt(index)
                    return strangerPlayerIdCrypt = playerID
                }
            }
        })

        if (strangerPlayerIdCrypt.length != 0) context.send("INVITE", {nick: ownPlayer.nick, uuid: ownPlayer.uuid, value: "invite you for a match by random room"}, strangerPlayerIdDecrypt)
        if (strangerPlayerIdCrypt.length != 0) context.send("invited-by-random-room", {uuid: strangerPlayerIdCrypt}, context.originId)
        else context.send("no-player-available-random-room",undefined,context.originId)
    })
}