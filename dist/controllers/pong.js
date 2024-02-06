"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("../model/tools/player"));
const turnPingOrPong_1 = __importDefault(require("../model/tools/turnPingOrPong"));
exports.default = (manager) => {
    manager.on("PONG", (context, msg) => {
        let player = (0, player_1.default)(msg.uuid);
        if (player == undefined)
            return;
        (0, turnPingOrPong_1.default)(msg.uuid, "PONG", true);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3BvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxtRUFBK0M7QUFFL0MsbUZBQTJEO0FBRTNELGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBQSxnQkFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQW1CLENBQUM7UUFFcEQsSUFBSSxNQUFNLElBQUksU0FBUztZQUFFLE9BQU87UUFDaEMsSUFBQSx3QkFBYyxFQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3BvbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgZmluZFBsYXllciBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuaW1wb3J0IHR1cm5QaW5nT3JQb25nIGZyb20gXCIuLi9tb2RlbC90b29scy90dXJuUGluZ09yUG9uZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6TWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIlBPTkdcIiwoY29udGV4dCxtc2cpID0+IHtcclxuICAgICAgICBsZXQgcGxheWVyID0gZmluZFBsYXllcihtc2cudXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgdHVyblBpbmdPclBvbmcobXNnLnV1aWQsXCJQT05HXCIsdHJ1ZSk7XHJcbiAgICB9KVxyXG59Il19
