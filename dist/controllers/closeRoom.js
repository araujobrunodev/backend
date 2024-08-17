"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const removeRoom_1 = __importDefault(require("../model/match/removeRoom"));
const findAvailable_1 = __importDefault(require("../model/tools/findAvailable"));
exports.default = (manager) => {
    manager.on("leave-room", (context, msg) => {
        //achar a sala
        //avisar o outro nego
        //remover da sala
        //terminar
        const player = (0, findAvailable_1.default)(msg.me, true);
        const currentRoom = (0, findRoom_1.default)(player.id);
        console.log(msg.me, "tire o infeliz da sala");
        if (currentRoom == undefined)
            return;
        console.log("avisando o jodador q saiu da sala, o corno infeliz");
        currentRoom.room.forEach((uuid) => {
            const uuid_decrypted = (0, findAvailable_1.default)(uuid, false);
            manager.send("EXIT", { nick: player.nick, value: "left the room" }, uuid_decrypted);
        });
        (0, removeRoom_1.default)(currentRoom);
        console.log("sala removida com sucesso");
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Nsb3NlUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHVFQUErQztBQUMvQywyRUFBbUQ7QUFDbkQsaUZBQXlEO0FBSXpELGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3RDLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixNQUFNLE1BQU0sR0FBRyxJQUFBLHVCQUFhLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQW9CLENBQUE7UUFDN0QsTUFBTSxXQUFXLEdBQUcsSUFBQSxrQkFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUU1QyxJQUFJLFdBQVcsSUFBSSxTQUFTO1lBQUUsT0FBTztRQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7UUFFakUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixNQUFNLGNBQWMsR0FBRyxJQUFBLHVCQUFhLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBVyxDQUFBO1lBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBQyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3JGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBQSxvQkFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQUM1QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9jbG9zZVJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBmaW5kUm9vbSBmcm9tIFwiLi4vbW9kZWwvbWF0Y2gvZmluZFJvb21cIjtcclxuaW1wb3J0IHJlbW92ZVJvb20gZnJvbSBcIi4uL21vZGVsL21hdGNoL3JlbW92ZVJvb21cIjtcclxuaW1wb3J0IGZpbmRBdmFpbGFibGUgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2ZpbmRBdmFpbGFibGVcIjtcclxuaW1wb3J0IGZpbmRQbGF5ZXIgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi90eXBlcy9wbGF5ZXJUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcImxlYXZlLXJvb21cIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIC8vYWNoYXIgYSBzYWxhXHJcbiAgICAgICAgLy9hdmlzYXIgbyBvdXRybyBuZWdvXHJcbiAgICAgICAgLy9yZW1vdmVyIGRhIHNhbGFcclxuICAgICAgICAvL3Rlcm1pbmFyXHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gZmluZEF2YWlsYWJsZShtc2cubWUsIHRydWUpIGFzIHBsYXllckF2YWlsYWJsZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb29tID0gZmluZFJvb20ocGxheWVyLmlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZy5tZSxcInRpcmUgbyBpbmZlbGl6IGRhIHNhbGFcIilcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb29tID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImF2aXNhbmRvIG8gam9kYWRvciBxIHNhaXUgZGEgc2FsYSwgbyBjb3JubyBpbmZlbGl6XCIpXHJcblxyXG4gICAgICAgIGN1cnJlbnRSb29tLnJvb20uZm9yRWFjaCgodXVpZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkX2RlY3J5cHRlZCA9IGZpbmRBdmFpbGFibGUodXVpZCwgZmFsc2UpIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICBtYW5hZ2VyLnNlbmQoXCJFWElUXCIsIHtuaWNrOiBwbGF5ZXIubmljaywgdmFsdWU6IFwibGVmdCB0aGUgcm9vbVwifSwgdXVpZF9kZWNyeXB0ZWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICByZW1vdmVSb29tKGN1cnJlbnRSb29tKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FsYSByZW1vdmlkYSBjb20gc3VjZXNzb1wiKVxyXG4gICAgfSlcclxufSJdfQ==
