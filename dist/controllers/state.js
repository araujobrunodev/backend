"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const findAvailable_1 = __importDefault(require("../model/tools/findAvailable"));
exports.default = (manager) => {
    manager.on("STATE", (context, msg) => {
        const myID = (0, findAvailable_1.default)(context.originId, false);
        let currentRoom = (0, findRoom_1.default)(myID);
        let loser = "";
        if (currentRoom == undefined)
            return;
        currentRoom.room.find((uuid) => {
            let player = (0, findAvailable_1.default)(uuid, true);
            if (player.nick != msg.winner)
                return loser = player.nick;
        });
        currentRoom.room.map((uuid) => {
            context.send("STATE", { winner: msg.winner, loser: loser }, (0, findAvailable_1.default)(uuid, false));
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsdUVBQStDO0FBQy9DLGlGQUF5RDtBQUd6RCxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQy9CLE1BQU0sSUFBSSxHQUFHLElBQUEsdUJBQWEsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBVyxDQUFBO1FBQzdELElBQUksV0FBVyxHQUFHLElBQUEsa0JBQVEsRUFBQyxJQUFJLENBQWtCLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsSUFBSSxXQUFXLElBQUksU0FBUztZQUFFLE9BQU87UUFFckMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFBLHVCQUFhLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBb0IsQ0FBQTtZQUV6RCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU07Z0JBQ3pCLE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7UUFFRixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFDLElBQUEsdUJBQWEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFXLENBQUMsQ0FBQztRQUMvRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3N0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyQXZhaWxhYmxlIH0gZnJvbSBcIi4uL21vZGVsL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgZmluZFJvb20gZnJvbSBcIi4uL21vZGVsL21hdGNoL2ZpbmRSb29tXCI7XHJcbmltcG9ydCBmaW5kQXZhaWxhYmxlIGZyb20gXCIuLi9tb2RlbC90b29scy9maW5kQXZhaWxhYmxlXCI7XHJcbmltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOk1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJTVEFURVwiLChjb250ZXh0LG1zZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG15SUQgPSBmaW5kQXZhaWxhYmxlKGNvbnRleHQub3JpZ2luSWQsIGZhbHNlKSBhcyBzdHJpbmdcclxuICAgICAgICBsZXQgY3VycmVudFJvb20gPSBmaW5kUm9vbShteUlEKSBhcyByb29tQ29udGFpbmVyO1xyXG4gICAgICAgIGxldCBsb3NlciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Um9vbSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucm9vbS5maW5kKCh1dWlkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBmaW5kQXZhaWxhYmxlKHV1aWQsIHRydWUpIGFzIHBsYXllckF2YWlsYWJsZVxyXG5cclxuICAgICAgICAgICAgaWYgKHBsYXllci5uaWNrICE9IG1zZy53aW5uZXIpIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvc2VyID0gcGxheWVyLm5pY2s7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucm9vbS5tYXAoKHV1aWQpID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5zZW5kKFwiU1RBVEVcIix7d2lubmVyOm1zZy53aW5uZXIsbG9zZXI6bG9zZXJ9LGZpbmRBdmFpbGFibGUodXVpZCwgZmFsc2UpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iXX0=
