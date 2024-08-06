"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("MARKED", (context, msg) => {
        listOfAvailable_1.listOfAvailable.forEach((available, index) => {
            if (msg.opponent_uuid == available.player.id)
                return msg.opponent_uuid = (0, decrypt_1.default)(index);
        });
        context.send("MARKED", {
            collumn: msg.collumn,
            position: msg.position,
            mark: msg.mark
        }, msg.opponent_uuid);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21hcmtlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUEyRDtBQUMzRCxxRUFBNkM7QUFFN0Msa0JBQWUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUMvQixPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxDQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUUsRUFBRTtRQUNoQyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLEdBQUcsQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pELENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDbEIsT0FBTyxFQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQ25CLFFBQVEsRUFBQyxHQUFHLENBQUMsUUFBUTtZQUNyQixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7U0FDaEIsRUFBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvbWFya2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgbGlzdE9mQXZhaWxhYmxlIH0gZnJvbSBcIi4uL21vZGVsL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgZGVjcnlwdCBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvZGVjcnlwdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6TWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIk1BUktFRFwiLChjb250ZXh0LG1zZykgPT4ge1xyXG4gICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKChhdmFpbGFibGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtc2cub3Bwb25lbnRfdXVpZCA9PSBhdmFpbGFibGUucGxheWVyLmlkKSBcclxuICAgICAgICAgICAgICAgIHJldHVybiBtc2cub3Bwb25lbnRfdXVpZCA9IGRlY3J5cHQoaW5kZXgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwiTUFSS0VEXCIse1xyXG4gICAgICAgICAgICBjb2xsdW1uOm1zZy5jb2xsdW1uLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjptc2cucG9zaXRpb24sXHJcbiAgICAgICAgICAgIG1hcms6bXNnLm1hcmtcclxuICAgICAgICB9LG1zZy5vcHBvbmVudF91dWlkKVxyXG4gICAgfSlcclxufSJdfQ==
