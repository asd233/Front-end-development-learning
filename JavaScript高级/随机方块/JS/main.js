var box = document.querySelector(".box");
var arr = [];
for (var i = 0; i < 10; i++) {
    var box1 = new Box(box);
    box1.random();
    arr.push(box1);
}
setInterval(function () {
    for (var i = 0; i < arr.length; i++) {
        arr[i].random();
    }
}, 500)