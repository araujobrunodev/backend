import { playerProperty } from "./playerType"
import { roomType } from "./roomType";

interface ExitRoom {
    /** message of exit room*/
    value:string,
    /** exit the room?*/
    state:boolean,
    /**how is left the room*/
    player:playerProperty,
    /** you */
    you:string,
    /** room */
    room:any[]
}


var exit:ExitRoom = {
    player:{
        available:false,
        name:"",
        uuid:""
    },
    state:false,
    value:"",
    you: "",
    room:[]
}

export default exit;