"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOfAvailable = exports.addPlayerAvailable = void 0;
const encrypt_1 = __importDefault(require("./tools/encrypt"));
const listOfAvailable = [];
exports.listOfAvailable = listOfAvailable;
function addPlayerAvailable(player) {
    if (player.nick.length == 0 || player.id.length == 0)
        return;
    //block the same player that already has in the list, 'cause him can change your id;
    listOfAvailable.push({
        player: {
            id: player.id,
            inviteStrangers: player.inviteStrangers,
            nick: player.nick,
            randomRoom: player.randomRoom
        },
        deepKey: {
            iv: Buffer.alloc(16),
            key: Buffer.alloc(32),
            tag: Buffer.alloc(0)
        }
    });
    (0, encrypt_1.default)((listOfAvailable.length - 1));
}
exports.addPlayerAvailable = addPlayerAvailable;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2xpc3RPZkF2YWlsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBc0M7QUFDdEMsTUFBTSxlQUFlLEdBQW9CLEVBQUUsQ0FBQztBQTBDaEIsMENBQWU7QUF0QjNDLFNBQVMsa0JBQWtCLENBQUUsTUFBdUI7SUFDaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU87SUFFN0Qsb0ZBQW9GO0lBRXBGLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDakIsTUFBTSxFQUFFO1lBQ0osRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2IsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlO1lBQ3ZDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7U0FDaEM7UUFDRCxPQUFPLEVBQUU7WUFDTCxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDcEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNKLENBQUMsQ0FBQTtJQUVGLElBQUEsaUJBQU8sRUFBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBRU8sZ0RBQWtCIiwiZmlsZSI6Im1vZGVsL2xpc3RPZkF2YWlsYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbmNyeXB0IGZyb20gXCIuL3Rvb2xzL2VuY3J5cHRcIjtcclxuY29uc3QgbGlzdE9mQXZhaWxhYmxlOiBBdmFpbGFibGVMaXN0W10gPSBbXTtcclxuXHJcbmludGVyZmFjZSBQbGF5ZXJBdmFpbGFibGUge1xyXG4gICAgbmljazogc3RyaW5nLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIGludml0ZVN0cmFuZ2VyczogYm9vbGVhbixcclxuICAgIHJhbmRvbVJvb206IGJvb2xlYW4sXHJcbn1cclxuXHJcbmludGVyZmFjZSBBdmFpbGFibGVMaXN0IHtcclxuICAgIHBsYXllcjogUGxheWVyQXZhaWxhYmxlLFxyXG4gICAgZGVlcEtleToge1xyXG4gICAgICAgIGl2OiBCdWZmZXIsXHJcbiAgICAgICAga2V5OiBCdWZmZXIsXHJcbiAgICAgICAgdGFnOiBCdWZmZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgcGxheWVyQXZhaWxhYmxlID0gUGxheWVyQXZhaWxhYmxlXHJcblxyXG5mdW5jdGlvbiBhZGRQbGF5ZXJBdmFpbGFibGUgKHBsYXllcjogUGxheWVyQXZhaWxhYmxlKSB7XHJcbiAgICBpZiAocGxheWVyLm5pY2subGVuZ3RoID09IDAgfHwgcGxheWVyLmlkLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgLy9ibG9jayB0aGUgc2FtZSBwbGF5ZXIgdGhhdCBhbHJlYWR5IGhhcyBpbiB0aGUgbGlzdCwgJ2NhdXNlIGhpbSBjYW4gY2hhbmdlIHlvdXIgaWQ7XHJcblxyXG4gICAgbGlzdE9mQXZhaWxhYmxlLnB1c2goe1xyXG4gICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICBpZDogcGxheWVyLmlkLFxyXG4gICAgICAgICAgICBpbnZpdGVTdHJhbmdlcnM6IHBsYXllci5pbnZpdGVTdHJhbmdlcnMsXHJcbiAgICAgICAgICAgIG5pY2s6IHBsYXllci5uaWNrLFxyXG4gICAgICAgICAgICByYW5kb21Sb29tOiBwbGF5ZXIucmFuZG9tUm9vbVxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGRlZXBLZXk6IHtcclxuICAgICAgICAgICAgaXY6IEJ1ZmZlci5hbGxvYygxNiksXHJcbiAgICAgICAgICAgIGtleTogQnVmZmVyLmFsbG9jKDMyKSxcclxuICAgICAgICAgICAgdGFnOiBCdWZmZXIuYWxsb2MoMClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGVuY3J5cHQoKGxpc3RPZkF2YWlsYWJsZS5sZW5ndGggLSAxKSlcclxufVxyXG5cclxuZXhwb3J0IHthZGRQbGF5ZXJBdmFpbGFibGUsIGxpc3RPZkF2YWlsYWJsZX0iXX0=
