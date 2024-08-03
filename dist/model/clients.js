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
        if (isCompare == undefined) {
            console.log("yes");
            Clients.push(client);
        }
        else
            console.log("client existed into database");
    }
}
exports.saveClient = saveClient;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2NsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQXdDO0FBR3hDLElBQUksT0FBTyxHQUFxQixFQUFFLENBQUM7QUFxQmQsMEJBQU87QUFuQjVCOztFQUVFO0FBRUYsU0FBUyxVQUFVLENBQUMsTUFBc0I7SUFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUNuQjtRQUNELElBQUksU0FBUyxHQUFHLElBQUEsZ0JBQVUsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFtQixDQUFDO1FBRTFELElBQUksU0FBUyxJQUFJLFNBQVMsRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDdkI7O1lBRUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ25EO0FBQ0wsQ0FBQztBQUVRLGdDQUFVIiwiZmlsZSI6Im1vZGVsL2NsaWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmluZFBsYXllciBmcm9tIFwiLi90b29scy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5cclxudmFyIENsaWVudHM6IHBsYXllclByb3BlcnR5W10gPSBbXTtcclxuXHJcbi8qXHJcbi0tLS06IGdldCB0aGUgY2xpZW50IGFuZCBwdXQgaW50byBjbGllbnRzIGRhdGFiYXNlXHJcbiovXHJcblxyXG5mdW5jdGlvbiBzYXZlQ2xpZW50KGNsaWVudDogcGxheWVyUHJvcGVydHkpOiBhbnkge1xyXG4gICAgaWYgKENsaWVudHMubGVuZ3RoID09IDApIFxyXG4gICAgICAgIENsaWVudHMucHVzaChjbGllbnQpXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgaXNDb21wYXJlID0gZmluZFBsYXllcihjbGllbnQudXVpZCkgYXMgcGxheWVyUHJvcGVydHk7XHJcblxyXG4gICAgICAgIGlmIChpc0NvbXBhcmUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVzXCIpXHJcbiAgICAgICAgICAgIENsaWVudHMucHVzaChjbGllbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGllbnQgZXhpc3RlZCBpbnRvIGRhdGFiYXNlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzYXZlQ2xpZW50LCBDbGllbnRzIH07Il19
