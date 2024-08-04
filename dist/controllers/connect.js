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
                    nick = nick.slice(0, nick.length - 2);
                    console.log("nick is process to remove something:", nick);
                    nick += (0, createRandom_1.createRandom)(2);
                    console.log("change your nick to", nick);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4Q0FBOEM7QUFDOUMsdUVBQXFEO0FBQ3JELHFFQUE2QztBQUM3Qyw4Q0FBMkM7QUFDM0MsOERBQTJEO0FBRTNELGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtRQUVyQixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUV4QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3hELElBQUksSUFBSSxJQUFBLDJCQUFZLEVBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzFDOztvQkFDRyxJQUFJLElBQUksSUFBQSwyQkFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxFQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkYsSUFBQSxvQkFBVSxFQUFDO1lBQ1AsSUFBSSxFQUFDLElBQUk7WUFDVCxJQUFJLEVBQUMsT0FBTyxDQUFDLFFBQVE7WUFDckIsU0FBUyxFQUFDLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBRUgsb0JBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxvQkFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRW5DLHFCQUFpQixDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUMsS0FBSztZQUNWLElBQUksRUFBQyxLQUFLO1lBQ1YsSUFBSSxFQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2Nvbm5lY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBzYXZlQ2xpZW50IH0gZnJvbSBcIi4uL21vZGVsL2NsaWVudHNcIjtcclxuaW1wb3J0IFBpbmdPclBvbmdSZWNlaXZlIGZyb20gXCIuLi90eXBlcy9waW5nUmVjZWl2ZVwiO1xyXG5pbXBvcnQgdGVtcFBsYXllciBmcm9tIFwiLi4vdHlwZXMvdGVtcFBsYXllclwiO1xyXG5pbXBvcnQgeyBDbGllbnRzIH0gZnJvbSBcIi4uL21vZGVsL2NsaWVudHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUmFuZG9tIH0gZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2NyZWF0ZVJhbmRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG1hbmFnZXI6TWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcIkNPTk5FQ1RcIiwoY29udGV4dCxtc2cpID0+IHtcclxuICAgICAgICBsZXQgbmljayA9IG1zZy5wbGF5ZXJcclxuXHJcbiAgICAgICAgQ2xpZW50cy5mb3JFYWNoKChjbGllbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxlbnRoTWF4ID0gTWF0aC5hYnMobmljay5sZW5ndGggLSA3KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNsaWVudC5uYW1lID09IG5pY2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZW50aE1heCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmljayA9IG5pY2suc2xpY2UoMCwgbmljay5sZW5ndGggLSAyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmljayBpcyBwcm9jZXNzIHRvIHJlbW92ZSBzb21ldGhpbmc6XCIsbmljaylcclxuICAgICAgICAgICAgICAgICAgICBuaWNrICs9IGNyZWF0ZVJhbmRvbSgyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIHlvdXIgbmljayB0b1wiLG5pY2spXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgbmljayArPSBjcmVhdGVSYW5kb20obGVudGhNYXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJDT05ORUNURURcIix7dXVpZDogY29udGV4dC5vcmlnaW5JZCwgbmV3Tmljazogbmlja30sY29udGV4dC5vcmlnaW5JZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2F2ZUNsaWVudCh7XHJcbiAgICAgICAgICAgIG5hbWU6bmljayxcclxuICAgICAgICAgICAgdXVpZDpjb250ZXh0Lm9yaWdpbklkLFxyXG4gICAgICAgICAgICBhdmFpbGFibGU6dHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZW1wUGxheWVyLnV1aWRzLnB1c2goY29udGV4dC5vcmlnaW5JZCk7XHJcbiAgICAgICAgdGVtcFBsYXllci51dWlkID0gY29udGV4dC5vcmlnaW5JZDtcclxuXHJcbiAgICAgICAgUGluZ09yUG9uZ1JlY2VpdmUucHVzaCh7XHJcbiAgICAgICAgICAgIHBpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIHBvbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIHV1aWQ6Y29udGV4dC5vcmlnaW5JZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59Il19
