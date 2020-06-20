(function () {
    function Snake(style) {
        style = style || {};
        this.width = style.width || 25 + "px";
        this.height = style.height || 25 + "px";
        this.direction = style.direction || "right";
        this.position = style.position || "absolute"
        this.body = [
            { left: 3, top: 2, backgroundColor: "red" },
            { left: 2, top: 2, backgroundColor: "green" },
            { left: 1, top: 2, backgroundColor: "green" },
        ];
    }
    Snake.prototype.render = function (map) {
        for (var i = 0, length = this.body.length; i < length; i++) {
            var div = document.createElement("div");
            map.appendChild(div);
            for (const key in this) {
                div.style[key] = this[key];
            }
            for (const key in this.body[i]) {
                if (key != "backgroundColor") {
                    div.style[key] = this.body[i][key] * parseInt(this.width) + "px";
                } else {
                    div.style[key] = this.body[i][key];
                }
            }
        }
    }
    window.Snake = Snake;
})()