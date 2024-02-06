"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = require("../model/clients");
const heartbeat_1 = require("../model/tools/heartbeat");
const heartbeat_2 = __importDefault(require("../model/tools/heartbeat"));
const turnPingOrPong_1 = __importDefault(require("../model/tools/turnPingOrPong"));
exports.default = (manager) => {
    setInterval(() => {
        let playes = [];
        clients_1.Clients.map((player) => {
            let ignore = heartbeat_1.ignoreClients.find((client) => { return client.uuid == player.uuid; });
            if (!(ignore === null || ignore === void 0 ? void 0 : ignore.ignore) || ignore == undefined) {
                (0, turnPingOrPong_1.default)(player.uuid, "PING", true);
                manager.send("PING", { uuid: player.uuid }, player.uuid);
                playes.push(player);
            }
        });
        setTimeout(() => {
            (0, heartbeat_2.default)(playes);
        }, 1000);
    }, 1000 * 60);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4Q0FBMkM7QUFDM0Msd0RBQXlEO0FBQ3pELHlFQUF5RDtBQUN6RCxtRkFBMkQ7QUFHM0Qsa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksTUFBTSxHQUF5QixFQUFFLENBQUM7UUFFdEMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNuQixJQUFJLE1BQU0sR0FBRyx5QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRixJQUFJLENBQUMsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxDQUFBLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFFeEMsSUFBQSx3QkFBYyxFQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUUxQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBQSxtQkFBaUIsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9waW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2xpZW50cyB9IGZyb20gXCIuLi9tb2RlbC9jbGllbnRzXCI7XHJcbmltcG9ydCB7IGlnbm9yZUNsaWVudHMgfSBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvaGVhcnRiZWF0XCI7XHJcbmltcG9ydCBpc1BsYXllckF2YWlsYWJsZSBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvaGVhcnRiZWF0XCI7XHJcbmltcG9ydCB0dXJuUGluZ09yUG9uZyBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvdHVyblBpbmdPclBvbmdcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6IE1hbmFnZXIpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgcGxheWVzOkFycmF5PHBsYXllclByb3BlcnR5PiA9IFtdOyBcclxuXHJcbiAgICAgICAgQ2xpZW50cy5tYXAoKHBsYXllcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWdub3JlID0gaWdub3JlQ2xpZW50cy5maW5kKChjbGllbnQpID0+IHsgcmV0dXJuIGNsaWVudC51dWlkID09IHBsYXllci51dWlkIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpZ25vcmU/Lmlnbm9yZSB8fCBpZ25vcmUgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHVyblBpbmdPclBvbmcocGxheWVyLnV1aWQsIFwiUElOR1wiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLnNlbmQoXCJQSU5HXCIsIHsgdXVpZDogcGxheWVyLnV1aWQgfSwgcGxheWVyLnV1aWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllcy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaXNQbGF5ZXJBdmFpbGFibGUocGxheWVzKTtcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfSwgMTAwMCAqIDYwKVxyXG59Il19
