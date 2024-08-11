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
    if (Clients.length == 0)
        Clients.push(client);
    else {
        let isCompare = (0, player_1.default)(client.uuid);
        if (isCompare == undefined)
            Clients.push(client);
    }
}
exports.saveClient = saveClient;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2NsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQXdDO0FBR3hDLElBQUksT0FBTyxHQUFxQixFQUFFLENBQUM7QUFnQmQsMEJBQU87QUFkNUI7O0VBRUU7QUFFRixTQUFTLFVBQVUsQ0FBQyxNQUFzQjtJQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ25CO1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBQSxnQkFBVSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQW1CLENBQUM7UUFFMUQsSUFBSSxTQUFTLElBQUksU0FBUztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDbkQ7QUFDTCxDQUFDO0FBRVEsZ0NBQVUiLCJmaWxlIjoibW9kZWwvY2xpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kUGxheWVyIGZyb20gXCIuL3Rvb2xzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGF5ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi90eXBlcy9wbGF5ZXJUeXBlXCI7XHJcblxyXG52YXIgQ2xpZW50czogcGxheWVyUHJvcGVydHlbXSA9IFtdO1xyXG5cclxuLypcclxuLS0tLTogZ2V0IHRoZSBjbGllbnQgYW5kIHB1dCBpbnRvIGNsaWVudHMgZGF0YWJhc2VcclxuKi9cclxuXHJcbmZ1bmN0aW9uIHNhdmVDbGllbnQoY2xpZW50OiBwbGF5ZXJQcm9wZXJ0eSk6IGFueSB7XHJcbiAgICBpZiAoQ2xpZW50cy5sZW5ndGggPT0gMCkgXHJcbiAgICAgICAgQ2xpZW50cy5wdXNoKGNsaWVudClcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBpc0NvbXBhcmUgPSBmaW5kUGxheWVyKGNsaWVudC51dWlkKSBhcyBwbGF5ZXJQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgaWYgKGlzQ29tcGFyZSA9PSB1bmRlZmluZWQpIENsaWVudHMucHVzaChjbGllbnQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNhdmVDbGllbnQsIENsaWVudHMgfTsiXX0=
