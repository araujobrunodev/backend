import crypto from "crypto"
import { createRandom } from "./createRandom";
import { listOfAvailable } from "../listOfAvailable";

function encrypt (index: number) {
    const player = listOfAvailable[index]

    player.deepKey.iv = Buffer.alloc(16, createRandom(16), "utf-8")
    player.deepKey.key = Buffer.alloc(32, createRandom(32), "utf-8")

    const cipher = crypto.createCipheriv(
        "aes-256-gcm", 
        player.deepKey.key,
        player.deepKey.iv
    );

    let ciphered = cipher.update(player.player.id,"utf-8","hex");
    ciphered += cipher.final("hex")
    player.player.id = ciphered;
}

export default encrypt