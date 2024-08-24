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
            if (perfil.player.hadRoom)
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2F2YWlhbGJlbExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBMkQ7QUFDM0QscUVBQTZDO0FBTzdDLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDMUMsTUFBTSxVQUFVLEdBQWUsRUFBRSxDQUFDO1FBRWxDLGlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsQ0FBQTtZQUUzQixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFBRSxPQUFPO1lBQzNCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFFbEMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtnQkFDL0IsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDWixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2lCQUN6QixDQUFDLENBQUE7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2F2YWlhbGJlbExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBsaXN0T2ZBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBkZWNyeXB0IGZyb20gXCIuLi9tb2RlbC90b29scy9kZWNyeXB0XCI7XHJcblxyXG5pbnRlcmZhY2UgQXZhaWxhYmxlIHtcclxuICAgIG5pY2s6IHN0cmluZyxcclxuICAgIHV1aWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcImF2YWlsYWJsZS1saXN0XCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVzOkF2YWlsYWJsZVtdID0gW107IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKChwZXJmaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSBkZWNyeXB0KGluZGV4KVxyXG5cclxuICAgICAgICAgICAgaWYgKHV1aWQgPT0gbXNnLmlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChwZXJmaWwucGxheWVyLmhhZFJvb20pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwZXJmaWwucGxheWVyLmludml0ZVN0cmFuZ2Vycykge1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrOiBwZXJmaWwucGxheWVyLm5pY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgdXVpZDogcGVyZmlsLnBsYXllci5pZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRleHQuc2VuZChcImxpc3Qtb2YtYXZhaWxhYmxlXCIsIGF2YWlsYWJsZXMsIG1zZy5pZClcclxuICAgIH0pXHJcbn0iXX0=
