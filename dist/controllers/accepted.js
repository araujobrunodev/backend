"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = require("../model/room");
const player_1 = __importDefault(require("../model/tools/player"));
const changeRoom_1 = __importDefault(require("../model/match/changeRoom"));
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("ACCEPTED", (context, msg) => {
        listOfAvailable_1.listOfAvailable.forEach((available, index) => {
            if (msg.uuid == available.player.id)
                return msg.uuid = (0, decrypt_1.default)(index);
        });
        let player1 = (0, player_1.default)(context.originId);
        let player2 = (0, player_1.default)(msg.uuid);
        if (player1 != undefined && player2 != undefined) {
            let room = (0, findRoom_1.default)(player1.uuid);
            if (!player1.available || !player2.available)
                return;
            if (room === undefined) {
                (0, room_1.createRoom)(context.originId, msg.uuid);
                context.send("ACCEPTED", {
                    nick: player1.name,
                    uuid: player1.uuid,
                }, player2.uuid);
            }
            else {
                if ((0, changeRoom_1.default)(player1.uuid) == true) {
                    (0, room_1.createRoom)(context.originId, msg.uuid);
                    context.send("ACCEPTED", {
                        nick: player1.name,
                        uuid: player1.uuid
                    }, player2.uuid);
                }
            }
        }
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2FjY2VwdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0NBQTJDO0FBQzNDLG1FQUErQztBQUMvQywyRUFBbUQ7QUFFbkQsdUVBQStDO0FBRS9DLDhEQUEyRDtBQUMzRCxxRUFBNkM7QUFFN0Msa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDcEMsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFtQixDQUFDO1FBQzdELElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFtQixDQUFDO1FBRXJELElBQUksT0FBTyxJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO1lBQzlDLElBQUksSUFBSSxHQUFHLElBQUEsa0JBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFrQixDQUFDO1lBRW5ELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUVyRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3BCLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO2lCQUNyQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDSCxJQUFJLElBQUEsb0JBQVUsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNsQyxJQUFBLGlCQUFVLEVBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7d0JBQ2xCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtxQkFDckIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BCO2FBQ0o7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2FjY2VwdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vbSB9IGZyb20gXCIuLi9tb2RlbC9yb29tXCI7XHJcbmltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuLi9tb2RlbC90b29scy9wbGF5ZXJcIjtcclxuaW1wb3J0IGNoYW5nZVJvb20gZnJvbSBcIi4uL21vZGVsL21hdGNoL2NoYW5nZVJvb21cIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5pbXBvcnQgZmluZFJvb20gZnJvbSBcIi4uL21vZGVsL21hdGNoL2ZpbmRSb29tXCI7XHJcbmltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVR5cGVcIjtcclxuaW1wb3J0IHsgbGlzdE9mQXZhaWxhYmxlIH0gZnJvbSBcIi4uL21vZGVsL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgZGVjcnlwdCBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvZGVjcnlwdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6IE1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJBQ0NFUFRFRFwiLCAoY29udGV4dCwgbXNnKSA9PiB7XHJcbiAgICAgICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKGF2YWlsYWJsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1zZy51dWlkID09IGF2YWlsYWJsZS5wbGF5ZXIuaWQpIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZy51dWlkID0gZGVjcnlwdChpbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgcGxheWVyMSA9IGZpbmRQbGF5ZXIoY29udGV4dC5vcmlnaW5JZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcbiAgICAgICAgbGV0IHBsYXllcjIgPSBmaW5kUGxheWVyKG1zZy51dWlkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllcjEgIT0gdW5kZWZpbmVkICYmIHBsYXllcjIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCByb29tID0gZmluZFJvb20ocGxheWVyMS51dWlkKSBhcyByb29tQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwbGF5ZXIxLmF2YWlsYWJsZSB8fCAhcGxheWVyMi5hdmFpbGFibGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb29tID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVJvb20oY29udGV4dC5vcmlnaW5JZCwgbXNnLnV1aWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2VuZChcIkFDQ0VQVEVEXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrOiBwbGF5ZXIxLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogcGxheWVyMS51dWlkLFxyXG4gICAgICAgICAgICAgICAgfSwgcGxheWVyMi51dWlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VSb29tKHBsYXllcjEudXVpZCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvb20oY29udGV4dC5vcmlnaW5JZCwgbXNnLnV1aWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNlbmQoXCJBQ0NFUFRFRFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2s6IHBsYXllcjEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogcGxheWVyMS51dWlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcGxheWVyMi51dWlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iXX0=
