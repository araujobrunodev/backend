"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("available-list", (context, msg) => {
        const availables = [];
        listOfAvailable_1.listOfAvailable.forEach((perfil, index) => {
            const uuid = (0, decrypt_1.default)(index);
            if (uuid == msg.id)
                return;
            if (perfil.player.inviteStrangers) {
                availables.push({
                    nick: perfil.player.nick,
                    uuid: perfil.player.id
                });
            }
        });
        context.send("list-of-available", availables, msg.id);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2F2YWlhbGJlbExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBMkQ7QUFDM0QscUVBQTZDO0FBTzdDLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDMUMsTUFBTSxVQUFVLEdBQWUsRUFBRSxDQUFDO1FBRWxDLGlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsQ0FBQTtZQUUzQixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFBRSxPQUFPO1lBRTNCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7Z0JBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtvQkFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtpQkFDekIsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN6RCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9hdmFpYWxiZWxMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgbGlzdE9mQXZhaWxhYmxlIH0gZnJvbSBcIi4uL21vZGVsL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgZGVjcnlwdCBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvZGVjcnlwdFwiO1xyXG5cclxuaW50ZXJmYWNlIEF2YWlsYWJsZSB7XHJcbiAgICBuaWNrOiBzdHJpbmcsXHJcbiAgICB1dWlkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6IE1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJhdmFpbGFibGUtbGlzdFwiLCAoY29udGV4dCwgbXNnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlczpBdmFpbGFibGVbXSA9IFtdOyBcclxuICAgICAgICBcclxuICAgICAgICBsaXN0T2ZBdmFpbGFibGUuZm9yRWFjaCgocGVyZmlsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gZGVjcnlwdChpbmRleClcclxuXHJcbiAgICAgICAgICAgIGlmICh1dWlkID09IG1zZy5pZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBlcmZpbC5wbGF5ZXIuaW52aXRlU3RyYW5nZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2s6IHBlcmZpbC5wbGF5ZXIubmljayxcclxuICAgICAgICAgICAgICAgICAgICB1dWlkOiBwZXJmaWwucGxheWVyLmlkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwibGlzdC1vZi1hdmFpbGFibGVcIiwgYXZhaWxhYmxlcywgbXNnLmlkKVxyXG4gICAgfSlcclxufSJdfQ==
