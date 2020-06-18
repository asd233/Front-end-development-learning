var parent = document.querySelector(".box");
var arr = [];
var box = new Box();

for (let i = 0; i < 10; i++) {
    let newBox = box.init(parent);
    box.random(newBox);
    arr.push(newBox);
}
setInterval(function () {
    for (let i = 0; i < arr.length; i++) {
        box.random(arr[i]);
    }
}, 500)