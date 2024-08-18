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
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NoYW5nZVBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBK0U7QUFDL0UscUVBQTZDO0FBRTdDLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFO1lBQUUsT0FBTztRQUMvQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFFbEIsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBRWhDLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUE7Z0JBQ3RELFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUE7Z0JBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUE7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NoYW5nZVBlcm1pc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBhZGRQbGF5ZXJBdmFpbGFibGUsIGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGRlY3J5cHQgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2RlY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiY2hhbmdlLXBlcm1pc3Npb25cIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIGlmIChtc2cuaWQubGVuZ3RoIDwgMzYpIHJldHVybjtcclxuICAgICAgICBsZXQgZmluZEl0ID0gZmFsc2UgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKGF2YWlsYWJsZSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlSWQgPSBkZWNyeXB0KGluZGV4KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlSWQgPT0gbXNnLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGUucGxheWVyLmludml0ZVN0cmFuZ2VycyA9IG1zZy5pbnZpdGVTdHJhbmdlcnNcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wbGF5ZXIucmFuZG9tUm9vbSA9IG1zZy5yYW5kb21Sb29tXHJcbiAgICAgICAgICAgICAgICBmaW5kSXQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdfQ==
