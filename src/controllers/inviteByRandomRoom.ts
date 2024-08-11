import Manager from "@/manager";
import { listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

export default (manager: Manager) => {
    manager.on("invite-by-random-room", (context, msg) => {
        const blockPlayers = msg.blockPlayers;
        // id da origin
        // lista de disponiveis
        // bloqueio de jogadores já convidados
        // bloqueio do auto convite
        // convidar 
        // enviar resposta pro jogador junto com blockplayers

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
            
            if (perfil.player.randomRoom) {
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