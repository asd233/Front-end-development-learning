function my$(id) {
    return document.getElementById(id);
}

//用于处理scrollLeft/Top的兼容性函数
function getscroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return scrollLeft;
    return scrollTop;
}