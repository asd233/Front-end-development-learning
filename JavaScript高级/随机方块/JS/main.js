var box = document.querySelector(".box");
var arr = [];
for (let i = 0; i < 10; i++) {
    let box1 = new Box();
    let newBox = box1.init(box);
    box1.random(newBox);
    arr.push(newBox);
}
setInterval(function () {
    let box1 = new Box();
    for (let i = 0; i < arr.length; i++) {
        box1.random(arr[i]);
    }
}, 500)