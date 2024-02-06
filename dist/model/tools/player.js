"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = require("../clients");
/*
----: find a specify player
*/
function findPlayer(uuid) {
    try {
        return clients_1.Clients.find((element) => {
            return (element.uuid == uuid);
        });
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}
exports.default = findPlayer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFxQztBQUVyQzs7RUFFRTtBQUNGLFNBQVMsVUFBVSxDQUFDLElBQVk7SUFDNUIsSUFBSTtRQUNBLE9BQU8saUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUF1QixFQUFFLEVBQUU7WUFDNUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixPQUFPLFNBQVMsQ0FBQztLQUNwQjtBQUNMLENBQUM7QUFFRCxrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoibW9kZWwvdG9vbHMvcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50cyB9IGZyb20gXCIuLi9jbGllbnRzXCI7XHJcbmltcG9ydCB7IHBsYXllclByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzL3BsYXllclR5cGVcIjtcclxuLypcclxuLS0tLTogZmluZCBhIHNwZWNpZnkgcGxheWVyIFxyXG4qL1xyXG5mdW5jdGlvbiBmaW5kUGxheWVyKHV1aWQ6IHN0cmluZyk6IHBsYXllclByb3BlcnR5IHwgdW5kZWZpbmVkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIENsaWVudHMuZmluZCgoZWxlbWVudDogcGxheWVyUHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbGVtZW50LnV1aWQgPT0gdXVpZClcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbmRQbGF5ZXI7Il19
