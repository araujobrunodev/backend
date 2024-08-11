import Manager from "@/manager";
import { listOfAvailable } from "@/model/listOfAvailable";
import decrypt from "@/model/tools/decrypt";

export default (manager: Manager) => {
    manager.on("invite-stranger", (context, msg) => {
        let strangerID = ""
        let myID = ""

        listOfAvailable.forEach((available, index) => {
            let decryptID = decrypt(index)

            if (available.player.id == msg.strangerID) strangerID = decryptID
            if (decryptID == msg.yourUUID) myID = available.player.id
        })

        context.send("INVITE", { nick: msg.yourNick, uuid: myID, value: "invite you for a match" }, strangerID)
    })
}