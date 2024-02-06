"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = require("../model/room");
const player_1 = __importDefault(require("../model/tools/player"));
const changeRoom_1 = __importDefault(require("../model/match/changeRoom"));
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
exports.default = (manager) => {
    manager.on("ACCEPTED", (context, msg) => {
        let player1 = (0, player_1.default)(context.originId);
        let player2 = (0, player_1.default)(msg.uuid);
        if (player1 != undefined && player2 != undefined) {
            let room = (0, findRoom_1.default)(player1.uuid);
            if (!player1.available || !player2.available)
                return;
            if (room === undefined) {
                (0, room_1.createRoom)(context.originId, msg.uuid);
                console.log("accepted your invite");
                context.send("ACCEPTED", {
                    nick: player1.name,
                    uuid: player1.uuid,
                }, player2.uuid);
            }
            else {
                if ((0, changeRoom_1.default)(player1.uuid) == true) {
                    (0, room_1.createRoom)(context.originId, msg.uuid);
                    console.log("accepted your invite");
                    context.send("ACCEPTED", {
                        nick: player1.name,
                        uuid: player1.uuid
                    }, player2.uuid);
                }
            }
        }
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FjY2VwdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0NBQTJDO0FBQzNDLG1FQUErQztBQUMvQywyRUFBbUQ7QUFFbkQsdUVBQStDO0FBRy9DLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3BDLElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFtQixDQUFDO1FBQzdELElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFtQixDQUFDO1FBRXJELElBQUksT0FBTyxJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO1lBQzlDLElBQUksSUFBSSxHQUFHLElBQUEsa0JBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFrQixDQUFDO1lBRW5ELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUVyRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3BCLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUVwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNsQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7aUJBQ3JCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILElBQUksSUFBQSxvQkFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ2xDLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUVwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO3dCQUNsQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7cUJBQ3JCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjthQUNKO1NBQ0o7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9hY2NlcHRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb20gfSBmcm9tIFwiLi4vbW9kZWwvcm9vbVwiO1xyXG5pbXBvcnQgZmluZFBsYXllciBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvcGxheWVyXCI7XHJcbmltcG9ydCBjaGFuZ2VSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9jaGFuZ2VSb29tXCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9maW5kUm9vbVwiO1xyXG5pbXBvcnQgeyByb29tQ29udGFpbmVyIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIkFDQ0VQVEVEXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBsZXQgcGxheWVyMSA9IGZpbmRQbGF5ZXIoY29udGV4dC5vcmlnaW5JZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcbiAgICAgICAgbGV0IHBsYXllcjIgPSBmaW5kUGxheWVyKG1zZy51dWlkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllcjEgIT0gdW5kZWZpbmVkICYmIHBsYXllcjIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCByb29tID0gZmluZFJvb20ocGxheWVyMS51dWlkKSBhcyByb29tQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwbGF5ZXIxLmF2YWlsYWJsZSB8fCAhcGxheWVyMi5hdmFpbGFibGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb29tID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVJvb20oY29udGV4dC5vcmlnaW5JZCwgbXNnLnV1aWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjZXB0ZWQgeW91ciBpbnZpdGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5zZW5kKFwiQUNDRVBURURcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2s6IHBsYXllcjEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB1dWlkOiBwbGF5ZXIxLnV1aWQsXHJcbiAgICAgICAgICAgICAgICB9LCBwbGF5ZXIyLnV1aWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZVJvb20ocGxheWVyMS51dWlkKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm9vbShjb250ZXh0Lm9yaWdpbklkLCBtc2cudXVpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjZXB0ZWQgeW91ciBpbnZpdGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2VuZChcIkFDQ0VQVEVEXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmljazogcGxheWVyMS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBwbGF5ZXIxLnV1aWRcclxuICAgICAgICAgICAgICAgICAgICB9LCBwbGF5ZXIyLnV1aWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSJdfQ==
