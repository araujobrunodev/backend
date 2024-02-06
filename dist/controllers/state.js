"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const player_1 = __importDefault(require("../model/tools/player"));
exports.default = (manager) => {
    manager.on("STATE", (context, msg) => {
        let currentRoom = (0, findRoom_1.default)(context.originId);
        let loser = "";
        if (currentRoom == undefined)
            return;
        currentRoom.room.find((uuid) => {
            let player = (0, player_1.default)(uuid);
            if (player == undefined)
                return;
            if (player.name != msg.winner)
                loser = player.name;
        });
        currentRoom.room.map((uuid) => {
            context.send("STATE", { winner: msg.winner, loser: loser }, uuid);
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsdUVBQStDO0FBQy9DLG1FQUErQztBQUkvQyxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQy9CLElBQUksV0FBVyxHQUFHLElBQUEsa0JBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFrQixDQUFDO1FBQzlELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksV0FBVyxJQUFJLFNBQVM7WUFBRSxPQUFPO1FBRXJDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBQSxnQkFBVSxFQUFDLElBQUksQ0FBbUIsQ0FBQztZQUVoRCxJQUFJLE1BQU0sSUFBSSxTQUFTO2dCQUFFLE9BQU87WUFFaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNO2dCQUN6QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtRQUVGLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCBmaW5kUm9vbSBmcm9tIFwiLi4vbW9kZWwvbWF0Y2gvZmluZFJvb21cIjtcclxuaW1wb3J0IGZpbmRQbGF5ZXIgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi90eXBlcy9wbGF5ZXJUeXBlXCI7XHJcbmltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOk1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJTVEFURVwiLChjb250ZXh0LG1zZykgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50Um9vbSA9IGZpbmRSb29tKGNvbnRleHQub3JpZ2luSWQpIGFzIHJvb21Db250YWluZXI7XHJcbiAgICAgICAgbGV0IGxvc2VyID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSb29tID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdXJyZW50Um9vbS5yb29tLmZpbmQoKHV1aWQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBsYXllciA9IGZpbmRQbGF5ZXIodXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGxheWVyID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsYXllci5uYW1lICE9IG1zZy53aW5uZXIpIFxyXG4gICAgICAgICAgICAgICAgbG9zZXIgPSBwbGF5ZXIubmFtZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjdXJyZW50Um9vbS5yb29tLm1hcCgodXVpZCkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LnNlbmQoXCJTVEFURVwiLHt3aW5uZXI6bXNnLndpbm5lcixsb3Nlcjpsb3Nlcn0sdXVpZCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59Il19
