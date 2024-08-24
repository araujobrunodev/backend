"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../model/listOfAvailable");
const decrypt_1 = __importDefault(require("../model/tools/decrypt"));
exports.default = (manager) => {
    manager.on("invite-by-random-room", (context, msg) => {
        const blockPlayers = msg.blockPlayers;
        let strangerPlayerIdCrypt = "";
        let strangerPlayerIdDecrypt = "";
        let ownPlayer = { nick: "", uuid: "" };
        listOfAvailable_1.listOfAvailable.find((perfil, index) => {
            const decryptID = (0, decrypt_1.default)(index);
            if (decryptID == context.originId) {
                ownPlayer.nick = perfil.player.nick;
                ownPlayer.uuid = perfil.player.id;
                return;
            }
        });
        listOfAvailable_1.listOfAvailable.forEach((perfil, index) => {
            const playerID = perfil.player.id;
            let existedInBlockPlayers = false;
            if (perfil.player.randomRoom && !perfil.player.hadRoom) {
                blockPlayers.forEach(blockPlayer => {
                    if (blockPlayer == playerID)
                        return existedInBlockPlayers = true;
                });
                if (!existedInBlockPlayers &&
                    playerID != ownPlayer.uuid) {
                    strangerPlayerIdDecrypt = (0, decrypt_1.default)(index);
                    return strangerPlayerIdCrypt = playerID;
                }
            }
        });
        if (strangerPlayerIdCrypt.length != 0)
            context.send("INVITE", { nick: ownPlayer.nick, uuid: ownPlayer.uuid, value: "invite you for a match by random room" }, strangerPlayerIdDecrypt);
        if (strangerPlayerIdCrypt.length != 0)
            context.send("invited-by-random-room", { uuid: strangerPlayerIdCrypt }, context.originId);
        else
            context.send("no-player-available-random-room", undefined, context.originId);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2ludml0ZUJ5UmFuZG9tUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUEyRDtBQUMzRCxxRUFBNkM7QUFFN0Msa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNqRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBRXRDLElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFBO1FBQzlCLElBQUksdUJBQXVCLEdBQUcsRUFBRSxDQUFBO1FBQ2hDLElBQUksU0FBUyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUE7UUFFcEMsaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBRWhDLElBQUksU0FBUyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7Z0JBQ25DLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7Z0JBQ2pDLE9BQU07YUFDVDtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7WUFDakMsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUE7WUFFakMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNwRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUMvQixJQUFJLFdBQVcsSUFBSSxRQUFRO3dCQUFFLE9BQU8scUJBQXFCLEdBQUcsSUFBSSxDQUFBO2dCQUNwRSxDQUFDLENBQUMsQ0FBQTtnQkFFRixJQUFJLENBQUMscUJBQXFCO29CQUN0QixRQUFRLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtvQkFDNUIsdUJBQXVCLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QyxPQUFPLHFCQUFxQixHQUFHLFFBQVEsQ0FBQTtpQkFDMUM7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHVDQUF1QyxFQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQTtRQUNwTCxJQUFJLHFCQUFxQixDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7WUFDekgsT0FBTyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25GLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2ludml0ZUJ5UmFuZG9tUm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGRlY3J5cHQgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2RlY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiaW52aXRlLWJ5LXJhbmRvbS1yb29tXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBjb25zdCBibG9ja1BsYXllcnMgPSBtc2cuYmxvY2tQbGF5ZXJzO1xyXG5cclxuICAgICAgICBsZXQgc3RyYW5nZXJQbGF5ZXJJZENyeXB0ID0gXCJcIlxyXG4gICAgICAgIGxldCBzdHJhbmdlclBsYXllcklkRGVjcnlwdCA9IFwiXCJcclxuICAgICAgICBsZXQgb3duUGxheWVyID0ge25pY2s6IFwiXCIsIHV1aWQ6IFwiXCJ9XHJcblxyXG4gICAgICAgIGxpc3RPZkF2YWlsYWJsZS5maW5kKChwZXJmaWwsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVjcnlwdElEID0gZGVjcnlwdChpbmRleClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkZWNyeXB0SUQgPT0gY29udGV4dC5vcmlnaW5JZCkge1xyXG4gICAgICAgICAgICAgICAgb3duUGxheWVyLm5pY2sgPSBwZXJmaWwucGxheWVyLm5pY2tcclxuICAgICAgICAgICAgICAgIG93blBsYXllci51dWlkID0gcGVyZmlsLnBsYXllci5pZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsaXN0T2ZBdmFpbGFibGUuZm9yRWFjaCgocGVyZmlsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJJRCA9IHBlcmZpbC5wbGF5ZXIuaWRcclxuICAgICAgICAgICAgbGV0IGV4aXN0ZWRJbkJsb2NrUGxheWVycyA9IGZhbHNlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocGVyZmlsLnBsYXllci5yYW5kb21Sb29tICYmICFwZXJmaWwucGxheWVyLmhhZFJvb20pIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrUGxheWVycy5mb3JFYWNoKGJsb2NrUGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tQbGF5ZXIgPT0gcGxheWVySUQpIHJldHVybiBleGlzdGVkSW5CbG9ja1BsYXllcnMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RlZEluQmxvY2tQbGF5ZXJzICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcklEICE9IG93blBsYXllci51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyYW5nZXJQbGF5ZXJJZERlY3J5cHQgPSBkZWNyeXB0KGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJhbmdlclBsYXllcklkQ3J5cHQgPSBwbGF5ZXJJRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHN0cmFuZ2VyUGxheWVySWRDcnlwdC5sZW5ndGggIT0gMCkgY29udGV4dC5zZW5kKFwiSU5WSVRFXCIsIHtuaWNrOiBvd25QbGF5ZXIubmljaywgdXVpZDogb3duUGxheWVyLnV1aWQsIHZhbHVlOiBcImludml0ZSB5b3UgZm9yIGEgbWF0Y2ggYnkgcmFuZG9tIHJvb21cIn0sIHN0cmFuZ2VyUGxheWVySWREZWNyeXB0KVxyXG4gICAgICAgIGlmIChzdHJhbmdlclBsYXllcklkQ3J5cHQubGVuZ3RoICE9IDApIGNvbnRleHQuc2VuZChcImludml0ZWQtYnktcmFuZG9tLXJvb21cIiwge3V1aWQ6IHN0cmFuZ2VyUGxheWVySWRDcnlwdH0sIGNvbnRleHQub3JpZ2luSWQpXHJcbiAgICAgICAgZWxzZSBjb250ZXh0LnNlbmQoXCJuby1wbGF5ZXItYXZhaWxhYmxlLXJhbmRvbS1yb29tXCIsdW5kZWZpbmVkLGNvbnRleHQub3JpZ2luSWQpXHJcbiAgICB9KVxyXG59Il19
