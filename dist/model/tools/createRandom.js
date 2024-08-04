"use strict";
// iv need has 16 in bytes 
//key need has 32 in bytes
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandom = void 0;
function createRandom(size) {
    let random = "";
    const allCaracter = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "!@#$%¨&*()_+-`[{}]/;.,{}?°",
        "abcdefghijklmnopqrstuvwxyz"
    ];
    for (let count = 0; count < size; count++) {
        const index = Math.round(Math.random() * 2);
        const randomAlphabetOrSymbols = allCaracter[index];
        const indexCaracters = Math.round(Math.random() * randomAlphabetOrSymbols.length);
        const randomCaracter = randomAlphabetOrSymbols[indexCaracters];
        random += randomCaracter;
    }
    return random;
}
exports.createRandom = createRandom;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Rvb2xzL2NyZWF0ZVJhbmRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkJBQTJCO0FBQzNCLDBCQUEwQjs7O0FBRTFCLFNBQVMsWUFBWSxDQUFFLElBQVk7SUFDL0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2YsTUFBTSxXQUFXLEdBQUc7UUFDaEIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7S0FDL0IsQ0FBQTtJQUVELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDM0MsTUFBTSx1QkFBdUIsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakYsTUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUE7UUFFOUQsTUFBTSxJQUFJLGNBQWMsQ0FBQztLQUM1QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFTyxvQ0FBWSIsImZpbGUiOiJtb2RlbC90b29scy9jcmVhdGVSYW5kb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpdiBuZWVkIGhhcyAxNiBpbiBieXRlcyBcclxuLy9rZXkgbmVlZCBoYXMgMzIgaW4gYnl0ZXNcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbSAoc2l6ZTogbnVtYmVyKTpzdHJpbmcge1xyXG4gICAgbGV0IHJhbmRvbSA9IFwiXCJcclxuICAgIGNvbnN0IGFsbENhcmFjdGVyID0gW1xyXG4gICAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIixcclxuICAgICAgICBcIiFAIyQlwqgmKigpXystYFt7fV0vOy4se30/wrBcIixcclxuICAgICAgICBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCJcclxuICAgIF1cclxuXHJcbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgc2l6ZTsgY291bnQrKykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMilcclxuICAgICAgICBjb25zdCByYW5kb21BbHBoYWJldE9yU3ltYm9scyA9IGFsbENhcmFjdGVyW2luZGV4XVxyXG4gICAgICAgIGNvbnN0IGluZGV4Q2FyYWN0ZXJzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmFuZG9tQWxwaGFiZXRPclN5bWJvbHMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNhcmFjdGVyID0gcmFuZG9tQWxwaGFiZXRPclN5bWJvbHNbaW5kZXhDYXJhY3RlcnNdXHJcblxyXG4gICAgICAgIHJhbmRvbSArPSByYW5kb21DYXJhY3RlcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmFuZG9tO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVJhbmRvbX0iXX0=
