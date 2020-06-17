function Box(style) {
    var style = style || {};
    this.background = style.background || "red";
    this.width = style.width || "20px";
    this.height = style.height || "20px";
    this.position = style.position || "absolute";
    this.top = style.top || 0 + "px";
    this.left = style.top || 0 + "px";

}
Box.prototype.init = function (parent) {
    let div = document.createElement("div");
    for (const key in this) {
        div.style[key] = this[key];
    }
    parent.append(div);
    return div;
}
Box.prototype.random = function (node) {
    node.style.top = Tools.random(0, 580) + "px";
    node.style.left = Tools.random(0, 580) + "px";
    node.style.background = "rgb(" + Tools.random(0, 255) + "," + Tools.random(0, 255) + "," + Tools.random(0, 255) + ")";
}