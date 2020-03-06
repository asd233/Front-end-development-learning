function Box(parent, style) {
    style = style || {}
    this.div = document.createElement("div");
    this.div.style.width = style.width || "30px";
    this.div.style.height = style.height || "30px";
    this.div.style.backgroundColor = style.backgroundColor || "red";
    this.div.style.top = (style.top || "0") + "px";
    this.div.style.left = (style.left || "0") + "px";
    this.div.style.position = style.position || "absolute";
    parent.appendChild(this.div);
}
Box.prototype.random = function () {
    this.div.style.top = Tools.random(0, 20) * 30 + "px",
        this.div.style.left = Tools.random(0, 20) * 30 + "px",
        this.div.style.backgroundColor = "rgb(" + Tools.random(0, 255) + "," + Tools.random(0, 255) + "," + Tools.random(0, 255) + ")"
}