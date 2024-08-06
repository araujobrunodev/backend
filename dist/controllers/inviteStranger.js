"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("invite-stranger", (context, msg) => {
        let strangerID = "";
        let myID = "";
        listOfAvailable_1.listOfAvailable.forEach((available, index) => {
            let decryptID = (0, decrypt_1.default)(index);
            if (available.player.id == msg.strangerID)
                strangerID = decryptID;
            if (decryptID == msg.yourUUID)
                myID = available.player.id;
        });
        context.send("INVITE", { nick: msg.yourNick, uuid: myID, value: "invite you for a match" }, strangerID);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2ludml0ZVN0cmFuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQTJEO0FBQzNELHFFQUE2QztBQUU3QyxrQkFBZSxDQUFDLE9BQWdCLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzNDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNuQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFFYixpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLFNBQVMsR0FBRyxJQUFBLGlCQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7WUFFOUIsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsVUFBVTtnQkFBRSxVQUFVLEdBQUcsU0FBUyxDQUFBO1lBQ2pFLElBQUksU0FBUyxJQUFJLEdBQUcsQ0FBQyxRQUFRO2dCQUFFLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUM3RCxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUMzRyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9pbnZpdGVTdHJhbmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGRlY3J5cHQgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2RlY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiaW52aXRlLXN0cmFuZ2VyXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBsZXQgc3RyYW5nZXJJRCA9IFwiXCJcclxuICAgICAgICBsZXQgbXlJRCA9IFwiXCJcclxuXHJcbiAgICAgICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKGF2YWlsYWJsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRlY3J5cHRJRCA9IGRlY3J5cHQoaW5kZXgpXHJcblxyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlLnBsYXllci5pZCA9PSBtc2cuc3RyYW5nZXJJRCkgc3RyYW5nZXJJRCA9IGRlY3J5cHRJRFxyXG4gICAgICAgICAgICBpZiAoZGVjcnlwdElEID09IG1zZy55b3VyVVVJRCkgbXlJRCA9IGF2YWlsYWJsZS5wbGF5ZXIuaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJJTlZJVEVcIiwgeyBuaWNrOiBtc2cueW91ck5pY2ssIHV1aWQ6IG15SUQsIHZhbHVlOiBcImludml0ZSB5b3UgZm9yIGEgbWF0Y2hcIiB9LCBzdHJhbmdlcklEKVxyXG4gICAgfSlcclxufSJdfQ==
