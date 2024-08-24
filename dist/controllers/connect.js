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
const listOfAvailable_1 = require("../model/listOfAvailable");
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
        (0, listOfAvailable_1.addPlayerAvailable)({
            id: context.originId,
            inviteStrangers: false,
            nick: nick,
            randomRoom: false,
            hadRoom: false
        });
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4Q0FBOEM7QUFDOUMsdUVBQXFEO0FBQ3JELHFFQUE2QztBQUM3Qyw4Q0FBMkM7QUFDM0MsOERBQTJEO0FBQzNELDhEQUE4RDtBQUU5RCxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7UUFFckIsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFeEMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUNmLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDdkMsSUFBSSxJQUFJLElBQUEsMkJBQVksRUFBQyxDQUFDLENBQUMsQ0FBQTtpQkFDMUI7O29CQUNHLElBQUksSUFBSSxJQUFBLDJCQUFZLEVBQUMsUUFBUSxDQUFDLENBQUE7YUFDckM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxFQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRixJQUFBLG9CQUFVLEVBQUM7WUFDUCxJQUFJLEVBQUMsSUFBSTtZQUNULElBQUksRUFBQyxPQUFPLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFFSCxvQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLG9CQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFbkMscUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ25CLElBQUksRUFBQyxLQUFLO1lBQ1YsSUFBSSxFQUFDLEtBQUs7WUFDVixJQUFJLEVBQUMsT0FBTyxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFBO1FBRUYsSUFBQSxvQ0FBa0IsRUFBQztZQUNmLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUNwQixlQUFlLEVBQUUsS0FBSztZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2Nvbm5lY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBzYXZlQ2xpZW50IH0gZnJvbSBcIi4uL21vZGVsL2NsaWVudHNcIjtcclxuaW1wb3J0IFBpbmdPclBvbmdSZWNlaXZlIGZyb20gXCIuLi90eXBlcy9waW5nUmVjZWl2ZVwiO1xyXG5pbXBvcnQgdGVtcFBsYXllciBmcm9tIFwiLi4vdHlwZXMvdGVtcFBsYXllclwiO1xyXG5pbXBvcnQgeyBDbGllbnRzIH0gZnJvbSBcIi4uL21vZGVsL2NsaWVudHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUmFuZG9tIH0gZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2NyZWF0ZVJhbmRvbVwiO1xyXG5pbXBvcnQgeyBhZGRQbGF5ZXJBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjpNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiQ09OTkVDVFwiLChjb250ZXh0LG1zZykgPT4ge1xyXG4gICAgICAgIGxldCBuaWNrID0gbXNnLnBsYXllclxyXG5cclxuICAgICAgICBDbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVudGhNYXggPSBNYXRoLmFicyhuaWNrLmxlbmd0aCAtIDcpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY2xpZW50Lm5hbWUgPT0gbmljaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlbnRoTWF4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrID0gKG5pY2suc2xpY2UoMCwgbmljay5sZW5ndGggLSAyKSlcclxuICAgICAgICAgICAgICAgICAgICBuaWNrICs9IGNyZWF0ZVJhbmRvbSgyKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2sgKz0gY3JlYXRlUmFuZG9tKGxlbnRoTWF4KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwiQ09OTkVDVEVEXCIse3V1aWQ6IGNvbnRleHQub3JpZ2luSWQsIG5ld05pY2s6IG5pY2t9LGNvbnRleHQub3JpZ2luSWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNhdmVDbGllbnQoe1xyXG4gICAgICAgICAgICBuYW1lOm5pY2ssXHJcbiAgICAgICAgICAgIHV1aWQ6Y29udGV4dC5vcmlnaW5JZCxcclxuICAgICAgICAgICAgYXZhaWxhYmxlOnRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVtcFBsYXllci51dWlkcy5wdXNoKGNvbnRleHQub3JpZ2luSWQpO1xyXG4gICAgICAgIHRlbXBQbGF5ZXIudXVpZCA9IGNvbnRleHQub3JpZ2luSWQ7XHJcblxyXG4gICAgICAgIFBpbmdPclBvbmdSZWNlaXZlLnB1c2goe1xyXG4gICAgICAgICAgICBwaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBwb25nOmZhbHNlLFxyXG4gICAgICAgICAgICB1dWlkOmNvbnRleHQub3JpZ2luSWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhZGRQbGF5ZXJBdmFpbGFibGUoe1xyXG4gICAgICAgICAgICBpZDogY29udGV4dC5vcmlnaW5JZCxcclxuICAgICAgICAgICAgaW52aXRlU3RyYW5nZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmljazogbmljayxcclxuICAgICAgICAgICAgcmFuZG9tUm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhZFJvb206IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iXX0=
