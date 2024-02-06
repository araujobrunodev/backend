"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRoom_1 = __importDefault(require("./findRoom"));
const player_1 = __importDefault(require("../tools/player"));
const exitType_1 = __importDefault(require("../../types/exitType"));
const removeRoom_1 = __importDefault(require("./removeRoom"));
var changeRoom = (uuid) => {
    let player = (0, player_1.default)(uuid);
    let currentRoom = (0, findRoom_1.default)(uuid);
    let result = false;
    if (currentRoom != undefined) {
        currentRoom.room.map((currentUuid) => {
            if (currentUuid !== uuid) {
                let player1 = (0, player_1.default)(currentUuid);
                if (player1 == undefined || player == undefined)
                    return changeRoom(uuid);
                exitType_1.default.player = player;
                exitType_1.default.room = currentRoom.room;
                exitType_1.default.value = "left the room";
                (0, removeRoom_1.default)(currentRoom);
                exitType_1.default.state = true;
                result = true;
            }
        });
    }
    return result;
};
exports.default = changeRoom;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL21hdGNoL2NoYW5nZVJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBaUM7QUFDakMsNkRBQXdDO0FBRXhDLG9FQUF1QztBQUN2Qyw4REFBcUM7QUFFckMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQVcsRUFBRTtJQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFBLGdCQUFVLEVBQUMsSUFBSSxDQUFtQixDQUFDO0lBQ2hELElBQUksV0FBVyxHQUFHLElBQUEsa0JBQVEsRUFBQyxJQUFJLENBQWtCLENBQUM7SUFDbEQsSUFBSSxNQUFNLEdBQVksS0FBSyxDQUFDO0lBRTVCLElBQUksV0FBVyxJQUFJLFNBQVMsRUFBRTtRQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ2pDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtnQkFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBQSxnQkFBVSxFQUFDLFdBQVcsQ0FBbUIsQ0FBQztnQkFFeEQsSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxTQUFTO29CQUFFLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6RSxrQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLGtCQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLGtCQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztnQkFFN0IsSUFBQSxvQkFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUV4QixrQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakI7UUFDTCxDQUFDLENBQUMsQ0FBQTtLQUNMO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6Im1vZGVsL21hdGNoL2NoYW5nZVJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi90eXBlcy9wbGF5ZXJUeXBlXCJcclxuaW1wb3J0IGZpbmRSb29tIGZyb20gXCIuL2ZpbmRSb29tXCJcclxuaW1wb3J0IGZpbmRQbGF5ZXIgZnJvbSBcIi4uL3Rvb2xzL3BsYXllclwiXHJcbmltcG9ydCB7IHJvb21Db250YWluZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcm9vbVR5cGVcIlxyXG5pbXBvcnQgZXhpdCBmcm9tIFwiLi4vLi4vdHlwZXMvZXhpdFR5cGVcIlxyXG5pbXBvcnQgcmVtb3ZlUm9vbSBmcm9tIFwiLi9yZW1vdmVSb29tXCJcclxuXHJcbnZhciBjaGFuZ2VSb29tID0gKHV1aWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IHBsYXllciA9IGZpbmRQbGF5ZXIodXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcbiAgICBsZXQgY3VycmVudFJvb20gPSBmaW5kUm9vbSh1dWlkKSBhcyByb29tQ29udGFpbmVyO1xyXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChjdXJyZW50Um9vbSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50Um9vbS5yb29tLm1hcCgoY3VycmVudFV1aWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRVdWlkICE9PSB1dWlkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyMSA9IGZpbmRQbGF5ZXIoY3VycmVudFV1aWQpIGFzIHBsYXllclByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxID09IHVuZGVmaW5lZCB8fCBwbGF5ZXIgPT0gdW5kZWZpbmVkKSByZXR1cm4gY2hhbmdlUm9vbSh1dWlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBleGl0LnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIGV4aXQucm9vbSA9IGN1cnJlbnRSb29tLnJvb207XHJcbiAgICAgICAgICAgICAgICBleGl0LnZhbHVlID0gXCJsZWZ0IHRoZSByb29tXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUm9vbShjdXJyZW50Um9vbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhpdC5zdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VSb29tOyJdfQ==
