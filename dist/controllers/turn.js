"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const player_1 = __importDefault(require("../model/tools/player"));
exports.default = (manager) => {
    manager.on("TURN", (context, msg) => {
        let currentRoom = (0, findRoom_1.default)(msg.uuid);
        let player;
        let begin;
        let playerIsAvailable = false;
        if (currentRoom == undefined)
            return console.log("room return undefined");
        currentRoom.room.map((uuid) => {
            let Player = (0, player_1.default)(uuid);
            if (Player == undefined)
                return;
            playerIsAvailable = true;
            if (!Player.available)
                return playerIsAvailable = false;
        });
        if (!playerIsAvailable)
            return;
        switch (msg.value) {
            case "begin":
                let prizeDraw = Math.round(Math.random() * (currentRoom.room.length - 1));
                player = (0, player_1.default)(currentRoom.room[prizeDraw]);
                begin = true;
                break;
            case "change":
                player = (0, player_1.default)(msg.opponent_uuid);
                if (player == undefined)
                    console.warn("player return undefined", "uuid:", msg.opponent_uuid);
                begin = false;
                break;
        }
        currentRoom.room.map((uuid) => {
            let NewBegin = false;
            if (begin == true) {
                if (player.uuid == uuid)
                    NewBegin = begin;
            }
            manager.send("TURN", {
                nick: player.name,
                value: "your turn",
                beginningOfTheGame: NewBegin
            }, uuid);
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3R1cm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx1RUFBK0M7QUFDL0MsbUVBQStDO0FBSS9DLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2hDLElBQUksV0FBVyxHQUFHLElBQUEsa0JBQVEsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFrQixDQUFDO1FBQ3RELElBQUksTUFBcUIsQ0FBQztRQUMxQixJQUFJLEtBQWEsQ0FBQztRQUNsQixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUU5QixJQUFJLFdBQVcsSUFBSSxTQUFTO1lBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFMUUsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFBLGdCQUFVLEVBQUMsSUFBSSxDQUFtQixDQUFDO1lBRWhELElBQUksTUFBTSxJQUFJLFNBQVM7Z0JBQUUsT0FBTztZQUVoQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFFekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2dCQUFFLE9BQU8saUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLGlCQUFpQjtZQUFFLE9BQU87UUFFL0IsUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ2YsS0FBSyxPQUFPO2dCQUNSLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxHQUFHLElBQUEsZ0JBQVUsRUFBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFtQixDQUFDO2dCQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNiLE1BQU07WUFFVixLQUFLLFFBQVE7Z0JBQ1QsTUFBTSxHQUFHLElBQUEsZ0JBQVUsRUFBQyxHQUFHLENBQUMsYUFBYSxDQUFtQixDQUFDO2dCQUN6RCxJQUFJLE1BQU0sSUFBSSxTQUFTO29CQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0YsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDZCxNQUFNO1NBQ2I7UUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFO1lBQ2pDLElBQUssUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV0QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUk7b0JBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQTthQUM1QztZQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNoQixJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ2hCLEtBQUssRUFBQyxXQUFXO2dCQUNqQixrQkFBa0IsRUFBQyxRQUFRO2FBQzlCLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3R1cm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgZmluZFJvb20gZnJvbSBcIi4uL21vZGVsL21hdGNoL2ZpbmRSb29tXCI7XHJcbmltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuLi9tb2RlbC90b29scy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5pbXBvcnQgeyByb29tQ29udGFpbmVyIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIlRVUk5cIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50Um9vbSA9IGZpbmRSb29tKG1zZy51dWlkKSBhcyByb29tQ29udGFpbmVyO1xyXG4gICAgICAgIGxldCBwbGF5ZXI6cGxheWVyUHJvcGVydHk7XHJcbiAgICAgICAgbGV0IGJlZ2luOmJvb2xlYW47XHJcbiAgICAgICAgbGV0IHBsYXllcklzQXZhaWxhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Um9vbSA9PSB1bmRlZmluZWQpIHJldHVybiBjb25zb2xlLmxvZyhcInJvb20gcmV0dXJuIHVuZGVmaW5lZFwiKTtcclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucm9vbS5tYXAoKHV1aWQpID0+IHtcclxuICAgICAgICAgICAgbGV0IFBsYXllciA9IGZpbmRQbGF5ZXIodXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICBpZiAoUGxheWVyID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcGxheWVySXNBdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFQbGF5ZXIuYXZhaWxhYmxlKSByZXR1cm4gcGxheWVySXNBdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXBsYXllcklzQXZhaWxhYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCAobXNnLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZWdpblwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHByaXplRHJhdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChjdXJyZW50Um9vbS5yb29tLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIHBsYXllciA9IGZpbmRQbGF5ZXIoY3VycmVudFJvb20ucm9vbVtwcml6ZURyYXddKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuICAgICAgICAgICAgICAgIGJlZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgcGxheWVyID0gZmluZFBsYXllcihtc2cub3Bwb25lbnRfdXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09IHVuZGVmaW5lZCkgY29uc29sZS53YXJuKFwicGxheWVyIHJldHVybiB1bmRlZmluZWRcIixcInV1aWQ6XCIsbXNnLm9wcG9uZW50X3V1aWQpO1xyXG4gICAgICAgICAgICAgICAgYmVnaW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucm9vbS5tYXAoKHV1aWQ6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCAgTmV3QmVnaW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChiZWdpbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnV1aWQgPT0gdXVpZCkgTmV3QmVnaW4gPSBiZWdpbiBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFuYWdlci5zZW5kKFwiVFVSTlwiLHtcclxuICAgICAgICAgICAgICAgIG5pY2s6cGxheWVyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcInlvdXIgdHVyblwiLFxyXG4gICAgICAgICAgICAgICAgYmVnaW5uaW5nT2ZUaGVHYW1lOk5ld0JlZ2luXHJcbiAgICAgICAgICAgIH0sdXVpZClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdfQ==
