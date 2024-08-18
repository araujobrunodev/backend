"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const findAvailable_1 = __importDefault(require("../model/tools/findAvailable"));
exports.default = (manager) => {
    manager.on("TURN", (context, msg) => {
        let currentRoom = (0, findRoom_1.default)(msg.opponent_uuid);
        let player;
        let begin = false;
        if (currentRoom == undefined)
            return;
        switch (msg.value) {
            case "begin":
                let prizeDraw = Math.round(Math.random() * (currentRoom.room.length - 1));
                player = (0, findAvailable_1.default)(currentRoom.room[prizeDraw], true);
                begin = true;
                break;
            case "change":
                player = (0, findAvailable_1.default)(msg.opponent_uuid, true);
                begin = false;
                break;
        }
        currentRoom.room.map((uuid) => {
            let NewBegin = false;
            if (begin == true) {
                if (player.id == uuid)
                    NewBegin = begin;
            }
            context.send("TURN", {
                nick: player.nick,
                value: "your turn",
                beginningOfTheGame: NewBegin
            }, (0, findAvailable_1.default)(uuid, false));
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3R1cm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx1RUFBK0M7QUFDL0MsaUZBQXlEO0FBS3pELGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2hDLElBQUksV0FBVyxHQUFHLElBQUEsa0JBQVEsRUFBQyxHQUFHLENBQUMsYUFBYSxDQUFrQixDQUFDO1FBQy9ELElBQUksTUFBc0IsQ0FBQztRQUMzQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbEIsSUFBSSxXQUFXLElBQUksU0FBUztZQUFFLE9BQU87UUFFckMsUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ2YsS0FBSyxPQUFPO2dCQUNSLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxHQUFHLElBQUEsdUJBQWEsRUFBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBb0IsQ0FBQTtnQkFFNUUsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDYixNQUFNO1lBRVYsS0FBSyxRQUFRO2dCQUNULE1BQU0sR0FBRyxJQUFBLHVCQUFhLEVBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQW9CLENBQUE7Z0JBRWxFLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsTUFBTTtTQUNiO1FBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFXLEVBQUUsRUFBRTtZQUNqQyxJQUFLLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFdEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNmLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJO29CQUFFLFFBQVEsR0FBRyxLQUFLLENBQUE7YUFDMUM7WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixLQUFLLEVBQUUsV0FBVztnQkFDbEIsa0JBQWtCLEVBQUUsUUFBUTthQUMvQixFQUFFLElBQUEsdUJBQWEsRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFXLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3R1cm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBmaW5kUm9vbSBmcm9tIFwiLi4vbW9kZWwvbWF0Y2gvZmluZFJvb21cIjtcclxuaW1wb3J0IGZpbmRBdmFpbGFibGUgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2ZpbmRBdmFpbGFibGVcIjtcclxuaW1wb3J0IGZpbmRQbGF5ZXIgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi90eXBlcy9wbGF5ZXJUeXBlXCI7XHJcbmltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVR5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiVFVSTlwiLCAoY29udGV4dCwgbXNnKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRSb29tID0gZmluZFJvb20obXNnLm9wcG9uZW50X3V1aWQpIGFzIHJvb21Db250YWluZXI7XHJcbiAgICAgICAgbGV0IHBsYXllcjpwbGF5ZXJBdmFpbGFibGU7XHJcbiAgICAgICAgbGV0IGJlZ2luID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Um9vbSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgc3dpdGNoIChtc2cudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJlZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJpemVEcmF3ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGN1cnJlbnRSb29tLnJvb20ubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyID0gZmluZEF2YWlsYWJsZShjdXJyZW50Um9vbS5yb29tW3ByaXplRHJhd10sIHRydWUpIGFzIHBsYXllckF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiZWdpbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgIHBsYXllciA9IGZpbmRBdmFpbGFibGUobXNnLm9wcG9uZW50X3V1aWQsIHRydWUpIGFzIHBsYXllckF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiZWdpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50Um9vbS5yb29tLm1hcCgodXVpZDpzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0ICBOZXdCZWdpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGJlZ2luID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gdXVpZCkgTmV3QmVnaW4gPSBiZWdpbiBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGV4dC5zZW5kKFwiVFVSTlwiLHtcclxuICAgICAgICAgICAgICAgIG5pY2s6IHBsYXllci5uaWNrLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwieW91ciB0dXJuXCIsXHJcbiAgICAgICAgICAgICAgICBiZWdpbm5pbmdPZlRoZUdhbWU6IE5ld0JlZ2luXHJcbiAgICAgICAgICAgIH0sIGZpbmRBdmFpbGFibGUodXVpZCxmYWxzZSkgYXMgc3RyaW5nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19
