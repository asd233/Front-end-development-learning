$(document).ready(function () {
    var flag = [true, true, true]
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationTooltips: ['firstSlide', 'secondSlide'],
        afterLoad: function (origin, destination) {
            // 第二页动画
            if (destination.index == 1) {
                $(".computer>.word1").css({ animation: "word1 .5s ease-in-out 2.5s normal forwards" });
                $(".computer>.word2").css({ animation: "word2 .5s ease-in-out 2.5s normal forwards" });
                $(".search").css({ animation: "search 3.5s ease-in-out 1 normal forwards" });
                $(".sofaWord").css({ animation: "sofaWord 1s  1.5s ease-in-out 1 normal forwards" });
                $(".sofaImg").css({ animation: "sofaImg 1s  2.5s cubic-bezier(.4, 0, 1, 1) 1 normal forwards" });

                // 第三页动画
            } else if (destination.index == 2) {
                $(".am").css({ animation: "am 1s  0.5s ease-in-out normal forwards" });

                // 第五页动画
            } else if (destination.index == 4) {
                $(".hand").css({ animation: "handUp 1s ease-in-out normal forwards", display: "block" });
                $(".mouse").css({ animation: "mouse .5s ease-in-out 1s normal forwards" });
                $(".bill").css({ animation: "billUp .5s ease-in-out 2.5s normal forwards" });
                $(".section5 > .fp-tableCell > img:first-child").css({ animation: "sofaDown2 1s ease-in-out 1.5s normal forwards" });
                setTimeout(function () {
                    $(".section5 > .fp-tableCell > img:first-child").css({ bottom: "40%" });
                }, 2500)

                //第七页动画

            } else if (destination.index == 6) {
                $(".star").css({ animation: "star 1s cubic-bezier(.4, 0, 1, 1) .5s normal forwards" });
                $(".evaluation").css({ animation: "word2 1s cubic-bezier(.4, 0, 1, 1) 1.5s normal forwards" });
            }
        },
        onLeave: function (origin, destination, direction) {
            // 第二页至第三页过渡动画
            if (destination.index == 2 && direction == "down" && flag[0]) {
                flag[0] = false;
                $(".sofa").css({
                    display: "block",
                    animation: "sofa .75s  linear normal forwards"
                })
                setTimeout(function () {
                    $(".sofa").css({ display: "none" });
                    $(".mine img:first-child").css({ display: "block" });
                }, 745)
            }

            // 第三页至第四页过渡动画
            if (destination.index == 3 && direction == "down" && flag[1]) {
                flag[1] = false;
                $(".mine>img").attr("src", "./images/t1f.png").css({
                    display: "block",
                    animation: "sofaDown .75s linear normal forwards"
                });
                $(".car img:first-child").css({ display: "none" });

                setTimeout(function () {
                    $(".mine>img").css({ display: "none" });
                    $(".car img:first-child").css({ display: "block" });
                }, 750)

                $(".car").css({ animation: "car 1s linear .75s normal forwards" })
                $(".section4>.fp-tableCell>.word1").css({ animation: "word1 .5s linear 1.75s normal forwards" });
                $(".section4>.fp-tableCell>.word2").css({ animation: "word2 .5s linear 1.75s normal forwards" });
                $(".address").css({ animation: "am 1s linear 1.75s normal forwards" })
                $(".address > img").css({ animation: "am 1s ease-in-out 2s normal forwards" })
            }

            //第五页至第六页过渡动画
            if (destination.index == 5 && direction == "down" && flag[2]) {
                $(".section5 > .fp-tableCell > img:first-child").css({ animation: "sofaDown3 .975s ease-in-out  normal forwards" });
                $(".box").css({ animation: "box 3s ease-in-out normal forwards" });
                setTimeout(function () {
                    $(".section5 > .fp-tableCell > img:first-child").css({ display: "none" });
                }, 1000)
                $(".section6").css({ animation: "truck 2s ease-in-out 3s normal forwards" });
                $(".section6> .fp-tableCell>.word1").css({ animation: "word1 .5s ease-in-out 4s normal forwards" });
                $(".section6> .fp-tableCell>.word2").css({ animation: "word2 .5s ease-in-out 4s normal forwards" });
                $(".section6 img:nth-child(5) ").css({ animation: "worker 2s ease-in-out 4s normal forwards" });
                $(".section6 img:last-child").css({ animation: "customer 1s ease-in-out 4.25s normal forwards" });

            }
        }
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});