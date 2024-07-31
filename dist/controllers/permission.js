"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
exports.default = (manager) => {
    manager.on("pop-up_permission", (context, msg) => {
        (0, listOfAvailable_1.addPlayerAvailable)({
            id: msg.uuid,
            inviteStrangers: msg.inviteStrangers,
            nick: msg.nick,
            randomRoom: msg.randomRoom
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3Blcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4REFBOEQ7QUFFOUQsa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM3QyxJQUFBLG9DQUFrQixFQUFDO1lBQ2YsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ1osZUFBZSxFQUFFLEdBQUcsQ0FBQyxlQUFlO1lBQ3BDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtTQUM3QixDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9wZXJtaXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgYWRkUGxheWVyQXZhaWxhYmxlIH0gZnJvbSBcIi4uL21vZGVsL2xpc3RPZkF2YWlsYWJsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6IE1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJwb3AtdXBfcGVybWlzc2lvblwiLCAoY29udGV4dCwgbXNnKSA9PiB7XHJcbiAgICAgICAgYWRkUGxheWVyQXZhaWxhYmxlKHtcclxuICAgICAgICAgICAgaWQ6IG1zZy51dWlkLFxyXG4gICAgICAgICAgICBpbnZpdGVTdHJhbmdlcnM6IG1zZy5pbnZpdGVTdHJhbmdlcnMsXHJcbiAgICAgICAgICAgIG5pY2s6IG1zZy5uaWNrLFxyXG4gICAgICAgICAgICByYW5kb21Sb29tOiBtc2cucmFuZG9tUm9vbVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19
