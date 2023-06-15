interface RoomContainer {
    /**current room*/
    room:[string,string]
}
interface Rooms {
    /** all rooms */
    rooms:RoomContainer[]
}

export type roomType = Rooms;
export type roomContainer = RoomContainer;