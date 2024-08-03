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
        listOfAvailable_1.listOfAvailable.forEach((available, index) => {
            let availableId = (0, decrypt_1.default)(index);
            if (availableId == msg.id) {
                available.player.inviteStrangers = msg.inviteStrangers;
                available.player.randomRoom = msg.randomRoom;
            }
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NoYW5nZVBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBMkQ7QUFDM0QscUVBQTZDO0FBRTdDLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFO1lBQUUsT0FBTztRQUUvQixpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFBLGlCQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7WUFFaEMsSUFBSSxXQUFXLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRTtnQkFDdkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQTtnQkFDdEQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQTthQUMvQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvY2hhbmdlUGVybWlzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGRlY3J5cHQgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2RlY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiY2hhbmdlLXBlcm1pc3Npb25cIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIGlmIChtc2cuaWQubGVuZ3RoIDwgMzYpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsaXN0T2ZBdmFpbGFibGUuZm9yRWFjaCgoYXZhaWxhYmxlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhdmFpbGFibGVJZCA9IGRlY3J5cHQoaW5kZXgpXHJcblxyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlSWQgPT0gbXNnLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGUucGxheWVyLmludml0ZVN0cmFuZ2VycyA9IG1zZy5pbnZpdGVTdHJhbmdlcnNcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wbGF5ZXIucmFuZG9tUm9vbSA9IG1zZy5yYW5kb21Sb29tXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdfQ==
