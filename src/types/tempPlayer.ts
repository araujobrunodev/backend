interface TempPlayer {
    /** every uuid that is possible alive */
    uuids:string[],
    /** player identification */
    uuid:string
}

var tempPlayer:TempPlayer = {
    uuids:[],
    uuid:""
}

export default tempPlayer;