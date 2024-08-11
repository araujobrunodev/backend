"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
const player_1 = __importDefault(require("../model/tools/player"));
exports.default = (manager) => {
    manager.on("TURN", (context, msg) => {
        let currentRoom = (0, findRoom_1.default)(msg.uuid);
        let player;
        let begin;
        let playerIsAvailable = false;
        if (currentRoom == undefined)
            return;
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
                listOfAvailable_1.listOfAvailable.forEach((available, index) => {
                    if (msg.opponent_uuid == available.player.id)
                        return msg.opponent_uuid = (0, decrypt_1.default)(index);
                });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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ZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9maW5kUm9vbVwiO1xyXG5pbXBvcnQgZGVjcnlwdCBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvZGVjcnlwdFwiO1xyXG5pbXBvcnQgZmluZFBsYXllciBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuaW1wb3J0IHsgcm9vbUNvbnRhaW5lciB9IGZyb20gXCIuLi90eXBlcy9yb29tVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6IE1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJUVVJOXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBsZXQgY3VycmVudFJvb20gPSBmaW5kUm9vbShtc2cudXVpZCkgYXMgcm9vbUNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgcGxheWVyOnBsYXllclByb3BlcnR5O1xyXG4gICAgICAgIGxldCBiZWdpbjpib29sZWFuO1xyXG4gICAgICAgIGxldCBwbGF5ZXJJc0F2YWlsYWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJvb20gPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGN1cnJlbnRSb29tLnJvb20ubWFwKCh1dWlkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBQbGF5ZXIgPSBmaW5kUGxheWVyKHV1aWQpIGFzIHBsYXllclByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKFBsYXllciA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHBsYXllcklzQXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghUGxheWVyLmF2YWlsYWJsZSkgcmV0dXJuIHBsYXllcklzQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCFwbGF5ZXJJc0F2YWlsYWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG1zZy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmVnaW5cIjpcclxuICAgICAgICAgICAgICAgIGxldCBwcml6ZURyYXcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoY3VycmVudFJvb20ucm9vbS5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSBmaW5kUGxheWVyKGN1cnJlbnRSb29tLnJvb21bcHJpemVEcmF3XSkgYXMgcGxheWVyUHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICBiZWdpbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcclxuICAgICAgICAgICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKChhdmFpbGFibGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5vcHBvbmVudF91dWlkID09IGF2YWlsYWJsZS5wbGF5ZXIuaWQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNnLm9wcG9uZW50X3V1aWQgPSBkZWNyeXB0KGluZGV4KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSBmaW5kUGxheWVyKG1zZy5vcHBvbmVudF91dWlkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT0gdW5kZWZpbmVkKSBjb25zb2xlLndhcm4oXCJwbGF5ZXIgcmV0dXJuIHVuZGVmaW5lZFwiLFwidXVpZDpcIixtc2cub3Bwb25lbnRfdXVpZCk7XHJcbiAgICAgICAgICAgICAgICBiZWdpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50Um9vbS5yb29tLm1hcCgodXVpZDpzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0ICBOZXdCZWdpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGJlZ2luID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIudXVpZCA9PSB1dWlkKSBOZXdCZWdpbiA9IGJlZ2luIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYW5hZ2VyLnNlbmQoXCJUVVJOXCIse1xyXG4gICAgICAgICAgICAgICAgbmljazpwbGF5ZXIubmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwieW91ciB0dXJuXCIsXHJcbiAgICAgICAgICAgICAgICBiZWdpbm5pbmdPZlRoZUdhbWU6TmV3QmVnaW5cclxuICAgICAgICAgICAgfSx1dWlkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19
