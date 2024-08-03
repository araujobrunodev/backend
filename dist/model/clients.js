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
        else
            console.log("client existed into database");
    }
}
exports.saveClient = saveClient;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2NsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQXdDO0FBR3hDLElBQUksT0FBTyxHQUFxQixFQUFFLENBQUM7QUFpQmQsMEJBQU87QUFmNUI7O0VBRUU7QUFFRixTQUFTLFVBQVUsQ0FBQyxNQUFzQjtJQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ25CO1FBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBQSxnQkFBVSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQW1CLENBQUM7UUFFMUQsSUFBSSxTQUFTLElBQUksU0FBUztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7O1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUNwRDtBQUNMLENBQUM7QUFFUSxnQ0FBVSIsImZpbGUiOiJtb2RlbC9jbGllbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbmRQbGF5ZXIgZnJvbSBcIi4vdG9vbHMvcGxheWVyXCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuXHJcbnZhciBDbGllbnRzOiBwbGF5ZXJQcm9wZXJ0eVtdID0gW107XHJcblxyXG4vKlxyXG4tLS0tOiBnZXQgdGhlIGNsaWVudCBhbmQgcHV0IGludG8gY2xpZW50cyBkYXRhYmFzZVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gc2F2ZUNsaWVudChjbGllbnQ6IHBsYXllclByb3BlcnR5KTogYW55IHtcclxuICAgIGlmIChDbGllbnRzLmxlbmd0aCA9PSAwKSBcclxuICAgICAgICBDbGllbnRzLnB1c2goY2xpZW50KVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGlzQ29tcGFyZSA9IGZpbmRQbGF5ZXIoY2xpZW50LnV1aWQpIGFzIHBsYXllclByb3BlcnR5O1xyXG5cclxuICAgICAgICBpZiAoaXNDb21wYXJlID09IHVuZGVmaW5lZCkgQ2xpZW50cy5wdXNoKGNsaWVudClcclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiY2xpZW50IGV4aXN0ZWQgaW50byBkYXRhYmFzZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2F2ZUNsaWVudCwgQ2xpZW50cyB9OyJdfQ==
