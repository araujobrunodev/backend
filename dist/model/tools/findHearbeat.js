"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pingReceive_1 = __importDefault(require("../../types/pingReceive"));
function findPingOrPong(uuid) {
    return pingReceive_1.default.find((PPR) => {
        return (PPR.uuid == uuid);
    });
}
exports.default = findPingOrPong;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL2ZpbmRIZWFyYmVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBFQUF3RTtBQUV4RSxTQUFTLGNBQWMsQ0FBQyxJQUFZO0lBQ2hDLE9BQU8scUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBRUQsa0JBQWUsY0FBYyxDQUFDIiwiZmlsZSI6Im1vZGVsL3Rvb2xzL2ZpbmRIZWFyYmVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaW5nT3JQb25nUmVjZWl2ZSwgeyBwaW5nT3JQb25nIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3BpbmdSZWNlaXZlXCI7XHJcblxyXG5mdW5jdGlvbiBmaW5kUGluZ09yUG9uZyh1dWlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBQaW5nT3JQb25nUmVjZWl2ZS5maW5kKChQUFIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFBQUi51dWlkID09IHV1aWQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaW5kUGluZ09yUG9uZzsiXX0=
