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
    var arr = [];
    Snake.prototype.render = function (map) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();
        }
        arr = [];
        //渲染前将页面已有的Snake移除
        for (var i = 0, length = this.body.length; i < length; i++) {
            var div = document.createElement("div");
            map.appendChild(div);
            arr.push(div);
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
    Snake.prototype.move = function () {
        for (let i = 1; i < this.body.length; i++) {
            this.body[this.body.length - i].left = this.body[this.body.length - i - 1].left;
            this.body[this.body.length - i].top = this.body[this.body.length - i - 1].top;
        }
        switch (this.direction) {
            case "left":
                this.body[0].left--;
                break;
            case "top":
                this.body[0].top--;
                break;
            case "right":
                this.body[0].left++;
                break;
            case "bottom":
                this.body[0].top++;
                break;
            default:
                break;
        }
    }
    window.Snake = Snake;
})()