// 设置一个开关 用于 看一下是否是展开状态  true 未展开 flase展开
let flag = true
// 当点击左侧筛选中任意一项时 下面的选项显示出来
$('.minus dt').on('click', function () {
    if (flag) {
        flag = false;
        // 排他先让所有的minus高度一致
        $('.minus').css({
            "height": "25px"
        })
        $(this).css("background-image", "url('../images/minus.png')")
        // 当点击的为系列时
        if ($(this).parent().hasClass('series')) {
            $(this).parent().animate({
                "height": "76px"
            }, 500)
        }
        // 当点击的为季节时
        if ($(this).parent().hasClass('season')) {
            $(this).parent().animate({
                "height": "156px"
            }, 500)
        }

        // 当点击的为性别时
        if ($(this).parent().hasClass('sex')) {
            $(this).parent().animate({
                "height": "76px"
            }, 500)
        }
        // 当点击的为分类时
        if ($(this).parent().hasClass('sort')) {
            $(this).parent().animate({
                "height": "196px"
            }, 500)
        }
        // 当点击的为价格时
        if ($(this).parent().hasClass('price')) {
            $(this).parent().animate({
                "height": "156px"
            }, 500)
        }
    } else if (flag == false) {
        flag = true;
        $('.minus').animate({
                "height": "25px"
            }, 500),
            $(this).css("background-image", "url('../images/plus.png')")
    }
})

// 设置开关  用来设置某个小选项是否为选中状态  true 未选中 flase选中
$('.minus dd').on('click', function () {
        $(this).parent().css({
                "display": "none"
            }),
            $('.selected-lists').css({
                "height": "$('.selected-lists').height+71px"
            })
        $('.selected-lists').append(`
            <li class="selected-list">
            <h4>${$(this).siblings('dt').html()}</h4>
            <div class="list-cont">
            ${$(this).html()}
            </div>
        </li>
            `),
            $('.reselect').css({
                "display":"block"
            }),
            $(".selected").css({
            "padding-bottom":"0px"
            })
})