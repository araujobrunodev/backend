"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("../model/tools/player"));
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("DENIED", (context, msg) => {
        listOfAvailable_1.listOfAvailable.forEach((available, index) => {
            if (msg.uuid == available.player.id)
                return msg.uuid = (0, decrypt_1.default)(index);
        });
        let client1 = (0, player_1.default)(context.originId);
        let client2 = (0, player_1.default)(msg.uuid);
        context.send("DENIED", client1.name, client2.uuid);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2RlbmllZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG1FQUErQztBQUUvQyw4REFBMkQ7QUFDM0QscUVBQTZDO0FBRTdDLGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDaEMsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFtQixDQUFDO1FBQzdELElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFtQixDQUFDO1FBRXJELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2RlbmllZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuLi9tb2RlbC90b29scy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5pbXBvcnQgeyBsaXN0T2ZBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBkZWNyeXB0IGZyb20gXCIuLi9tb2RlbC90b29scy9kZWNyeXB0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjpNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiREVOSUVEXCIsKGNvbnRleHQsbXNnKSA9PiB7XHJcbiAgICAgICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKGF2YWlsYWJsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1zZy51dWlkID09IGF2YWlsYWJsZS5wbGF5ZXIuaWQpIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZy51dWlkID0gZGVjcnlwdChpbmRleClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgY2xpZW50MSA9IGZpbmRQbGF5ZXIoY29udGV4dC5vcmlnaW5JZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcbiAgICAgICAgbGV0IGNsaWVudDIgPSBmaW5kUGxheWVyKG1zZy51dWlkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwiREVOSUVEXCIsY2xpZW50MS5uYW1lLCBjbGllbnQyLnV1aWQpO1xyXG4gICAgfSlcclxufSJdfQ==
