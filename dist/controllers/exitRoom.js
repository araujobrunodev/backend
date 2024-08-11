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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2V4aXRSb29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsaUVBQXFDO0FBRXJDLGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxrQkFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBRXhCLGtCQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNoQixJQUFJLEVBQUMsa0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDckIsS0FBSyxFQUFDLGtCQUFJLENBQUMsS0FBSzthQUNuQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUE7UUFFRixrQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxDQUFBO1FBQy9DLGtCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDckIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtBQUNYLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9leGl0Um9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCBleGl0IGZyb20gXCIuLi90eXBlcy9leGl0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6TWFuYWdlcikgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZXhpdC5zdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBleGl0LnJvb20ubWFwKCh1dWlkKSA9PiB7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuc2VuZChcIkVYSVRcIix7XHJcbiAgICAgICAgICAgICAgICBuaWNrOmV4aXQucGxheWVyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpleGl0LnZhbHVlXHJcbiAgICAgICAgICAgIH0sdXVpZCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZXhpdC5zdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGV4aXQucGxheWVyID0ge25hbWU6XCJcIixhdmFpbGFibGU6ZmFsc2UsdXVpZDpcIlwifVxyXG4gICAgICAgIGV4aXQucm9vbS5sZW5ndGggPSAwO1xyXG4gICAgICAgIGV4aXQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSwxMDAwKVxyXG59Il19
