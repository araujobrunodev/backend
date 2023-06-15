import PingOrPongReceive from "@/types/pingReceive";

function turnPingOrPong(uuid: string, msg: string, turn: boolean) {
    try {
        PingOrPongReceive.map((heart) => {
            if (heart.uuid == uuid) {
                switch (msg) {
                    case "PING":
                        heart.ping = turn;
                        break;

                    case "PONG":
                        heart.pong = turn;
                        break;

                    case "ALL":
                        heart.ping = turn;
                        heart.pong = turn;
                        break;
                }
            }
        })
    } catch (err) {
        console.error(err);
    }
}

export default turnPingOrPong;