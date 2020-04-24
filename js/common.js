// 页面滚动时
$(window).on('scroll', function () {
    // 当页面卷曲的高度大于200时 header 和nav的高度进行变化
    if ($(window).scrollTop() >= 200) {
        // header高度变化
        $('header').css({
                "height": "50px",
                "line-height": "50px"
            }),
            // nav高度变化
            $('nav').css({
                "top": "50px",
                "height": "30px",
                "line-height": "30px"
            }),
            // 导航条变化
            littleNav()
        // 页面滚动 并且鼠标移入.nav的li中时
        $('.headerNav li').on('mouseover', function () {
            // 排他
            $('.nav-content').hide()
            let i = $(this).index()
            if (i < 1 || i == 1) {
                // 让导航大盒子变化
                $('nav').css({
                        "height": "292px"
                    }),
                    littleNav(),
                    $(".body-mask").css({
                        "display": "block"
                    })
                $('.nav-content').eq(i).show()
            } else if (i == 2) {
                // 让导航大盒子变化
                $('nav').css({
                        "height": "160px"
                    }),
                    // 导航条变化
                    littleNav(),
                    $('.nav-content').eq(i).show(),
                    $(".body-mask").css({
                        "display": "block"
                    })
            }
        })
        $('nav').on('mouseleave', function () {
            $('nav').css({
                    "height": "30px",
                    "line-height": "30px"
                }),
                littleNav()
        })
    } else if ($(window).scrollTop() < 200) {
        $('header').css({
                "height": "80px",
                "line-height": "80px"
            }),
            // nav高度变化
            $('nav').css({
                "top": "80px",
                "height": "50px",
                "line-height": "35px"
            }),
            bigNav()
        // 当页面滚动时  卷曲的高度不超过两百 导航的显示与隐藏
        $('.headerNav li').on('mouseover', function () {
            // 排他
            $('.nav-content').hide()
            let i = $(this).index()
            if (i < 1 || i == 1) {
                // 让导航大盒子变化
                $('nav').css({
                        "height": "312px"
                    }),
                    bigNav(),
                    $('.nav-content').eq(i).show(),
                    $(".body-mask").css({
                        "display": "block"
                    })
            } else if (i == 2) {
                $('nav').css({
                        "height": "180px"
                    }),
                    bigNav(),
                    $('.nav-content').eq(i).show(),
                    $('body-mask').css({
                        "display": 'block'
                    })
            }
        })
        $("nav").on("mouseleave", function () {
            $('.nav-content').hide(),
                $("nav").css({
                    "height": "50px",
                    "line-height": "35px"
                }),
                $(".body-mask").css({
                    "display": "none"
                }),
                bigNav()
        })
    }
})


// 当页面不滚动时 ，导航的显示与隐藏
$('.headerNav li').on('mouseover', function () {
    // 排他
    $('.nav-content').hide()
    let i = $(this).index()
    if (i < 1 || i == 1) {
        // 让导航大盒子变化
        $('nav').css({
                "height": "312px"
            }),
            bigNav(),
            $('.nav-content').eq(i).show(),
            $(".body-mask").css({
                "display": "block"
            })
    } else if (i == 2) {
        $('nav').css({
                "height": "180px"
            }),
            bigNav(),
            $('.nav-content').eq(i).show(),
            $('body-mask').css({
                "display": 'block'
            })
    }
})
$("nav").on("mouseleave", function () {
    $('.nav-content').hide(),
        $("nav").css({
            "height": "50px",
            "line-height": "35px"
        }),
        $(".body-mask").css({
            "display": "none"
        }),
        bigNav()
})

function littleNav() {
    $('.nav').css({
            "height": "30px",
            "line-height": "30px"
        }),
        // 小三角的定位发生变化
        $('.headerNav li i').css({
            "left": "90px"
        }),
        $('.headerNav li:nth-child(4) i').css({
            "left": "108px"
        }),
        $('.headerNav li:last-child i').css({
            "left": "125px"
        }),
        // 内容定位
        $('.nav-content').css({
            "top": "30px"
        })
}

function bigNav() {
    $('.nav').css({
            "height": "50px",
            "line-height": "35px"
        }),
        $('.headerNav li i').css({
            'left': "60px",
            "bottom": "5px"
        }),
        $('.nav-content').css({
            "top": "50px"
        })
}

// 悬浮微信
$(window).on("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;
    var chatTop = 200 + scrollTop
    $('.chat').stop().animate({
        top: chatTop
    }, 500)
})