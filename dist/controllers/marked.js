"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findAvailable_1 = __importDefault(require("../model/tools/findAvailable"));
exports.default = (manager) => {
    manager.on("MARKED", (context, msg) => {
        const opponent_uuid = (0, findAvailable_1.default)(msg.opponent_uuid, false);
        context.send("MARKED", {
            collumn: msg.collumn,
            position: msg.position,
            mark: msg.mark
        }, opponent_uuid);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21hcmtlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGlGQUF5RDtBQUV6RCxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2hDLE1BQU0sYUFBYSxHQUFHLElBQUEsdUJBQWEsRUFBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBVyxDQUFBO1FBRXZFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2xCLE9BQU8sRUFBQyxHQUFHLENBQUMsT0FBTztZQUNuQixRQUFRLEVBQUMsR0FBRyxDQUFDLFFBQVE7WUFDckIsSUFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJO1NBQ2hCLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvbWFya2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IGZpbmRBdmFpbGFibGUgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2ZpbmRBdmFpbGFibGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOk1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJNQVJLRURcIiwoY29udGV4dCxtc2cpID0+IHtcclxuICAgICAgICBjb25zdCBvcHBvbmVudF91dWlkID0gZmluZEF2YWlsYWJsZShtc2cub3Bwb25lbnRfdXVpZCwgZmFsc2UpIGFzIHN0cmluZ1xyXG5cclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJNQVJLRURcIix7XHJcbiAgICAgICAgICAgIGNvbGx1bW46bXNnLmNvbGx1bW4sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOm1zZy5wb3NpdGlvbixcclxuICAgICAgICAgICAgbWFyazptc2cubWFya1xyXG4gICAgICAgIH0sIG9wcG9uZW50X3V1aWQpXHJcbiAgICB9KVxyXG59Il19
