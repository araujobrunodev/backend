"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRooms = exports.createRoom = void 0;
const listOfAvailable_1 = require("./listOfAvailable");
// contain all roons;
var AllRooms = { rooms: [] };
exports.AllRooms = AllRooms;
/*
----: create a room
*/
function createRoom(uuid1, uuid2) {
    listOfAvailable_1.listOfAvailable.forEach((perfil) => {
        if (uuid1 == perfil.player.id || uuid2 == perfil.player.id) {
            perfil.player.hadRoom = true;
        }
    });
    AllRooms.rooms.push({ room: [uuid1, uuid2] });
}
exports.createRoom = createRoom;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Jvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdURBQW9EO0FBQ3BELHFCQUFxQjtBQUNyQixJQUFJLFFBQVEsR0FBWSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsQ0FBQztBQWdCaEIsNEJBQVE7QUFkM0I7O0VBRUU7QUFFRixTQUFTLFVBQVUsQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUM1QyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQy9CLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7U0FDL0I7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQTtBQUM3QyxDQUFDO0FBRU8sZ0NBQVUiLCJmaWxlIjoibW9kZWwvcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvb21UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG4vLyBjb250YWluIGFsbCByb29ucztcclxudmFyIEFsbFJvb21zOnJvb21UeXBlID0ge3Jvb21zOltdfTtcclxuXHJcbi8qXHJcbi0tLS06IGNyZWF0ZSBhIHJvb20gXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb29tKHV1aWQxOiBzdHJpbmcsIHV1aWQyOiBzdHJpbmcpOnZvaWQge1xyXG4gICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKHBlcmZpbCkgPT4ge1xyXG4gICAgICAgIGlmICh1dWlkMSA9PSBwZXJmaWwucGxheWVyLmlkIHx8IHV1aWQyID09IHBlcmZpbC5wbGF5ZXIuaWQpIHtcclxuICAgICAgICAgICAgcGVyZmlsLnBsYXllci5oYWRSb29tID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIEFsbFJvb21zLnJvb21zLnB1c2goe3Jvb206W3V1aWQxLHV1aWQyXX0pXHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlUm9vbSxBbGxSb29tc307Il19
