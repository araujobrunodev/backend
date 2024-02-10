"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = require("../model/clients");
const pingReceive_1 = __importDefault(require("../types/pingReceive"));
const tempPlayer_1 = __importDefault(require("../types/tempPlayer"));
exports.default = (manager) => {
    manager.on("CONNECT", (context, msg) => {
        context.send("CONNECTED", { uuid: context.originId }, context.originId);
        (0, clients_1.saveClient)({
            name: msg.player,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4Q0FBOEM7QUFDOUMsdUVBQXFEO0FBQ3JELHFFQUE2QztBQUU3QyxrQkFBZSxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUMsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEUsSUFBQSxvQkFBVSxFQUFDO1lBQ1AsSUFBSSxFQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQ2YsSUFBSSxFQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3JCLFNBQVMsRUFBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUVILG9CQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsb0JBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUVuQyxxQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFDLEtBQUs7WUFDVixJQUFJLEVBQUMsS0FBSztZQUNWLElBQUksRUFBQyxPQUFPLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9jb25uZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuaW1wb3J0IHsgc2F2ZUNsaWVudCB9IGZyb20gXCIuLi9tb2RlbC9jbGllbnRzXCI7XHJcbmltcG9ydCBQaW5nT3JQb25nUmVjZWl2ZSBmcm9tIFwiLi4vdHlwZXMvcGluZ1JlY2VpdmVcIjtcclxuaW1wb3J0IHRlbXBQbGF5ZXIgZnJvbSBcIi4uL3R5cGVzL3RlbXBQbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOk1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJDT05ORUNUXCIsKGNvbnRleHQsbXNnKSA9PiB7XHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwiQ09OTkVDVEVEXCIse3V1aWQ6IGNvbnRleHQub3JpZ2luSWR9LGNvbnRleHQub3JpZ2luSWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNhdmVDbGllbnQoe1xyXG4gICAgICAgICAgICBuYW1lOm1zZy5wbGF5ZXIsXHJcbiAgICAgICAgICAgIHV1aWQ6Y29udGV4dC5vcmlnaW5JZCxcclxuICAgICAgICAgICAgYXZhaWxhYmxlOnRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVtcFBsYXllci51dWlkcy5wdXNoKGNvbnRleHQub3JpZ2luSWQpO1xyXG4gICAgICAgIHRlbXBQbGF5ZXIudXVpZCA9IGNvbnRleHQub3JpZ2luSWQ7XHJcblxyXG4gICAgICAgIFBpbmdPclBvbmdSZWNlaXZlLnB1c2goe1xyXG4gICAgICAgICAgICBwaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBwb25nOmZhbHNlLFxyXG4gICAgICAgICAgICB1dWlkOmNvbnRleHQub3JpZ2luSWRcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdfQ==
