"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pingReceive_1 = __importDefault(require("../../types/pingReceive"));
function turnPingOrPong(uuid, msg, turn) {
    try {
        pingReceive_1.default.map((heart) => {
            if (heart.uuid == uuid) {
                switch (msg) {
                    case "PING":
                        heart.ping = turn;
                        break;
                    case "PONG":
                        heart.pong = turn;
                        break;
                    case "ALL":
                        heart.ping = turn;
                        heart.pong = turn;
                        break;
                }
            }
        });
    }
    catch (err) {
        console.error(err);
    }
}
exports.default = turnPingOrPong;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL3R1cm5QaW5nT3JQb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEVBQXdEO0FBRXhELFNBQVMsY0FBYyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsSUFBYTtJQUM1RCxJQUFJO1FBQ0EscUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDcEIsUUFBUSxHQUFHLEVBQUU7b0JBQ1QsS0FBSyxNQUFNO3dCQUNQLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixNQUFNO29CQUVWLEtBQUssTUFBTTt3QkFDUCxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDbEIsTUFBTTtvQkFFVixLQUFLLEtBQUs7d0JBQ04sS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2xCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixNQUFNO2lCQUNiO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtLQUNMO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0wsQ0FBQztBQUVELGtCQUFlLGNBQWMsQ0FBQyIsImZpbGUiOiJtb2RlbC90b29scy90dXJuUGluZ09yUG9uZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaW5nT3JQb25nUmVjZWl2ZSBmcm9tIFwiLi4vLi4vdHlwZXMvcGluZ1JlY2VpdmVcIjtcclxuXHJcbmZ1bmN0aW9uIHR1cm5QaW5nT3JQb25nKHV1aWQ6IHN0cmluZywgbXNnOiBzdHJpbmcsIHR1cm46IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgUGluZ09yUG9uZ1JlY2VpdmUubWFwKChoZWFydCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGVhcnQudXVpZCA9PSB1dWlkKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQSU5HXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LnBpbmcgPSB0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBPTkdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnQucG9uZyA9IHR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQUxMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LnBpbmcgPSB0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFydC5wb25nID0gdHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0dXJuUGluZ09yUG9uZzsiXX0=
