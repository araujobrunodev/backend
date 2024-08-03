"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
exports.default = (manager) => {
    manager.on("available-list", (context, msg) => {
        const availables = [];
        listOfAvailable_1.listOfAvailable.forEach(perfil => {
            availables.push({
                nick: perfil.player.nick,
                uuid: perfil.player.id
            });
        });
        context.send("list-of-available", availables, msg.id);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2F2YWlhbGJlbExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4REFBMkQ7QUFPM0Qsa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFVBQVUsR0FBZSxFQUFFLENBQUM7UUFFbEMsaUNBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDWixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2FBQ3pCLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2F2YWlhbGJlbExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBsaXN0T2ZBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcblxyXG5pbnRlcmZhY2UgQXZhaWxhYmxlIHtcclxuICAgIG5pY2s6IHN0cmluZyxcclxuICAgIHV1aWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcImF2YWlsYWJsZS1saXN0XCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVzOkF2YWlsYWJsZVtdID0gW107IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKHBlcmZpbCA9PiB7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuaWNrOiBwZXJmaWwucGxheWVyLm5pY2ssXHJcbiAgICAgICAgICAgICAgICB1dWlkOiBwZXJmaWwucGxheWVyLmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwibGlzdC1vZi1hdmFpbGFibGVcIiwgYXZhaWxhYmxlcywgbXNnLmlkKVxyXG4gICAgfSlcclxufSJdfQ==
