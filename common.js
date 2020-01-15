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

//处理pageX/Y兼容性的方法
// pageX/Y = clientX/Y + 页面滚动的距离(document.body.scrollLeft/scrollTop)
function getpage(e) {
    var e = e || window.event;
    var pageX = e.pageX || e.clientX + getscroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getscroll().scrollTop;
    return {
        pageX: pageX,
        pageY: pageY
    }
}