"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreClients = void 0;
const updateClients_1 = __importDefault(require("./updateClients"));
const findHearbeat_1 = __importDefault(require("./findHearbeat"));
const findRoom_1 = __importDefault(require("../match/findRoom"));
const exitType_1 = __importDefault(require("../../types/exitType"));
const removeRoom_1 = __importDefault(require("../match/removeRoom"));
const player_1 = __importDefault(require("./player"));
const listOfAvailable_1 = require("../listOfAvailable");
exports.ignoreClients = [];
function isPlayerAvailable(players) {
    let available = [];
    let unAvailable = [];
    players.map((player) => {
        let POP = (0, findHearbeat_1.default)(player.uuid);
        let ignoreC = exports.ignoreClients.find((client) => { return client.uuid == POP.uuid; });
        if (ignoreC == undefined) {
            exports.ignoreClients.push({ ignore: false, uuid: POP.uuid });
            ignoreC = exports.ignoreClients.find((client) => { return client.uuid == POP.uuid; });
        }
        if (POP != undefined) {
            if (POP.ping) {
                switch (POP.pong) {
                    case true:
                        ignoreC.ignore = false;
                        available.push(player);
                        break;
                    case false:
                        let currentRoom = (0, findRoom_1.default)(player.uuid);
                        if (currentRoom !== undefined) {
                            currentRoom.room.map((uuid) => {
                                if (uuid != player.uuid) {
                                    let player = (0, player_1.default)(uuid);
                                    exitType_1.default.player = player;
                                    exitType_1.default.room = currentRoom.room;
                                    exitType_1.default.value = "left the room";
                                    (0, removeRoom_1.default)(currentRoom);
                                    exitType_1.default.state = true;
                                }
                                ;
                            });
                        }
                        ignoreC.ignore = true;
                        unAvailable.push(player);
                        break;
                }
                POP.ping = false;
                POP.pong = false;
            }
        }
    });
    if (available.length != 0)
        (0, updateClients_1.default)(available, { type: "available", value: true });
    if (unAvailable.length != 0) {
        unAvailable.forEach(available => {
            let findPlayer = false;
            listOfAvailable_1.listOfAvailable.forEach((perfil, index) => {
                if (findPlayer)
                    return;
                if (perfil.player.nick == available.name) {
                    listOfAvailable_1.listOfAvailable.splice(index);
                    return findPlayer = true;
                }
            });
        });
        (0, updateClients_1.default)(unAvailable, { type: "available", value: false });
    }
    ;
}
exports.default = isPlayerAvailable;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL2hlYXJ0YmVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxvRUFBb0Q7QUFDcEQsa0VBQTRDO0FBRTVDLGlFQUF5QztBQUV6QyxvRUFBd0M7QUFDeEMscUVBQTZDO0FBQzdDLHNEQUFrQztBQUNsQyx3REFBcUQ7QUFPMUMsUUFBQSxhQUFhLEdBQXlCLEVBQUUsQ0FBQTtBQUVuRCxTQUFTLGlCQUFpQixDQUFDLE9BQXlCO0lBQ2hELElBQUksU0FBUyxHQUFxQixFQUFFLENBQUM7SUFDckMsSUFBSSxXQUFXLEdBQXFCLEVBQUUsQ0FBQztJQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBQSxzQkFBYyxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQWUsQ0FBQztRQUNwRCxJQUFJLE9BQU8sR0FBRyxxQkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQWtCLENBQUM7UUFFbEcsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO1lBQ3RCLHFCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFDckQsT0FBTyxHQUFHLHFCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUMsQ0FBa0IsQ0FBQTtTQUNoRztRQUNELElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtZQUVsQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNkLEtBQUssSUFBSTt3QkFFTCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdkIsTUFBTTtvQkFFVixLQUFLLEtBQUs7d0JBQ04sSUFBSSxXQUFXLEdBQUcsSUFBQSxrQkFBUSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQWtCLENBQUM7d0JBRXpELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTs0QkFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQ0FDMUIsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtvQ0FDckIsSUFBSSxNQUFNLEdBQUcsSUFBQSxnQkFBVSxFQUFDLElBQUksQ0FBbUIsQ0FBQztvQ0FFaEQsa0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29DQUNyQixrQkFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO29DQUM3QixrQkFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7b0NBRTdCLElBQUEsb0JBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztvQ0FFeEIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lDQUNyQjtnQ0FBQSxDQUFDOzRCQUNOLENBQUMsQ0FBQyxDQUFBO3lCQUNMO3dCQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUN0QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN6QixNQUFNO2lCQUNiO2dCQUVELEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLElBQUEsdUJBQXFCLEVBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVoRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3pCLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBRXZCLGlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxJQUFJLFVBQVU7b0JBQUUsT0FBTztnQkFFdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUN0QyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDN0IsT0FBTyxVQUFVLEdBQUcsSUFBSSxDQUFBO2lCQUMzQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFBLHVCQUFxQixFQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7S0FDMUU7SUFBQSxDQUFDO0FBQ04sQ0FBQztBQUVELGtCQUFlLGlCQUFpQixDQUFDIiwiZmlsZSI6Im1vZGVsL3Rvb2xzL2hlYXJ0YmVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBpbmdPclBvbmcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcGluZ1JlY2VpdmVcIjtcclxuaW1wb3J0IFVwZGF0ZURhdGFiYXNlQ2xpZW50cyBmcm9tIFwiLi91cGRhdGVDbGllbnRzXCI7XHJcbmltcG9ydCBmaW5kUGluZ09yUG9uZyBmcm9tIFwiLi9maW5kSGVhcmJlYXRcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5pbXBvcnQgZmluZFJvb20gZnJvbSBcIi4uL21hdGNoL2ZpbmRSb29tXCI7XHJcbmltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcm9vbVR5cGVcIjtcclxuaW1wb3J0IGV4aXQgZnJvbSBcIi4uLy4uL3R5cGVzL2V4aXRUeXBlXCI7XHJcbmltcG9ydCByZW1vdmVSb29tIGZyb20gXCIuLi9tYXRjaC9yZW1vdmVSb29tXCI7XHJcbmltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBsaXN0T2ZBdmFpbGFibGUgfSBmcm9tIFwiLi4vbGlzdE9mQXZhaWxhYmxlXCI7XHJcblxyXG5pbnRlcmZhY2UgSWdub3JlQ2xpZW50cyB7XHJcbiAgICB1dWlkOiBzdHJpbmcsXHJcbiAgICBpZ25vcmU6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGxldCBpZ25vcmVDbGllbnRzOiBBcnJheTxJZ25vcmVDbGllbnRzPiA9IFtdXHJcblxyXG5mdW5jdGlvbiBpc1BsYXllckF2YWlsYWJsZShwbGF5ZXJzOiBwbGF5ZXJQcm9wZXJ0eVtdKSB7XHJcbiAgICBsZXQgYXZhaWxhYmxlOiBwbGF5ZXJQcm9wZXJ0eVtdID0gW107XHJcbiAgICBsZXQgdW5BdmFpbGFibGU6IHBsYXllclByb3BlcnR5W10gPSBbXTtcclxuXHJcbiAgICBwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XHJcbiAgICAgICAgbGV0IFBPUCA9IGZpbmRQaW5nT3JQb25nKHBsYXllci51dWlkKSBhcyBwaW5nT3JQb25nO1xyXG4gICAgICAgIGxldCBpZ25vcmVDID0gaWdub3JlQ2xpZW50cy5maW5kKChjbGllbnQpID0+IHsgcmV0dXJuIGNsaWVudC51dWlkID09IFBPUC51dWlkIH0pIGFzIElnbm9yZUNsaWVudHM7XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZ25vcmVDbGllbnRzLnB1c2goeyBpZ25vcmU6IGZhbHNlLCB1dWlkOiBQT1AudXVpZCB9KVxyXG4gICAgICAgICAgICBpZ25vcmVDID0gaWdub3JlQ2xpZW50cy5maW5kKChjbGllbnQpID0+IHsgcmV0dXJuIGNsaWVudC51dWlkID09IFBPUC51dWlkIH0pIGFzIElnbm9yZUNsaWVudHNcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFBPUCAhPSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChQT1AucGluZykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChQT1AucG9uZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUMuaWdub3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJvb20gPSBmaW5kUm9vbShwbGF5ZXIudXVpZCkgYXMgcm9vbUNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Um9vbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Um9vbS5yb29tLm1hcCgodXVpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dWlkICE9IHBsYXllci51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBmaW5kUGxheWVyKHV1aWQpIGFzIHBsYXllclByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdC5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQucm9vbSA9IGN1cnJlbnRSb29tLnJvb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQudmFsdWUgPSBcImxlZnQgdGhlIHJvb21cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJvb20oY3VycmVudFJvb20pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdC5zdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUMuaWdub3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5BdmFpbGFibGUucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBQT1AucGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgUE9QLnBvbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGF2YWlsYWJsZS5sZW5ndGggIT0gMCkgVXBkYXRlRGF0YWJhc2VDbGllbnRzKGF2YWlsYWJsZSwgeyB0eXBlOiBcImF2YWlsYWJsZVwiLCB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICBpZiAodW5BdmFpbGFibGUubGVuZ3RoICE9IDApIHtcclxuICAgICAgICB1bkF2YWlsYWJsZS5mb3JFYWNoKGF2YWlsYWJsZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaW5kUGxheWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsaXN0T2ZBdmFpbGFibGUuZm9yRWFjaCgocGVyZmlsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQbGF5ZXIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHBlcmZpbC5wbGF5ZXIubmljayA9PSBhdmFpbGFibGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RPZkF2YWlsYWJsZS5zcGxpY2UoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRQbGF5ZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgVXBkYXRlRGF0YWJhc2VDbGllbnRzKHVuQXZhaWxhYmxlLCB7IHR5cGU6IFwiYXZhaWxhYmxlXCIsIHZhbHVlOiBmYWxzZSB9KVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNQbGF5ZXJBdmFpbGFibGU7Il19
