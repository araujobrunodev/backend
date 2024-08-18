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
        //find room
        //warn all player in the room
        //remove room
        //its over
        const player = (0, findAvailable_1.default)(msg.me, true);
        const currentRoom = (0, findRoom_1.default)(player.id);
        if (currentRoom == undefined)
            return;
        currentRoom.room.forEach((uuid) => {
            const uuid_decrypted = (0, findAvailable_1.default)(uuid, false);
            manager.send("EXIT", { nick: player.nick, value: "left the room" }, uuid_decrypted);
        });
        (0, removeRoom_1.default)(currentRoom);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Nsb3NlUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHVFQUErQztBQUMvQywyRUFBbUQ7QUFDbkQsaUZBQXlEO0FBRXpELGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3RDLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLFVBQVU7UUFDVixNQUFNLE1BQU0sR0FBRyxJQUFBLHVCQUFhLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQW9CLENBQUE7UUFDN0QsTUFBTSxXQUFXLEdBQUcsSUFBQSxrQkFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUV2QyxJQUFJLFdBQVcsSUFBSSxTQUFTO1lBQUUsT0FBTztRQUVyQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlCLE1BQU0sY0FBYyxHQUFHLElBQUEsdUJBQWEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFXLENBQUE7WUFDM0QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFDLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDckYsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFBLG9CQUFVLEVBQUMsV0FBVyxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvY2xvc2VSb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyQXZhaWxhYmxlIH0gZnJvbSBcIi4uL21vZGVsL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgZmluZFJvb20gZnJvbSBcIi4uL21vZGVsL21hdGNoL2ZpbmRSb29tXCI7XHJcbmltcG9ydCByZW1vdmVSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9yZW1vdmVSb29tXCI7XHJcbmltcG9ydCBmaW5kQXZhaWxhYmxlIGZyb20gXCIuLi9tb2RlbC90b29scy9maW5kQXZhaWxhYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcImxlYXZlLXJvb21cIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIC8vZmluZCByb29tXHJcbiAgICAgICAgLy93YXJuIGFsbCBwbGF5ZXIgaW4gdGhlIHJvb21cclxuICAgICAgICAvL3JlbW92ZSByb29tXHJcbiAgICAgICAgLy9pdHMgb3ZlclxyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IGZpbmRBdmFpbGFibGUobXNnLm1lLCB0cnVlKSBhcyBwbGF5ZXJBdmFpbGFibGVcclxuICAgICAgICBjb25zdCBjdXJyZW50Um9vbSA9IGZpbmRSb29tKHBsYXllci5pZClcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb29tID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdXJyZW50Um9vbS5yb29tLmZvckVhY2goKHV1aWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZF9kZWNyeXB0ZWQgPSBmaW5kQXZhaWxhYmxlKHV1aWQsIGZhbHNlKSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgbWFuYWdlci5zZW5kKFwiRVhJVFwiLCB7bmljazogcGxheWVyLm5pY2ssIHZhbHVlOiBcImxlZnQgdGhlIHJvb21cIn0sIHV1aWRfZGVjcnlwdGVkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVtb3ZlUm9vbShjdXJyZW50Um9vbSlcclxuICAgIH0pXHJcbn0iXX0=
