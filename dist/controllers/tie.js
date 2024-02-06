"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("../model/match/findRoom"));
exports.default = (manager) => {
    manager.on("TIE", (context, msg) => {
        let currentRoom = (0, findRoom_1.default)(context.originId);
        currentRoom.room.map((uuid) => {
            context.send("TIE", { value: msg.value }, uuid);
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3RpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHVFQUErQztBQUcvQyxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzdCLElBQUksV0FBVyxHQUFHLElBQUEsa0JBQVEsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFrQixDQUFDO1FBRTlELFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvdGllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuLi9tb2RlbC9tYXRjaC9maW5kUm9vbVwiO1xyXG5pbXBvcnQgeyByb29tQ29udGFpbmVyIH0gZnJvbSBcIi4uL3R5cGVzL3Jvb21UeXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjpNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiVElFXCIsKGNvbnRleHQsbXNnKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRSb29tID0gZmluZFJvb20oY29udGV4dC5vcmlnaW5JZCkgYXMgcm9vbUNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY3VycmVudFJvb20ucm9vbS5tYXAoKHV1aWQpID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5zZW5kKFwiVElFXCIse3ZhbHVlOm1zZy52YWx1ZX0sdXVpZClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdfQ==
