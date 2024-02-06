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
    if (unAvailable.length != 0)
        (0, updateClients_1.default)(unAvailable, { type: "available", value: false });
}
exports.default = isPlayerAvailable;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxDQUFDO0lBRWhHLElBQUksV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsSUFBQSx1QkFBcUIsRUFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3pHLENBQUM7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJtb2RlbC90b29scy9oZWFydGJlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwaW5nT3JQb25nIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3BpbmdSZWNlaXZlXCI7XHJcbmltcG9ydCBVcGRhdGVEYXRhYmFzZUNsaWVudHMgZnJvbSBcIi4vdXBkYXRlQ2xpZW50c1wiO1xyXG5pbXBvcnQgZmluZFBpbmdPclBvbmcgZnJvbSBcIi4vZmluZEhlYXJiZWF0XCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuLi9tYXRjaC9maW5kUm9vbVwiO1xyXG5pbXBvcnQgeyByb29tQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcbmltcG9ydCBleGl0IGZyb20gXCIuLi8uLi90eXBlcy9leGl0VHlwZVwiO1xyXG5pbXBvcnQgcmVtb3ZlUm9vbSBmcm9tIFwiLi4vbWF0Y2gvcmVtb3ZlUm9vbVwiO1xyXG5pbXBvcnQgZmluZFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJZ25vcmVDbGllbnRzIHtcclxuICAgIHV1aWQ6IHN0cmluZyxcclxuICAgIGlnbm9yZTogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGlnbm9yZUNsaWVudHM6IEFycmF5PElnbm9yZUNsaWVudHM+ID0gW11cclxuXHJcbmZ1bmN0aW9uIGlzUGxheWVyQXZhaWxhYmxlKHBsYXllcnM6IHBsYXllclByb3BlcnR5W10pIHtcclxuICAgIGxldCBhdmFpbGFibGU6IHBsYXllclByb3BlcnR5W10gPSBbXTtcclxuICAgIGxldCB1bkF2YWlsYWJsZTogcGxheWVyUHJvcGVydHlbXSA9IFtdO1xyXG5cclxuICAgIHBsYXllcnMubWFwKChwbGF5ZXIpID0+IHtcclxuICAgICAgICBsZXQgUE9QID0gZmluZFBpbmdPclBvbmcocGxheWVyLnV1aWQpIGFzIHBpbmdPclBvbmc7XHJcbiAgICAgICAgbGV0IGlnbm9yZUMgPSBpZ25vcmVDbGllbnRzLmZpbmQoKGNsaWVudCkgPT4geyByZXR1cm4gY2xpZW50LnV1aWQgPT0gUE9QLnV1aWQgfSkgYXMgSWdub3JlQ2xpZW50cztcclxuXHJcbiAgICAgICAgaWYgKGlnbm9yZUMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlnbm9yZUNsaWVudHMucHVzaCh7IGlnbm9yZTogZmFsc2UsIHV1aWQ6IFBPUC51dWlkIH0pXHJcbiAgICAgICAgICAgIGlnbm9yZUMgPSBpZ25vcmVDbGllbnRzLmZpbmQoKGNsaWVudCkgPT4geyByZXR1cm4gY2xpZW50LnV1aWQgPT0gUE9QLnV1aWQgfSkgYXMgSWdub3JlQ2xpZW50c1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUE9QICE9IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKFBPUC5waW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKFBPUC5wb25nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQy5pZ25vcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlLnB1c2gocGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Um9vbSA9IGZpbmRSb29tKHBsYXllci51dWlkKSBhcyByb29tQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSb29tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb29tLnJvb20ubWFwKCh1dWlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV1aWQgIT0gcGxheWVyLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IGZpbmRQbGF5ZXIodXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0LnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdC5yb29tID0gY3VycmVudFJvb20ucm9vbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdC52YWx1ZSA9IFwibGVmdCB0aGUgcm9vbVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUm9vbShjdXJyZW50Um9vbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0LnN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQy5pZ25vcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bkF2YWlsYWJsZS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFBPUC5waW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBQT1AucG9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoYXZhaWxhYmxlLmxlbmd0aCAhPSAwKSBVcGRhdGVEYXRhYmFzZUNsaWVudHMoYXZhaWxhYmxlLCB7IHR5cGU6IFwiYXZhaWxhYmxlXCIsIHZhbHVlOiB0cnVlIH0pO1xyXG5cclxuICAgIGlmICh1bkF2YWlsYWJsZS5sZW5ndGggIT0gMCkgVXBkYXRlRGF0YWJhc2VDbGllbnRzKHVuQXZhaWxhYmxlLCB7IHR5cGU6IFwiYXZhaWxhYmxlXCIsIHZhbHVlOiBmYWxzZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNQbGF5ZXJBdmFpbGFibGU7Il19
