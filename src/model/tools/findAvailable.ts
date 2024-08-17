import { listOfAvailable, playerAvailable } from "../listOfAvailable";
import decrypt from "./decrypt";

const findAvailable = (uuid:string, all:boolean) => {
    let result = {} as playerAvailable | string

    listOfAvailable.forEach((available,index) => {
        // uuid decrypted
        if (decrypt(index) == uuid) {
            return result = (all ? available.player : available.player.id)
        }

        // uuid encrypted
        if (available.player.id == uuid) {
            return result = (all ? available.player : decrypt(index))
        } 
    })

    return result
}

export default findAvailable