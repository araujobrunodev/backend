import crypto from "crypto"
import { listOfAvailable } from "../listOfAvailable";

function decrypt (index: number):string {
    const player = listOfAvailable[index]

    const cipher = crypto.createDecipheriv(
        "aes-256-gcm", 
        player.deepKey.key,
        player.deepKey.iv
    );

    cipher.setAuthTag(player.deepKey.tag)
    
    let ciphered = cipher.update(player.player.id,"hex","utf-8");
    ciphered += cipher.final("utf-8")
    
    return ciphered;
}

export default decrypt