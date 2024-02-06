"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exitType_1 = __importDefault(require("../types/exitType"));
exports.default = (manager) => {
    setInterval(() => {
        if (!exitType_1.default.state)
            return;
        console.log(exitType_1.default.player.name + " left the room");
        exitType_1.default.room.map((uuid) => {
            manager.send("EXIT", {
                nick: exitType_1.default.player.name,
                value: exitType_1.default.value
            }, uuid);
        });
        exitType_1.default.state = false;
        exitType_1.default.player = { name: "", available: false, uuid: "" };
        exitType_1.default.room.length = 0;
        exitType_1.default.value = "";
    }, 1000);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2V4aXRSb29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsaUVBQXFDO0FBRXJDLGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxrQkFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFFakQsa0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ2hCLElBQUksRUFBQyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUNyQixLQUFLLEVBQUMsa0JBQUksQ0FBQyxLQUFLO2FBQ25CLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQTtRQUVGLGtCQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBSSxDQUFDLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUE7UUFDL0Msa0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQixrQkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO0FBQ1gsQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2V4aXRSb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IGV4aXQgZnJvbSBcIi4uL3R5cGVzL2V4aXRUeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjpNYW5hZ2VyKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFleGl0LnN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4aXQucGxheWVyLm5hbWUgKyBcIiBsZWZ0IHRoZSByb29tXCIpO1xyXG5cclxuICAgICAgICBleGl0LnJvb20ubWFwKCh1dWlkKSA9PiB7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuc2VuZChcIkVYSVRcIix7XHJcbiAgICAgICAgICAgICAgICBuaWNrOmV4aXQucGxheWVyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpleGl0LnZhbHVlXHJcbiAgICAgICAgICAgIH0sdXVpZCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZXhpdC5zdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGV4aXQucGxheWVyID0ge25hbWU6XCJcIixhdmFpbGFibGU6ZmFsc2UsdXVpZDpcIlwifVxyXG4gICAgICAgIGV4aXQucm9vbS5sZW5ndGggPSAwO1xyXG4gICAgICAgIGV4aXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSwxMDAwKVxyXG59Il19
