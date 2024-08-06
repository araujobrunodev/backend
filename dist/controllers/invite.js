"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("../model/tools/player"));
exports.default = (manager) => {
    manager.on("INVITE", (context, msg) => {
        let player1 = (0, player_1.default)(context.originId), player2 = (0, player_1.default)(msg.uuid);
        if (player1 != undefined && player2 != undefined) {
            if (!player1.available || !player2.available)
                return;
            context.send("INVITE", { nick: player1.name, uuid: player1.uuid, value: "invite you for a match" }, player2.uuid);
        }
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1FQUErQztBQUkvQyxrQkFBZSxDQUFDLE9BQWdCLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFBLGdCQUFVLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBbUIsRUFDeEQsT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFtQixDQUFDO1FBRXJELElBQUksT0FBTyxJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNwSDtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2ludml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuLi9tb2RlbC90b29scy9wbGF5ZXJcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6IE1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJJTlZJVEVcIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXIxID0gZmluZFBsYXllcihjb250ZXh0Lm9yaWdpbklkKSBhcyBwbGF5ZXJQcm9wZXJ0eSxcclxuICAgICAgICAgICAgcGxheWVyMiA9IGZpbmRQbGF5ZXIobXNnLnV1aWQpIGFzIHBsYXllclByb3BlcnR5O1xyXG5cclxuICAgICAgICBpZiAocGxheWVyMSAhPSB1bmRlZmluZWQgJiYgcGxheWVyMiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFwbGF5ZXIxLmF2YWlsYWJsZSB8fCAhcGxheWVyMi5hdmFpbGFibGUpIHJldHVybjtcclxuICAgICAgICAgICAgY29udGV4dC5zZW5kKFwiSU5WSVRFXCIsIHsgbmljazogcGxheWVyMS5uYW1lLCB1dWlkOiBwbGF5ZXIxLnV1aWQsIHZhbHVlOiBcImludml0ZSB5b3UgZm9yIGEgbWF0Y2hcIiB9LCBwbGF5ZXIyLnV1aWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSJdfQ==
