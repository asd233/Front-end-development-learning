(function () {
    var arr = [];
    function Food(style) {
        style = style || {};
        this.width = style.width || 25 + "px";
        this.height = style.width || 25 + "px";
        this.left = Tools.random(0, map.offsetWidth / parseInt(this.width) - 1) * parseInt(this.width) + "px";
        this.top = Tools.random(0, map.offsetHeight / parseInt(this.height) - 1) * parseInt(this.height) + "px";
        this.backgroundColor = style.backgroundColor || "#00ff00";
        this.position = style.position || "absolute"
    }

    Food.prototype.render = function (map) {
        //此方法将Food渲染到页面上
        if (arr.length !== 0) {
            arr[0].remove();
            arr.splice(0, 1);
        }
        //渲染前将页面已有的Food移除
        var div = document.createElement("div");
        arr.push(div);
        this.left = Tools.random(0, map.offsetWidth / parseInt(this.width) - 1) * parseInt(this.width) + "px";
        this.top = Tools.random(0, map.offsetHeight / parseInt(this.height) - 1) * parseInt(this.height) + "px";
        for (const key in this) {
            div.style[key] = this[key];
        }
        div.setAttribute("id", "food");
        map.appendChild(div);
    }
    window.Food = Food;
    //将Food对象挂在window对象下使的外部可以访问Food对象
})()