(function () {
    function Snake(style) {
        style = style || {};
        this.width = style.width || 25;
        this.height = style.height || 25;
        this.direction = style.direction || "right";
        this.body = [
            { x: 3, y: 2, color: "red" },
            { x: 2, y: 2, color: "green" },
            { x: 1, y: 2, color: "green" },
        ];
    }
    Snake.prototype.render = function (map) {
        for (var i = 0, length = this.body.length; i < length; i++) {
            var div = document.createElement("div");
            map.appendChild(div);
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.top = this.body[i].y * this.height + "px";
            div.style.left = this.body[i].x * this.width + "px";
            div.style.backgroundColor = this.body[i].color;
        }
    }
    window.Snake = Snake;
})()