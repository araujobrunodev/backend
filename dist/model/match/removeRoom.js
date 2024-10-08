"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../listOfAvailable");
const room_1 = require("../room");
function removeRoom(room) {
    let NewRooms = [];
    listOfAvailable_1.listOfAvailable.forEach((perfil) => {
        if (room.room[0] == perfil.player.id || room.room[1] == perfil.player.id) {
            perfil.player.hadRoom = false;
        }
    });
    room_1.AllRooms.rooms.map((currentRoom) => {
        if (currentRoom.room[0] !== room.room[0] && room.room[1] !== currentRoom.room[1]) {
            NewRooms.push(currentRoom);
        }
    });
    room_1.AllRooms.rooms = NewRooms;
}
exports.default = removeRoom;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL21hdGNoL3JlbW92ZVJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx3REFBcUQ7QUFDckQsa0NBQW1DO0FBRW5DLFNBQVMsVUFBVSxDQUFDLElBQW1CO0lBQ25DLElBQUksUUFBUSxHQUFtQixFQUFFLENBQUM7SUFFbEMsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7U0FDaEM7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVGLGVBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDL0IsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVGLGVBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBQzlCLENBQUM7QUFFRCxrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoibW9kZWwvbWF0Y2gvcmVtb3ZlUm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcm9vbVR5cGVcIjtcclxuaW1wb3J0IHsgbGlzdE9mQXZhaWxhYmxlIH0gZnJvbSBcIi4uL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgeyBBbGxSb29tcyB9IGZyb20gXCIuLi9yb29tXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb29tKHJvb206IHJvb21Db250YWluZXIpIHtcclxuICAgIGxldCBOZXdSb29tczpyb29tQ29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBsaXN0T2ZBdmFpbGFibGUuZm9yRWFjaCgocGVyZmlsKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvb20ucm9vbVswXSA9PSBwZXJmaWwucGxheWVyLmlkIHx8IHJvb20ucm9vbVsxXSA9PSBwZXJmaWwucGxheWVyLmlkKSB7XHJcbiAgICAgICAgICAgIHBlcmZpbC5wbGF5ZXIuaGFkUm9vbSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBBbGxSb29tcy5yb29tcy5tYXAoKGN1cnJlbnRSb29tKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb29tLnJvb21bMF0gIT09IHJvb20ucm9vbVswXSAmJiByb29tLnJvb21bMV0gIT09IGN1cnJlbnRSb29tLnJvb21bMV0pIHtcclxuICAgICAgICAgICAgTmV3Um9vbXMucHVzaChjdXJyZW50Um9vbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBBbGxSb29tcy5yb29tcyA9IE5ld1Jvb21zO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW1vdmVSb29tOyJdfQ==
