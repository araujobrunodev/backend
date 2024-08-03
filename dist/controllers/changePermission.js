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
        if (listOfAvailable_1.listOfAvailable.length == 0) {
            (0, listOfAvailable_1.addPlayerAvailable)({
                id: msg.id,
                inviteStrangers: msg.inviteStrangers,
                nick: msg.nick,
                randomRoom: msg.randomRoom
            });
        }
        else {
            listOfAvailable_1.listOfAvailable.forEach((available, index) => {
                let availableId = (0, decrypt_1.default)(index);
                if (availableId == msg.id) {
                    available.player.inviteStrangers = msg.inviteStrangers;
                    available.player.randomRoom = msg.randomRoom;
                }
            });
        }
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2NoYW5nZVBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBK0U7QUFDL0UscUVBQTZDO0FBRTdDLGtCQUFlLENBQUMsT0FBZ0IsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFO1lBQUUsT0FBTztRQUMvQixJQUFJLGlDQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM3QixJQUFBLG9DQUFrQixFQUFDO2dCQUNmLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDVixlQUFlLEVBQUUsR0FBRyxDQUFDLGVBQWU7Z0JBQ3BDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7YUFDN0IsQ0FBQyxDQUFBO1NBQ0w7YUFBTTtZQUNILGlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFBLGlCQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7Z0JBRWhDLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZCLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUE7b0JBQ3RELFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUE7aUJBQy9DO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2NoYW5nZVBlcm1pc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBhZGRQbGF5ZXJBdmFpbGFibGUsIGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGRlY3J5cHQgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2RlY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiY2hhbmdlLXBlcm1pc3Npb25cIiwgKGNvbnRleHQsIG1zZykgPT4ge1xyXG4gICAgICAgIGlmIChtc2cuaWQubGVuZ3RoIDwgMzYpIHJldHVybjtcclxuICAgICAgICBpZiAobGlzdE9mQXZhaWxhYmxlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGFkZFBsYXllckF2YWlsYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBpZDogbXNnLmlkLFxyXG4gICAgICAgICAgICAgICAgaW52aXRlU3RyYW5nZXJzOiBtc2cuaW52aXRlU3RyYW5nZXJzLFxyXG4gICAgICAgICAgICAgICAgbmljazogbXNnLm5pY2ssXHJcbiAgICAgICAgICAgICAgICByYW5kb21Sb29tOiBtc2cucmFuZG9tUm9vbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKChhdmFpbGFibGUsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGVJZCA9IGRlY3J5cHQoaW5kZXgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZUlkID09IG1zZy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wbGF5ZXIuaW52aXRlU3RyYW5nZXJzID0gbXNnLmludml0ZVN0cmFuZ2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wbGF5ZXIucmFuZG9tUm9vbSA9IG1zZy5yYW5kb21Sb29tXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSJdfQ==
