import PingOrPongReceive, { pingOrPong } from "@/types/pingReceive";

function findPingOrPong(uuid: string) {
    return PingOrPongReceive.find((PPR) => {
        return (PPR.uuid == uuid)
    })
}

export default findPingOrPong;