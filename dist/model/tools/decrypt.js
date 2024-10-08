"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const listOfAvailable_1 = require("../listOfAvailable");
function decrypt(index) {
    const player = listOfAvailable_1.listOfAvailable[index];
    const cipher = crypto_1.default.createDecipheriv("aes-256-gcm", player.deepKey.key, player.deepKey.iv);
    cipher.setAuthTag(player.deepKey.tag);
    let ciphered = cipher.update(player.player.id, "hex", "utf-8");
    ciphered += cipher.final("utf-8");
    return ciphered;
}
exports.default = decrypt;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL2RlY3J5cHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBMkI7QUFDM0Isd0RBQXFEO0FBRXJELFNBQVMsT0FBTyxDQUFFLEtBQWE7SUFDM0IsTUFBTSxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVyQyxNQUFNLE1BQU0sR0FBRyxnQkFBTSxDQUFDLGdCQUFnQixDQUNsQyxhQUFhLEVBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNwQixDQUFDO0lBRUYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRXJDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELFFBQVEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRWpDLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxrQkFBZSxPQUFPLENBQUEiLCJmaWxlIjoibW9kZWwvdG9vbHMvZGVjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiXHJcbmltcG9ydCB7IGxpc3RPZkF2YWlsYWJsZSB9IGZyb20gXCIuLi9saXN0T2ZBdmFpbGFibGVcIjtcclxuXHJcbmZ1bmN0aW9uIGRlY3J5cHQgKGluZGV4OiBudW1iZXIpOnN0cmluZyB7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSBsaXN0T2ZBdmFpbGFibGVbaW5kZXhdXHJcblxyXG4gICAgY29uc3QgY2lwaGVyID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoXHJcbiAgICAgICAgXCJhZXMtMjU2LWdjbVwiLCBcclxuICAgICAgICBwbGF5ZXIuZGVlcEtleS5rZXksXHJcbiAgICAgICAgcGxheWVyLmRlZXBLZXkuaXZcclxuICAgICk7XHJcblxyXG4gICAgY2lwaGVyLnNldEF1dGhUYWcocGxheWVyLmRlZXBLZXkudGFnKVxyXG4gICAgXHJcbiAgICBsZXQgY2lwaGVyZWQgPSBjaXBoZXIudXBkYXRlKHBsYXllci5wbGF5ZXIuaWQsXCJoZXhcIixcInV0Zi04XCIpO1xyXG4gICAgY2lwaGVyZWQgKz0gY2lwaGVyLmZpbmFsKFwidXRmLThcIilcclxuICAgIFxyXG4gICAgcmV0dXJuIGNpcGhlcmVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWNyeXB0Il19
