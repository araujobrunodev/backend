import { playerProperty } from "./playerType";

interface PingData {
    player:playerProperty,
    receive:boolean
}

export type pingData = PingData; 