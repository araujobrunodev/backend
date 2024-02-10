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
    }, 1000 * (60 * 3));
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4Q0FBMkM7QUFDM0Msd0RBQXlEO0FBQ3pELHlFQUF5RDtBQUN6RCxtRkFBMkQ7QUFHM0Qsa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksTUFBTSxHQUF5QixFQUFFLENBQUM7UUFFdEMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNuQixJQUFJLE1BQU0sR0FBRyx5QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRixJQUFJLENBQUMsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxDQUFBLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFFeEMsSUFBQSx3QkFBYyxFQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUUxQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBQSxtQkFBaUIsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3BpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDbGllbnRzIH0gZnJvbSBcIi4uL21vZGVsL2NsaWVudHNcIjtcclxuaW1wb3J0IHsgaWdub3JlQ2xpZW50cyB9IGZyb20gXCIuLi9tb2RlbC90b29scy9oZWFydGJlYXRcIjtcclxuaW1wb3J0IGlzUGxheWVyQXZhaWxhYmxlIGZyb20gXCIuLi9tb2RlbC90b29scy9oZWFydGJlYXRcIjtcclxuaW1wb3J0IHR1cm5QaW5nT3JQb25nIGZyb20gXCIuLi9tb2RlbC90b29scy90dXJuUGluZ09yUG9uZ1wiO1xyXG5pbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi90eXBlcy9wbGF5ZXJUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXM6QXJyYXk8cGxheWVyUHJvcGVydHk+ID0gW107IFxyXG5cclxuICAgICAgICBDbGllbnRzLm1hcCgocGxheWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZ25vcmUgPSBpZ25vcmVDbGllbnRzLmZpbmQoKGNsaWVudCkgPT4geyByZXR1cm4gY2xpZW50LnV1aWQgPT0gcGxheWVyLnV1aWQgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlnbm9yZT8uaWdub3JlIHx8IGlnbm9yZSA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0dXJuUGluZ09yUG9uZyhwbGF5ZXIudXVpZCwgXCJQSU5HXCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hbmFnZXIuc2VuZChcIlBJTkdcIiwgeyB1dWlkOiBwbGF5ZXIudXVpZCB9LCBwbGF5ZXIudXVpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVzLnB1c2gocGxheWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpc1BsYXllckF2YWlsYWJsZShwbGF5ZXMpO1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9LCAxMDAwICogKDYwICogMykpXHJcbn0iXX0=
