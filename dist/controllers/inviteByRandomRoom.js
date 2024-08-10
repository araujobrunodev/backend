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
        // id da origin
        // lista de disponiveis
        // bloqueio de jogadores já convidados
        // bloqueio do auto convite
        // convidar 
        // enviar resposta pro jogador junto com blockplayers
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
            if (perfil.player.randomRoom) {
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
        context.send("INVITE", { nick: ownPlayer.nick, uuid: ownPlayer.uuid, value: "invite you for a match by random room" }, strangerPlayerIdDecrypt);
        context.send("invited-by-random-room", { uuid: strangerPlayerIdCrypt }, context.originId);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2ludml0ZUJ5UmFuZG9tUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUEyRDtBQUMzRCxxRUFBNkM7QUFFN0Msa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNqRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3RDLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1oscURBQXFEO1FBRXJELElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFBO1FBQzlCLElBQUksdUJBQXVCLEdBQUcsRUFBRSxDQUFBO1FBQ2hDLElBQUksU0FBUyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUE7UUFFcEMsaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBRWhDLElBQUksU0FBUyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7Z0JBQ25DLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7Z0JBQ2pDLE9BQU07YUFDVDtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7WUFDakMsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUE7WUFFakMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxXQUFXLElBQUksUUFBUTt3QkFBRSxPQUFPLHFCQUFxQixHQUFHLElBQUksQ0FBQTtnQkFDcEUsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLHFCQUFxQjtvQkFDdEIsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLHVCQUF1QixHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsQ0FBQTtvQkFDeEMsT0FBTyxxQkFBcUIsR0FBRyxRQUFRLENBQUE7aUJBQzFDO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHVDQUF1QyxFQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQTtRQUM3SSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNGLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2ludml0ZUJ5UmFuZG9tUm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9tb2RlbC9saXN0T2ZBdmFpbGFibGVcIjtcclxuaW1wb3J0IGRlY3J5cHQgZnJvbSBcIi4uL21vZGVsL3Rvb2xzL2RlY3J5cHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOiBNYW5hZ2VyKSA9PiB7XHJcbiAgICBtYW5hZ2VyLm9uKFwiaW52aXRlLWJ5LXJhbmRvbS1yb29tXCIsIChjb250ZXh0LCBtc2cpID0+IHtcclxuICAgICAgICBjb25zdCBibG9ja1BsYXllcnMgPSBtc2cuYmxvY2tQbGF5ZXJzO1xyXG4gICAgICAgIC8vIGlkIGRhIG9yaWdpblxyXG4gICAgICAgIC8vIGxpc3RhIGRlIGRpc3Bvbml2ZWlzXHJcbiAgICAgICAgLy8gYmxvcXVlaW8gZGUgam9nYWRvcmVzIGrDoSBjb252aWRhZG9zXHJcbiAgICAgICAgLy8gYmxvcXVlaW8gZG8gYXV0byBjb252aXRlXHJcbiAgICAgICAgLy8gY29udmlkYXIgXHJcbiAgICAgICAgLy8gZW52aWFyIHJlc3Bvc3RhIHBybyBqb2dhZG9yIGp1bnRvIGNvbSBibG9ja3BsYXllcnNcclxuXHJcbiAgICAgICAgbGV0IHN0cmFuZ2VyUGxheWVySWRDcnlwdCA9IFwiXCJcclxuICAgICAgICBsZXQgc3RyYW5nZXJQbGF5ZXJJZERlY3J5cHQgPSBcIlwiXHJcbiAgICAgICAgbGV0IG93blBsYXllciA9IHtuaWNrOiBcIlwiLCB1dWlkOiBcIlwifVxyXG5cclxuICAgICAgICBsaXN0T2ZBdmFpbGFibGUuZmluZCgocGVyZmlsLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY3J5cHRJRCA9IGRlY3J5cHQoaW5kZXgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGVjcnlwdElEID09IGNvbnRleHQub3JpZ2luSWQpIHtcclxuICAgICAgICAgICAgICAgIG93blBsYXllci5uaWNrID0gcGVyZmlsLnBsYXllci5uaWNrXHJcbiAgICAgICAgICAgICAgICBvd25QbGF5ZXIudXVpZCA9IHBlcmZpbC5wbGF5ZXIuaWRcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKHBlcmZpbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVySUQgPSBwZXJmaWwucGxheWVyLmlkXHJcbiAgICAgICAgICAgIGxldCBleGlzdGVkSW5CbG9ja1BsYXllcnMgPSBmYWxzZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHBlcmZpbC5wbGF5ZXIucmFuZG9tUm9vbSkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tQbGF5ZXJzLmZvckVhY2goYmxvY2tQbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja1BsYXllciA9PSBwbGF5ZXJJRCkgcmV0dXJuIGV4aXN0ZWRJbkJsb2NrUGxheWVycyA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdGVkSW5CbG9ja1BsYXllcnMgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVySUQgIT0gb3duUGxheWVyLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJhbmdlclBsYXllcklkRGVjcnlwdCA9IGRlY3J5cHQoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmFuZ2VyUGxheWVySWRDcnlwdCA9IHBsYXllcklEXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJJTlZJVEVcIiwge25pY2s6IG93blBsYXllci5uaWNrLCB1dWlkOiBvd25QbGF5ZXIudXVpZCwgdmFsdWU6IFwiaW52aXRlIHlvdSBmb3IgYSBtYXRjaCBieSByYW5kb20gcm9vbVwifSwgc3RyYW5nZXJQbGF5ZXJJZERlY3J5cHQpXHJcbiAgICAgICAgY29udGV4dC5zZW5kKFwiaW52aXRlZC1ieS1yYW5kb20tcm9vbVwiLCB7dXVpZDogc3RyYW5nZXJQbGF5ZXJJZENyeXB0fSwgY29udGV4dC5vcmlnaW5JZClcclxuICAgIH0pXHJcbn0iXX0=
