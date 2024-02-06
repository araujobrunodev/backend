"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
function default_1(manager) {
    const path = (0, path_1.resolve)(__dirname);
    fs_1.default.readdir(path, { encoding: "utf-8" }, (error, files) => {
        if (error) {
            console.error(error);
            process.exit(1);
        }
        files.forEach((name) => {
            var _a;
            if (/index\.[ts|js]/i.test(name))
                return;
            (_a = (0, path_1.resolve)(__dirname, name), Promise.resolve().then(() => __importStar(require(_a)))).then(controller => controller.default(manager))
                .catch((e) => {
                console.error(e);
                process.exit(1);
            });
        });
    });
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBbUI7QUFDbkIsK0JBQThCO0FBSTlCLG1CQUF5QixPQUFnQjtJQUN2QyxNQUFNLElBQUksR0FBRyxJQUFBLGNBQU8sRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUMvQixZQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN2RCxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7WUFDckIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFFekMsTUFBTyxJQUFBLGNBQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLDJEQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFwQkQsNEJBb0JDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXHJcblxyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFuYWdlcjogTWFuYWdlcikge1xyXG4gIGNvbnN0IHBhdGggPSByZXNvbHZlKF9fZGlybmFtZSlcclxuICBmcy5yZWFkZGlyKHBhdGgsIHsgZW5jb2Rpbmc6IFwidXRmLThcIiB9LCAoZXJyb3IsIGZpbGVzKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlcy5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIGlmICgvaW5kZXhcXC5bdHN8anNdL2kudGVzdChuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgaW1wb3J0KHJlc29sdmUoX19kaXJuYW1lLCBuYW1lKSlcclxuICAgICAgICAudGhlbihjb250cm9sbGVyID0+IGNvbnRyb2xsZXIuZGVmYXVsdChtYW5hZ2VyKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gIH0pXHJcbn0iXX0=
