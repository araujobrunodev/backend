"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = require("../model/room");
const player_1 = __importDefault(require("../model/tools/player"));
const changeRoom_1 = __importDefault(require("../model/match/changeRoom"));
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const findAvailable_1 = __importDefault(require("../model/tools/findAvailable"));
exports.default = (manager) => {
    manager.on("ACCEPTED", (context, msg) => {
        let myID = (0, findAvailable_1.default)(context.originId, false);
        let strangerID = (0, findAvailable_1.default)(msg.uuid, false);
        let player1 = (0, player_1.default)(context.originId);
        let room = (0, findRoom_1.default)(myID);
        if (room === undefined || (0, changeRoom_1.default)(myID) == false) {
            (0, room_1.createRoom)(myID, msg.uuid);
        }
        context.send("ACCEPTED", {
            nick: player1.name,
            uuid: myID,
        }, strangerID);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FjY2VwdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0NBQTJDO0FBQzNDLG1FQUErQztBQUMvQywyRUFBbUQ7QUFFbkQsdUVBQStDO0FBRS9DLGlGQUF5RDtBQUV6RCxrQkFBZSxDQUFDLE9BQWdCLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNwQyxJQUFJLElBQUksR0FBRyxJQUFBLHVCQUFhLEVBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQVcsQ0FBQTtRQUMzRCxJQUFJLFVBQVUsR0FBRyxJQUFBLHVCQUFhLEVBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxLQUFLLENBQVcsQ0FBQTtRQUV4RCxJQUFJLE9BQU8sR0FBRyxJQUFBLGdCQUFVLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBbUIsQ0FBQztRQUM3RCxJQUFJLElBQUksR0FBRyxJQUFBLGtCQUFRLEVBQUMsSUFBSSxDQUFrQixDQUFDO1FBRTNDLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFBLG9CQUFVLEVBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ2pELElBQUEsaUJBQVUsRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLElBQUksRUFBRSxJQUFJO1NBQ2IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9hY2NlcHRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb20gfSBmcm9tIFwiLi4vbW9kZWwvcm9vbVwiO1xyXG5pbXBvcnQgZmluZFBsYXllciBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvcGxheWVyXCI7XHJcbmltcG9ydCBjaGFuZ2VSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9jaGFuZ2VSb29tXCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9maW5kUm9vbVwiO1xyXG5pbXBvcnQgeyByb29tQ29udGFpbmVyIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcbmltcG9ydCBmaW5kQXZhaWxhYmxlIGZyb20gXCIuLi9tb2RlbC90b29scy9maW5kQXZhaWxhYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIkFDQ0VQVEVEXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBsZXQgbXlJRCA9IGZpbmRBdmFpbGFibGUoY29udGV4dC5vcmlnaW5JZCwgZmFsc2UpIGFzIHN0cmluZ1xyXG4gICAgICAgIGxldCBzdHJhbmdlcklEID0gZmluZEF2YWlsYWJsZShtc2cudXVpZCxmYWxzZSkgYXMgc3RyaW5nXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIxID0gZmluZFBsYXllcihjb250ZXh0Lm9yaWdpbklkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuICAgICAgICBsZXQgcm9vbSA9IGZpbmRSb29tKG15SUQpIGFzIHJvb21Db250YWluZXI7XHJcblxyXG4gICAgICAgIGlmIChyb29tID09PSB1bmRlZmluZWQgfHwgY2hhbmdlUm9vbShteUlEKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVSb29tKG15SUQsIG1zZy51dWlkKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJBQ0NFUFRFRFwiLCB7XHJcbiAgICAgICAgICAgIG5pY2s6IHBsYXllcjEubmFtZSxcclxuICAgICAgICAgICAgdXVpZDogbXlJRCxcclxuICAgICAgICB9LCBzdHJhbmdlcklEKTtcclxuICAgIH0pXHJcbn0iXX0=
