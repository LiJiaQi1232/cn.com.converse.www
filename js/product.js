// 放大镜
$(function () {
    var ione = $(".one"),
        ithe = $(".the"),
        itwo = $(".two img"),
        tthe = $(".the img");
    tspan = $(".one span")

    var arr = ["./upload/hat-product-center-01.png", "./upload/hat-product-center-02.png", "./upload/hat-product-center-03.png", "./upload/hat-product-center-04.png"];
    var oarr = ["./upload/hat-product-big-01.png", "./upload/hat-product-big-02.png", "./upload/hat-product-big-03.png", "./upload/hat-product-big-04.png"];
    itwo.each(function (i) {
        $(this).click(function () {
            $(".one img").attr("src", arr[i])
            tthe.attr("src", oarr[i])
            itwo.removeClass("active")
            $(this).addClass("active")
        })

        ione.mousemove(function (a) {
            var evt = a || window.event
            // ithe.css('display', 'block')
            ithe.css('display', 'none')
            var ot = evt.clientY - ($(".one").offset().top - $(document).scrollTop()) - 87;
            var ol = evt.clientX - ($(".one").offset().left - $(document).scrollLeft()) - 87;
            if (ol <= 0) {
                ol = 0;
            }
            if (ot <= 0) {
                ot = 0;
            }
            if (ol >= 175) {
                ol = 175
            }
            if (ot >= 175) {
                ot = 175
            }
            $("span").css({
                'left': ol,
                'top': ot
            })
            var ott = ot / 350 * 800
            var oll = ol / 350 * 800
            tthe.css({
                'left': -oll,
                'top': -ott
            })
        })
        // 当鼠标移入大图片时  遮盖层和大图都显示
        ione.mousemove(function () {
            tspan.css({
                    "display": "block",
                }),
                tthe.css({
                    "display": "block",
                })
        })
        // 当鼠标移入出大图片时  遮盖层和大图都隐藏
        ione.mouseout(function () {
            tspan.css({
                    "display": "none",
                }),
                tthe.css({
                    "display": "none",
                })
        })
        ione.mouseover(function () {
            //   获取鼠标坐标
            let x = e.pageX - this.offset().Left;
            let y = e.pageY - this.offset().Top;

            let spanX = x - (tspan.offset().left / 2)
            let spanY = y = (tspan.offset().top / 2)
        })

    })
})