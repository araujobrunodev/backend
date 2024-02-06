"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const ws_1 = __importDefault(require("ws"));
const node_static_1 = require("node-static");
const manager_1 = __importDefault(require("./manager"));
const controllers_1 = __importDefault(require("./controllers"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const bucket = new node_static_1.Server("./public", { indexFile: "index.html" });
const server = http_1.default.createServer((request, response) => {
    request.on("end", () => {
        bucket.serve(request, response);
    }).resume();
});
const websocket = new ws_1.default.WebSocketServer({ server });
(0, controllers_1.default)(new manager_1.default(websocket));
server.listen(PORT, () => {
    console.log(`Server up on localhost:${PORT}`);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF1QjtBQUN2Qiw0Q0FBbUI7QUFDbkIsNkNBQW1EO0FBRW5ELHdEQUFnQztBQUNoQyxnRUFBdUM7QUFFdkMsTUFBTSxJQUFJLEdBQUcsTUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksbUNBQUksSUFBSSxDQUFBO0FBRXJDLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQTtBQUN2RSxNQUFNLE1BQU0sR0FBRyxjQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO0lBQ3JELE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNqQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUdwRCxJQUFBLHFCQUFXLEVBQUMsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7QUFFbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tIFwiaHR0cFwiXHJcbmltcG9ydCB3cyBmcm9tIFwid3NcIlxyXG5pbXBvcnQgeyBTZXJ2ZXIgYXMgQnVja2V0RmlsZXMgfSBmcm9tIFwibm9kZS1zdGF0aWNcIlxyXG5cclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlclwiO1xyXG5pbXBvcnQgY29udHJvbGxlcnMgZnJvbSBcIi4vY29udHJvbGxlcnNcIlxyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgPz8gMzAwMFxyXG5cclxuY29uc3QgYnVja2V0ID0gbmV3IEJ1Y2tldEZpbGVzKFwiLi9wdWJsaWNcIiwgeyBpbmRleEZpbGU6IFwiaW5kZXguaHRtbFwiIH0pXHJcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gIHJlcXVlc3Qub24oXCJlbmRcIiwgKCkgPT4ge1xyXG4gICAgYnVja2V0LnNlcnZlKHJlcXVlc3QsIHJlc3BvbnNlKVxyXG4gIH0pLnJlc3VtZSgpXHJcbn0pO1xyXG5jb25zdCB3ZWJzb2NrZXQgPSBuZXcgd3MuV2ViU29ja2V0U2VydmVyKHsgc2VydmVyIH0pXHJcblxyXG5cclxuY29udHJvbGxlcnMobmV3IE1hbmFnZXIod2Vic29ja2V0KSlcclxuXHJcbnNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgdXAgb24gbG9jYWxob3N0OiR7UE9SVH1gKVxyXG59KVxyXG4iXX0=
