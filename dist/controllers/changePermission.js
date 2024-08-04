"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("change-permission", (context, msg) => {
        if (msg.id.length < 36)
            return;
        let findIt = false;
        listOfAvailable_1.listOfAvailable.forEach((available, index) => {
            let availableId = (0, decrypt_1.default)(index);
            if (availableId == msg.id) {
                available.player.inviteStrangers = msg.inviteStrangers;
                available.player.randomRoom = msg.randomRoom;
                findIt = true;
            }
        });
        if (!findIt) {
            (0, listOfAvailable_1.addPlayerAvailable)({
                id: msg.id,
                inviteStrangers: msg.inviteStrangers,
                nick: msg.nick,
                randomRoom: msg.randomRoom
            });
        }
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NoYW5nZVBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBK0U7QUFDL0UscUVBQTZDO0FBRTdDLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFO1lBQUUsT0FBTztRQUMvQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFFbEIsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBRWhDLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUE7Z0JBQ3RELFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUE7Z0JBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUE7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxJQUFBLG9DQUFrQixFQUFDO2dCQUNmLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDVixlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWU7Z0JBQ3BDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7YUFDN0IsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9jaGFuZ2VQZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgYWRkUGxheWVyQXZhaWxhYmxlLCBsaXN0T2ZBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBkZWNyeXB0IGZyb20gXCIuLi9tb2RlbC90b29scy9kZWNyeXB0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcImNoYW5nZS1wZXJtaXNzaW9uXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBpZiAobXNnLmlkLmxlbmd0aCA8IDM2KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGZpbmRJdCA9IGZhbHNlIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKChhdmFpbGFibGUsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGF2YWlsYWJsZUlkID0gZGVjcnlwdChpbmRleClcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZUlkID09IG1zZy5pZCkge1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlLnBsYXllci5pbnZpdGVTdHJhbmdlcnMgPSBtc2cuaW52aXRlU3RyYW5nZXJzXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGUucGxheWVyLnJhbmRvbVJvb20gPSBtc2cucmFuZG9tUm9vbVxyXG4gICAgICAgICAgICAgICAgZmluZEl0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWZpbmRJdCkge1xyXG4gICAgICAgICAgICBhZGRQbGF5ZXJBdmFpbGFibGUoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IG1zZy5pZCxcclxuICAgICAgICAgICAgICAgIGludml0ZVN0cmFuZ2VyczogbXNnLmludml0ZVN0cmFuZ2VycyxcclxuICAgICAgICAgICAgICAgIG5pY2s6IG1zZy5uaWNrLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tUm9vbTogbXNnLnJhbmRvbVJvb21cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Il19
