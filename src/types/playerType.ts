interface Player {
    /** player name*/
    name:string,
    /** player identification*/
    uuid:string,
    /** is available in the game*/
    available:boolean
}

export type playerProperty = Player;