"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = require("../clients");
/*
----: update a specify data of client
*/
function UpdateDatabaseClients(players, msg) {
    players.map((player) => {
        clients_1.Clients.map((element) => {
            if (element.uuid == player.uuid) {
                switch (msg.type) {
                    case "available":
                        element.available = msg.value;
                        break;
                }
            }
        });
    });
}
exports.default = UpdateDatabaseClients;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL3VwZGF0ZUNsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBcUM7QUFLckM7O0VBRUU7QUFDRixTQUFTLHFCQUFxQixDQUFDLE9BQXlCLEVBQUUsR0FBaUI7SUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBRW5CLGlCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBdUIsRUFBRSxFQUFFO1lBQ3BDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUU3QixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ2QsS0FBSyxXQUFXO3dCQUNaLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQTt3QkFDN0IsTUFBTTtpQkFDYjthQUVKO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCxrQkFBZSxxQkFBcUIsQ0FBQyIsImZpbGUiOiJtb2RlbC90b29scy91cGRhdGVDbGllbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50cyB9IGZyb20gXCIuLi9jbGllbnRzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVBsYXllciB9IGZyb20gXCIuLi8uLi90eXBlcy91cGRhdGVQbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxheWVyUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcGxheWVyVHlwZVwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG4vKlxyXG4tLS0tOiB1cGRhdGUgYSBzcGVjaWZ5IGRhdGEgb2YgY2xpZW50XHJcbiovXHJcbmZ1bmN0aW9uIFVwZGF0ZURhdGFiYXNlQ2xpZW50cyhwbGF5ZXJzOiBwbGF5ZXJQcm9wZXJ0eVtdLCBtc2c6IHVwZGF0ZVBsYXllcik6IHZvaWQge1xyXG4gICAgcGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xyXG5cclxuICAgICAgICBDbGllbnRzLm1hcCgoZWxlbWVudDogcGxheWVyUHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudXVpZCA9PSBwbGF5ZXIudXVpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXZhaWxhYmxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXZhaWxhYmxlID0gbXNnLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVEYXRhYmFzZUNsaWVudHM7Il19
