"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("../model/tools/player"));
exports.default = (manager) => {
    manager.on("DENIED", (context, msg) => {
        let client1 = (0, player_1.default)(context.originId);
        let client2 = (0, player_1.default)(msg.uuid);
        if (client1 != undefined && client2 != undefined) {
            if (!client1.available || !client2.available)
                return;
            console.log("denied the invite");
            context.send("DENIED", client1.name, client2.uuid);
        }
        else
            console.log("don't find client");
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2RlbmllZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG1FQUErQztBQUcvQyxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFtQixDQUFDO1FBQzdELElBQUksT0FBTyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFtQixDQUFDO1FBRXJELElBQUksT0FBTyxJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Z0JBQUUsT0FBTztZQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLElBQWMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0Q7O1lBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2RlbmllZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuLi9tb2RlbC90b29scy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6TWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIkRFTklFRFwiLChjb250ZXh0LG1zZykgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnQxID0gZmluZFBsYXllcihjb250ZXh0Lm9yaWdpbklkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuICAgICAgICBsZXQgY2xpZW50MiA9IGZpbmRQbGF5ZXIobXNnLnV1aWQpIGFzIHBsYXllclByb3BlcnR5O1xyXG5cclxuICAgICAgICBpZiAoY2xpZW50MSAhPSB1bmRlZmluZWQgJiYgY2xpZW50MiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFjbGllbnQxLmF2YWlsYWJsZSB8fCAhY2xpZW50Mi5hdmFpbGFibGUpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVuaWVkIHRoZSBpbnZpdGVcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250ZXh0LnNlbmQoXCJERU5JRURcIixjbGllbnQxLm5hbWUgYXMgc3RyaW5nICxjbGllbnQyLnV1aWQpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvbid0IGZpbmQgY2xpZW50XCIpO1xyXG4gICAgfSlcclxufSJdfQ==
