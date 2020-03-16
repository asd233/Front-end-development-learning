(function () {
    var arr = [];
    function Food(style) {
        style = style || {};
        this.width = style.width || 25;
        this.height = style.width || 25;
        this.x = style.x || Tools.random(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = style.y || Tools.random(0, map.offsetHeight / this.height - 1) * this.height;
        this.color = style.color || "green";
    }

    Food.prototype.render = function (map) {
        //此方法将Food渲染到页面上
        remove();
        //渲染前将页面已有的Food移除
        var div = document.createElement("div");
        arr.push(div);
        map.appendChild(div);
        this.x = Tools.random(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.random(0, map.offsetHeight / this.height - 1) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        div.style.position = "absolute";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.setAttribute("id", "food");
    }

    function remove() {
        if (arr.length !== 0) {
            arr[0].remove();
            arr.splice(0, 1);
        }
    }
    window.Food = Food;
    //将Food对象挂在window对象下使的外部可以访问Food对象
})()