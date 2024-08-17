"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
const findAvailable_1 = __importDefault(require("../model/tools/findAvailable"));
exports.default = (manager) => {
    manager.on("TIE", (context, msg) => {
        const playerID = (0, findAvailable_1.default)(context.originId, false);
        const currentRoom = (0, findRoom_1.default)(playerID);
        currentRoom.room.map((uuid) => __awaiter(void 0, void 0, void 0, function* () {
            context.send("TIE", { value: msg.value }, (0, findAvailable_1.default)(uuid, false));
        }));
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3RpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHVFQUErQztBQUMvQyxpRkFBeUQ7QUFHekQsa0JBQWUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUMvQixPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUUsRUFBRTtRQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFBLHVCQUFhLEVBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQVcsQ0FBQTtRQUNqRSxNQUFNLFdBQVcsR0FBRyxJQUFBLGtCQUFRLEVBQUMsUUFBUSxDQUFrQixDQUFDO1FBRXhELFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQU8sSUFBSSxFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxFQUFFLElBQUEsdUJBQWEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFXLENBQUMsQ0FBQTtRQUMvRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvdGllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9maW5kUm9vbVwiO1xyXG5pbXBvcnQgZmluZEF2YWlsYWJsZSBmcm9tIFwiLi4vbW9kZWwvdG9vbHMvZmluZEF2YWlsYWJsZVwiO1xyXG5pbXBvcnQgeyByb29tQ29udGFpbmVyIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjpNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiVElFXCIsKGNvbnRleHQsbXNnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVySUQgPSBmaW5kQXZhaWxhYmxlKGNvbnRleHQub3JpZ2luSWQsIGZhbHNlKSBhcyBzdHJpbmcgXHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvb20gPSBmaW5kUm9vbShwbGF5ZXJJRCkgYXMgcm9vbUNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucm9vbS5tYXAoYXN5bmMgKHV1aWQpID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5zZW5kKFwiVElFXCIse3ZhbHVlOm1zZy52YWx1ZX0sIGZpbmRBdmFpbGFibGUodXVpZCwgZmFsc2UpIGFzIHN0cmluZylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdfQ==
