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
    listOfAvailable.push({
        player: {
            id: player.id,
            inviteStrangers: player.inviteStrangers,
            nick: player.nick,
            randomRoom: player.randomRoom
        },
        deepKey: {
            iv: Buffer.alloc(16),
            key: Buffer.alloc(32)
        }
    });
    (0, encrypt_1.default)((listOfAvailable.length - 1));
}
exports.addPlayerAvailable = addPlayerAvailable;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2xpc3RPZkF2YWlsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBc0M7QUFDdEMsTUFBTSxlQUFlLEdBQW9CLEVBQUUsQ0FBQztBQW9DaEIsMENBQWU7QUFuQjNDLFNBQVMsa0JBQWtCLENBQUUsTUFBdUI7SUFDaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU87SUFFN0QsZUFBZSxDQUFDLElBQUksQ0FBQztRQUNqQixNQUFNLEVBQUU7WUFDSixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7WUFDdkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtTQUNoQztRQUNELE9BQU8sRUFBRTtZQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNwQixHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDeEI7S0FDSixDQUFDLENBQUE7SUFFRixJQUFBLGlCQUFPLEVBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUVPLGdEQUFrQiIsImZpbGUiOiJtb2RlbC9saXN0T2ZBdmFpbGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW5jcnlwdCBmcm9tIFwiLi90b29scy9lbmNyeXB0XCI7XHJcbmNvbnN0IGxpc3RPZkF2YWlsYWJsZTogQXZhaWxhYmxlTGlzdFtdID0gW107XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyQXZhaWxhYmxlIHtcclxuICAgIG5pY2s6IHN0cmluZyxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBpbnZpdGVTdHJhbmdlcnM6IGJvb2xlYW4sXHJcbiAgICByYW5kb21Sb29tOiBib29sZWFuLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQXZhaWxhYmxlTGlzdCB7XHJcbiAgICBwbGF5ZXI6IFBsYXllckF2YWlsYWJsZSxcclxuICAgIGRlZXBLZXk6IHtcclxuICAgICAgICBpdjogQnVmZmVyLFxyXG4gICAgICAgIGtleTogQnVmZmVyXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBsYXllckF2YWlsYWJsZSAocGxheWVyOiBQbGF5ZXJBdmFpbGFibGUpIHtcclxuICAgIGlmIChwbGF5ZXIubmljay5sZW5ndGggPT0gMCB8fCBwbGF5ZXIuaWQubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICBsaXN0T2ZBdmFpbGFibGUucHVzaCh7XHJcbiAgICAgICAgcGxheWVyOiB7XHJcbiAgICAgICAgICAgIGlkOiBwbGF5ZXIuaWQsXHJcbiAgICAgICAgICAgIGludml0ZVN0cmFuZ2VyczogcGxheWVyLmludml0ZVN0cmFuZ2VycyxcclxuICAgICAgICAgICAgbmljazogcGxheWVyLm5pY2ssXHJcbiAgICAgICAgICAgIHJhbmRvbVJvb206IHBsYXllci5yYW5kb21Sb29tXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZGVlcEtleToge1xyXG4gICAgICAgICAgICBpdjogQnVmZmVyLmFsbG9jKDE2KSxcclxuICAgICAgICAgICAga2V5OiBCdWZmZXIuYWxsb2MoMzIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBlbmNyeXB0KChsaXN0T2ZBdmFpbGFibGUubGVuZ3RoIC0gMSkpXHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkUGxheWVyQXZhaWxhYmxlLCBsaXN0T2ZBdmFpbGFibGV9Il19
