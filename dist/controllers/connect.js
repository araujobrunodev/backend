"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = require("../model/clients");
const pingReceive_1 = __importDefault(require("../types/pingReceive"));
const tempPlayer_1 = __importDefault(require("../types/tempPlayer"));
const clients_2 = require("../model/clients");
const createRandom_1 = require("../model/tools/createRandom");
exports.default = (manager) => {
    manager.on("CONNECT", (context, msg) => {
        let nick = msg.player;
        clients_2.Clients.forEach((client) => {
            let lenthMax = Math.abs(nick.length - 7);
            if (client.name == nick) {
                if (lenthMax == 0) {
                    nick = (nick.slice(0, nick.length - 2));
                    nick += (0, createRandom_1.createRandom)(2);
                }
                else
                    nick += (0, createRandom_1.createRandom)(lenthMax);
            }
        });
        context.send("CONNECTED", { uuid: context.originId, newNick: nick }, context.originId);
        (0, clients_1.saveClient)({
            name: nick,
            uuid: context.originId,
            available: true
        });
        tempPlayer_1.default.uuids.push(context.originId);
        tempPlayer_1.default.uuid = context.originId;
        pingReceive_1.default.push({
            ping: false,
            pong: false,
            uuid: context.originId
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4Q0FBOEM7QUFDOUMsdUVBQXFEO0FBQ3JELHFFQUE2QztBQUM3Qyw4Q0FBMkM7QUFDM0MsOERBQTJEO0FBRTNELGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtRQUVyQixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUV4QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2YsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN2QyxJQUFJLElBQUksSUFBQSwyQkFBWSxFQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUMxQjs7b0JBQ0csSUFBSSxJQUFJLElBQUEsMkJBQVksRUFBQyxRQUFRLENBQUMsQ0FBQTthQUNyQztRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5GLElBQUEsb0JBQVUsRUFBQztZQUNQLElBQUksRUFBQyxJQUFJO1lBQ1QsSUFBSSxFQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3JCLFNBQVMsRUFBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUVILG9CQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsb0JBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUVuQyxxQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFDLEtBQUs7WUFDVixJQUFJLEVBQUMsS0FBSztZQUNWLElBQUksRUFBQyxPQUFPLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9jb25uZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgc2F2ZUNsaWVudCB9IGZyb20gXCIuLi9tb2RlbC9jbGllbnRzXCI7XHJcbmltcG9ydCBQaW5nT3JQb25nUmVjZWl2ZSBmcm9tIFwiLi4vdHlwZXMvcGluZ1JlY2VpdmVcIjtcclxuaW1wb3J0IHRlbXBQbGF5ZXIgZnJvbSBcIi4uL3R5cGVzL3RlbXBQbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ2xpZW50cyB9IGZyb20gXCIuLi9tb2RlbC9jbGllbnRzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJhbmRvbSB9IGZyb20gXCIuLi9tb2RlbC90b29scy9jcmVhdGVSYW5kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOk1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJDT05ORUNUXCIsKGNvbnRleHQsbXNnKSA9PiB7XHJcbiAgICAgICAgbGV0IG5pY2sgPSBtc2cucGxheWVyXHJcblxyXG4gICAgICAgIENsaWVudHMuZm9yRWFjaCgoY2xpZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsZW50aE1heCA9IE1hdGguYWJzKG5pY2subGVuZ3RoIC0gNylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjbGllbnQubmFtZSA9PSBuaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGVudGhNYXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2sgPSAobmljay5zbGljZSgwLCBuaWNrLmxlbmd0aCAtIDIpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2sgKz0gY3JlYXRlUmFuZG9tKDIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgbmljayArPSBjcmVhdGVSYW5kb20obGVudGhNYXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJDT05ORUNURURcIix7dXVpZDogY29udGV4dC5vcmlnaW5JZCwgbmV3Tmljazogbmlja30sY29udGV4dC5vcmlnaW5JZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2F2ZUNsaWVudCh7XHJcbiAgICAgICAgICAgIG5hbWU6bmljayxcclxuICAgICAgICAgICAgdXVpZDpjb250ZXh0Lm9yaWdpbklkLFxyXG4gICAgICAgICAgICBhdmFpbGFibGU6dHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZW1wUGxheWVyLnV1aWRzLnB1c2goY29udGV4dC5vcmlnaW5JZCk7XHJcbiAgICAgICAgdGVtcFBsYXllci51dWlkID0gY29udGV4dC5vcmlnaW5JZDtcclxuXHJcbiAgICAgICAgUGluZ09yUG9uZ1JlY2VpdmUucHVzaCh7XHJcbiAgICAgICAgICAgIHBpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIHBvbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIHV1aWQ6Y29udGV4dC5vcmlnaW5JZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19
