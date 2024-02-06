"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = exports.saveClient = void 0;
const player_1 = __importDefault(require("./tools/player"));
var Clients = [];
exports.Clients = Clients;
/*
----: get the client and put into clients database
*/
function saveClient(client) {
    if (Clients.length == 0) {
        console.log("not found any clients into database");
        Clients.push(client);
    }
    else {
        let isCompare = (0, player_1.default)(client.uuid);
        if (isCompare == undefined) {
            console.log("yes");
            Clients.push(client);
        }
        else
            console.log("client existed into database");
    }
}
exports.saveClient = saveClient;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2NsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQXdDO0FBR3hDLElBQUksT0FBTyxHQUFxQixFQUFFLENBQUM7QUF1QmQsMEJBQU87QUFyQjVCOztFQUVFO0FBRUYsU0FBUyxVQUFVLENBQUMsTUFBc0I7SUFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUN2QjtTQUNJO1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBQSxnQkFBVSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQW1CLENBQUM7UUFFMUQsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUN2Qjs7WUFFRyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDbkQ7QUFDTCxDQUFDO0FBRVEsZ0NBQVUiLCJmaWxlIjoibW9kZWwvY2xpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuL3Rvb2xzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi90eXBlcy9wbGF5ZXJUeXBlXCI7XHJcblxyXG52YXIgQ2xpZW50czogcGxheWVyUHJvcGVydHlbXSA9IFtdO1xyXG5cclxuLypcclxuLS0tLTogZ2V0IHRoZSBjbGllbnQgYW5kIHB1dCBpbnRvIGNsaWVudHMgZGF0YWJhc2VcclxuKi9cclxuXHJcbmZ1bmN0aW9uIHNhdmVDbGllbnQoY2xpZW50OiBwbGF5ZXJQcm9wZXJ0eSk6IGFueSB7XHJcbiAgICBpZiAoQ2xpZW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IGZvdW5kIGFueSBjbGllbnRzIGludG8gZGF0YWJhc2VcIik7XHJcbiAgICAgICAgQ2xpZW50cy5wdXNoKGNsaWVudClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBpc0NvbXBhcmUgPSBmaW5kUGxheWVyKGNsaWVudC51dWlkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKGlzQ29tcGFyZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIilcclxuICAgICAgICAgICAgQ2xpZW50cy5wdXNoKGNsaWVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWVudCBleGlzdGVkIGludG8gZGF0YWJhc2VcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNhdmVDbGllbnQsIENsaWVudHMgfTsiXX0=
