"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (manager) => {
    manager.on("MARKED", (context, msg) => {
        context.send("MARKED", {
            collumn: msg.collumn,
            position: msg.position,
            mark: msg.mark
        }, msg.opponent_uuid);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21hcmtlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlLENBQUMsT0FBZSxFQUFFLEVBQUU7SUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUU7UUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDbEIsT0FBTyxFQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQ25CLFFBQVEsRUFBQyxHQUFHLENBQUMsUUFBUTtZQUNyQixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7U0FDaEIsRUFBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvbWFya2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYW5hZ2VyOk1hbmFnZXIpID0+IHtcclxuICAgIG1hbmFnZXIub24oXCJNQVJLRURcIiwoY29udGV4dCxtc2cpID0+IHtcclxuICAgICAgICBjb250ZXh0LnNlbmQoXCJNQVJLRURcIix7XHJcbiAgICAgICAgICAgIGNvbGx1bW46bXNnLmNvbGx1bW4sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOm1zZy5wb3NpdGlvbixcclxuICAgICAgICAgICAgbWFyazptc2cubWFya1xyXG4gICAgICAgIH0sbXNnLm9wcG9uZW50X3V1aWQpXHJcbiAgICB9KVxyXG59Il19
