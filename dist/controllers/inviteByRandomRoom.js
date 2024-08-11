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
        if (strangerPlayerIdCrypt.length != 0)
            context.send("INVITE", { nick: ownPlayer.nick, uuid: ownPlayer.uuid, value: "invite you for a match by random room" }, strangerPlayerIdDecrypt);
        if (strangerPlayerIdCrypt.length != 0)
            context.send("invited-by-random-room", { uuid: strangerPlayerIdCrypt }, context.originId);
        else
            context.send("no-player-available-random-room", undefined, context.originId);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2ludml0ZUJ5UmFuZG9tUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUEyRDtBQUMzRCxxRUFBNkM7QUFFN0Msa0JBQWUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNqRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3RDLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1oscURBQXFEO1FBRXJELElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFBO1FBQzlCLElBQUksdUJBQXVCLEdBQUcsRUFBRSxDQUFBO1FBQ2hDLElBQUksU0FBUyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUE7UUFFcEMsaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1lBRWhDLElBQUksU0FBUyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7Z0JBQ25DLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7Z0JBQ2pDLE9BQU07YUFDVDtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBRUYsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7WUFDakMsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUE7WUFFakMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxXQUFXLElBQUksUUFBUTt3QkFBRSxPQUFPLHFCQUFxQixHQUFHLElBQUksQ0FBQTtnQkFDcEUsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsSUFBSSxDQUFDLHFCQUFxQjtvQkFDdEIsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLHVCQUF1QixHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsQ0FBQTtvQkFDeEMsT0FBTyxxQkFBcUIsR0FBRyxRQUFRLENBQUE7aUJBQzFDO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUkscUJBQXFCLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSx1Q0FBdUMsRUFBQyxFQUFFLHVCQUF1QixDQUFDLENBQUE7UUFDcEwsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7O1lBQ3pILE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNuRixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsImZpbGUiOiJjb250cm9sbGVycy9pbnZpdGVCeVJhbmRvbVJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBsaXN0T2ZBdmFpbGFibGUgfSBmcm9tIFwiLi4vbW9kZWwvbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBkZWNyeXB0IGZyb20gXCIuLi9tb2RlbC90b29scy9kZWNyeXB0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobWFuYWdlcjogTWFuYWdlcikgPT4ge1xyXG4gICAgbWFuYWdlci5vbihcImludml0ZS1ieS1yYW5kb20tcm9vbVwiLCAoY29udGV4dCwgbXNnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tQbGF5ZXJzID0gbXNnLmJsb2NrUGxheWVycztcclxuICAgICAgICAvLyBpZCBkYSBvcmlnaW5cclxuICAgICAgICAvLyBsaXN0YSBkZSBkaXNwb25pdmVpc1xyXG4gICAgICAgIC8vIGJsb3F1ZWlvIGRlIGpvZ2Fkb3JlcyBqw6EgY29udmlkYWRvc1xyXG4gICAgICAgIC8vIGJsb3F1ZWlvIGRvIGF1dG8gY29udml0ZVxyXG4gICAgICAgIC8vIGNvbnZpZGFyIFxyXG4gICAgICAgIC8vIGVudmlhciByZXNwb3N0YSBwcm8gam9nYWRvciBqdW50byBjb20gYmxvY2twbGF5ZXJzXHJcblxyXG4gICAgICAgIGxldCBzdHJhbmdlclBsYXllcklkQ3J5cHQgPSBcIlwiXHJcbiAgICAgICAgbGV0IHN0cmFuZ2VyUGxheWVySWREZWNyeXB0ID0gXCJcIlxyXG4gICAgICAgIGxldCBvd25QbGF5ZXIgPSB7bmljazogXCJcIiwgdXVpZDogXCJcIn1cclxuXHJcbiAgICAgICAgbGlzdE9mQXZhaWxhYmxlLmZpbmQoKHBlcmZpbCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZWNyeXB0SUQgPSBkZWNyeXB0KGluZGV4KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRlY3J5cHRJRCA9PSBjb250ZXh0Lm9yaWdpbklkKSB7XHJcbiAgICAgICAgICAgICAgICBvd25QbGF5ZXIubmljayA9IHBlcmZpbC5wbGF5ZXIubmlja1xyXG4gICAgICAgICAgICAgICAgb3duUGxheWVyLnV1aWQgPSBwZXJmaWwucGxheWVyLmlkXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxpc3RPZkF2YWlsYWJsZS5mb3JFYWNoKChwZXJmaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklEID0gcGVyZmlsLnBsYXllci5pZFxyXG4gICAgICAgICAgICBsZXQgZXhpc3RlZEluQmxvY2tQbGF5ZXJzID0gZmFsc2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwZXJmaWwucGxheWVyLnJhbmRvbVJvb20pIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrUGxheWVycy5mb3JFYWNoKGJsb2NrUGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tQbGF5ZXIgPT0gcGxheWVySUQpIHJldHVybiBleGlzdGVkSW5CbG9ja1BsYXllcnMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZXhpc3RlZEluQmxvY2tQbGF5ZXJzICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcklEICE9IG93blBsYXllci51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyYW5nZXJQbGF5ZXJJZERlY3J5cHQgPSBkZWNyeXB0KGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJhbmdlclBsYXllcklkQ3J5cHQgPSBwbGF5ZXJJRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHN0cmFuZ2VyUGxheWVySWRDcnlwdC5sZW5ndGggIT0gMCkgY29udGV4dC5zZW5kKFwiSU5WSVRFXCIsIHtuaWNrOiBvd25QbGF5ZXIubmljaywgdXVpZDogb3duUGxheWVyLnV1aWQsIHZhbHVlOiBcImludml0ZSB5b3UgZm9yIGEgbWF0Y2ggYnkgcmFuZG9tIHJvb21cIn0sIHN0cmFuZ2VyUGxheWVySWREZWNyeXB0KVxyXG4gICAgICAgIGlmIChzdHJhbmdlclBsYXllcklkQ3J5cHQubGVuZ3RoICE9IDApIGNvbnRleHQuc2VuZChcImludml0ZWQtYnktcmFuZG9tLXJvb21cIiwge3V1aWQ6IHN0cmFuZ2VyUGxheWVySWRDcnlwdH0sIGNvbnRleHQub3JpZ2luSWQpXHJcbiAgICAgICAgZWxzZSBjb250ZXh0LnNlbmQoXCJuby1wbGF5ZXItYXZhaWxhYmxlLXJhbmRvbS1yb29tXCIsdW5kZWZpbmVkLGNvbnRleHQub3JpZ2luSWQpXHJcbiAgICB9KVxyXG59Il19
