import encrypt from "./tools/encrypt";
const listOfAvailable: AvailableList[] = [];

interface PlayerAvailable {
    nick: string,
    id: string,
    inviteStrangers: boolean,
    randomRoom: boolean,
    hadRoom: boolean
}

interface AvailableList {
    player: PlayerAvailable,
    deepKey: {
        iv: Buffer,
        key: Buffer,
        tag: Buffer
    }
}

export type playerAvailable = PlayerAvailable

function addPlayerAvailable (player: PlayerAvailable) {
    if (player.nick.length == 0 || player.id.length == 0) return;

    //block the same player that already has in the list, 'cause him can change your id;

    listOfAvailable.push({
        player: {
            id: player.id,
            inviteStrangers: player.inviteStrangers,
            nick: player.nick,
            randomRoom: player.randomRoom,
            hadRoom: false
        }, 
        deepKey: {
            iv: Buffer.alloc(16),
            key: Buffer.alloc(32),
            tag: Buffer.alloc(0)
        }
    })

    encrypt((listOfAvailable.length - 1))
}

export {addPlayerAvailable, listOfAvailable}