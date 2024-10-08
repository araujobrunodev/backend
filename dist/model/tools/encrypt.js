"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const createRandom_1 = require("./createRandom");
const listOfAvailable_1 = require("../listOfAvailable");
function encrypt(index) {
    const player = listOfAvailable_1.listOfAvailable[index];
    player.deepKey.iv = Buffer.alloc(16, (0, createRandom_1.createRandom)(16), "utf-8");
    player.deepKey.key = Buffer.alloc(32, (0, createRandom_1.createRandom)(32), "utf-8");
    const cipher = crypto_1.default.createCipheriv("aes-256-gcm", player.deepKey.key, player.deepKey.iv);
    let ciphered = cipher.update(player.player.id, "utf-8", "hex");
    ciphered += cipher.final("hex");
    player.deepKey.tag = cipher.getAuthTag();
    player.player.id = ciphered;
}
exports.default = encrypt;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL2VuY3J5cHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBMkI7QUFDM0IsaURBQThDO0FBQzlDLHdEQUFxRDtBQUVyRCxTQUFTLE9BQU8sQ0FBRSxLQUFhO0lBQzNCLE1BQU0sTUFBTSxHQUFHLGlDQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBQSwyQkFBWSxFQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQy9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUEsMkJBQVksRUFBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUVoRSxNQUFNLE1BQU0sR0FBRyxnQkFBTSxDQUFDLGNBQWMsQ0FDaEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDcEIsQ0FBQztJQUVGLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELFFBQVEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7QUFDaEMsQ0FBQztBQUVELGtCQUFlLE9BQU8sQ0FBQSIsImZpbGUiOiJtb2RlbC90b29scy9lbmNyeXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCJcclxuaW1wb3J0IHsgY3JlYXRlUmFuZG9tIH0gZnJvbSBcIi4vY3JlYXRlUmFuZG9tXCI7XHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9saXN0T2ZBdmFpbGFibGVcIjtcclxuXHJcbmZ1bmN0aW9uIGVuY3J5cHQgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHBsYXllciA9IGxpc3RPZkF2YWlsYWJsZVtpbmRleF1cclxuXHJcbiAgICBwbGF5ZXIuZGVlcEtleS5pdiA9IEJ1ZmZlci5hbGxvYygxNiwgY3JlYXRlUmFuZG9tKDE2KSwgXCJ1dGYtOFwiKVxyXG4gICAgcGxheWVyLmRlZXBLZXkua2V5ID0gQnVmZmVyLmFsbG9jKDMyLCBjcmVhdGVSYW5kb20oMzIpLCBcInV0Zi04XCIpXHJcblxyXG4gICAgY29uc3QgY2lwaGVyID0gY3J5cHRvLmNyZWF0ZUNpcGhlcml2KFxyXG4gICAgICAgIFwiYWVzLTI1Ni1nY21cIiwgXHJcbiAgICAgICAgcGxheWVyLmRlZXBLZXkua2V5LFxyXG4gICAgICAgIHBsYXllci5kZWVwS2V5Lml2XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBsZXQgY2lwaGVyZWQgPSBjaXBoZXIudXBkYXRlKHBsYXllci5wbGF5ZXIuaWQsXCJ1dGYtOFwiLFwiaGV4XCIpO1xyXG4gICAgY2lwaGVyZWQgKz0gY2lwaGVyLmZpbmFsKFwiaGV4XCIpXHJcbiAgICBcclxuICAgIHBsYXllci5kZWVwS2V5LnRhZyA9IGNpcGhlci5nZXRBdXRoVGFnKClcclxuICAgIHBsYXllci5wbGF5ZXIuaWQgPSBjaXBoZXJlZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW5jcnlwdCJdfQ==
