// 页面滚动 顶部高度变换
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('header').css({
                "height": "50px",
                "line-height": "50px"
            },
            $('nav').css({
                "top": "50px",
                "height": "30px",
                "line-height": "30px"

            }),
            $('.headerNav li').css({
                "font-size": "14px"
            }),
            $('.headerNav li i').css({
                "margin-left": "15px"
            }),
            $('.headerNav li:nth-child(4) i').css({
                "margin-left": "30px"
            }),
            $('.headerNav li:last-child i').css({
                "margin-left": "42px"
            })
        )
    } else {
        $('header').css({
                "height": "80px",
                "line-height": "80px"
            },
            $('nav').css({
                "top": "80px",
                "height": "50px",
                "line-height": "35px"
            }),
            $('.headerNav li').css({
                "font-size": "18px"
            }),
            $('.headerNav li i').css({
                "margin-left": "-6px"
            })
        )
    }
})

// 悬浮微信
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    var chatTop = 200 + scrollTop
    $('.chat').stop().animate({
        top: chatTop
    }, 500)
}

// 轮播图
var $num = 0
$('.slider ol li').eq(0).addClass('current')
//   功能3： 鼠标经过哪个小圆点上面， 这个小圆点的背景色就是current类名已 同时大图也在跟着切换
$('.slider ol>li').on('mouseenter', function () {
    //获取当前索引
    var $index = $(this).index();
    //直接赋值给$num
    $num = $index
    //排他
    $(this).addClass('current').siblings().removeClass('current')
    $('.slider>ul li').eq($index).stop().fadeIn().siblings().stop().fadeOut()
})

//点击右箭头， 图片进行下一张的切换， 当切换到最后一张的时候， 接着从第一张开始， 下面的小圆点也在跟着在切换， 对应的背景色变红
$('.arrow-right').on('click', function () {
    //自增
    $num++;
    //判断  加限制
    if ($num > $('.slider>ul li').length) {
        $num = 0
    }
    $('.slider>ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
    // 小圆点跟着切换
    $('.slider ol li').eq($num).addClass("current").siblings().removeClass('current')
})

//点击左箭头， 图片进行上一张的切换， 当切换到第一张的时候， 接着从最后一张继续倒着切换， 下面的小圆点也在跟着切换， 对应的背景色变红
$('.arrow-left').on('click', function () {
    //自减
    $num--;
    //判断  加限制 
    if ($num < 0) {
        $num = $('.slider>ul li').length - 1
    }
    $('.slider>ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
    //下面的小圆点也在跟着切换加类名
    $('.slider ol li').eq($num).addClass("current").siblings().removeClass('current')
})
//自动轮播的效果
var timer = setInterval(function () {
    $('.arrow-right').click()
}, 5000)
// 标移动到大盒子上面， 左右的箭头就会显示出来， 鼠标离开就会隐藏
//当鼠标移动到大盒子上面的时候， 停止自动轮播， 鼠标离开， 自动轮播继续
$('.slider')
    .on('mouseenter', function () {
        // 移除定时器
        clearInterval(timer)
        // 显示
        $('.arrow').show();
    })
    .on('mouseleave', function () {
        timer = setInterval(function () {
            $('.arrow-right').click()
        }, 2000)
        // 隐藏
        $('.arrow').hide();
    })

// 最新单品 tab切换
// 给选项添加鼠标移入事件
$('.hot-item').on('mouseenter', function () {
    // 当移入哪个选项 哪个选项对应的产品列表出现
    $('.product-lists').removeClass('active')
    $('.viewAll-button').removeClass('viewAll-btnActive')
    let index = $(this).index();
    if (index == 0) {
        $('.hot-menu').animate({
                left: 100
            }, 500),
            $('.product-lists').eq(index).addClass('active')
        $('.viewAll-button').eq(index).addClass('viewAll-btnActive')
    } else if (index == 1) {
        $('.hot-menu').animate({
                left: 340
            }, 500),
            $('.product-lists').eq(index).addClass('active')
        $('.viewAll-button').eq(index).addClass('viewAll-btnActive')
    } else if (index == 2) {
        $('.hot-menu').animate({
                left: 580
            }, 500),
            $('.product-lists').eq(index).addClass('active')
        $('.viewAll-button').eq(index).addClass('viewAll-btnActive')
    } else if (index == 3) {
        $('.hot-menu').animate({
            left: 820
        }, 500), $('.product-lists').eq(index).addClass('active')
        $('.viewAll-button').eq(index).addClass('viewAll-btnActive')
    }
})
// 头部导航  
$('.headerNav li').on('mouseover', function () {
    $('.nav-content').hide();
    let i = $(this).index();
    $('.nav-content').eq(i).show()
})
