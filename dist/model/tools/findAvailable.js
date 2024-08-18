"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listOfAvailable_1 = require("../listOfAvailable");
const decrypt_1 = __importDefault(require("./decrypt"));
const findAvailable = (uuid, all) => {
    let result = {};
    listOfAvailable_1.listOfAvailable.forEach((available, index) => {
        // uuid decrypted
        if ((0, decrypt_1.default)(index) == uuid) {
            return result = (all ? available.player : available.player.id);
        }
        // uuid encrypted
        if (available.player.id == uuid) {
            return result = (all ? available.player : (0, decrypt_1.default)(index));
        }
    });
    return result;
};
exports.default = findAvailable;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL2ZpbmRBdmFpbGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBc0U7QUFDdEUsd0RBQWdDO0FBRWhDLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBVyxFQUFFLEdBQVcsRUFBRSxFQUFFO0lBQy9DLElBQUksTUFBTSxHQUFHLEVBQThCLENBQUE7SUFFM0MsaUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUU7UUFDeEMsaUJBQWlCO1FBQ2pCLElBQUksSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN4QixPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUNqRTtRQUVELGlCQUFpQjtRQUNqQixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUM3QixPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDNUQ7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sTUFBTSxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsImZpbGUiOiJtb2RlbC90b29scy9maW5kQXZhaWxhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdE9mQXZhaWxhYmxlLCBwbGF5ZXJBdmFpbGFibGUgfSBmcm9tIFwiLi4vbGlzdE9mQXZhaWxhYmxlXCI7XHJcbmltcG9ydCBkZWNyeXB0IGZyb20gXCIuL2RlY3J5cHRcIjtcclxuXHJcbmNvbnN0IGZpbmRBdmFpbGFibGUgPSAodXVpZDpzdHJpbmcsIGFsbDpib29sZWFuKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0ge30gYXMgcGxheWVyQXZhaWxhYmxlIHwgc3RyaW5nXHJcblxyXG4gICAgbGlzdE9mQXZhaWxhYmxlLmZvckVhY2goKGF2YWlsYWJsZSxpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIHV1aWQgZGVjcnlwdGVkXHJcbiAgICAgICAgaWYgKGRlY3J5cHQoaW5kZXgpID09IHV1aWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IChhbGwgPyBhdmFpbGFibGUucGxheWVyIDogYXZhaWxhYmxlLnBsYXllci5pZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHV1aWQgZW5jcnlwdGVkXHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZS5wbGF5ZXIuaWQgPT0gdXVpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gKGFsbCA/IGF2YWlsYWJsZS5wbGF5ZXIgOiBkZWNyeXB0KGluZGV4KSlcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbmRBdmFpbGFibGUiXX0=
