// 设置一个开关 用于 看一下是否是展开状态  true 未展开 flase展开
let flag = true
// 当点击左侧筛选中任意一项时 下面的选项显示出来
$('.minus dt').on('click', function () {
    if (flag) {
        flag = false;
        // 当点击的为系列时
        if ($(this).parent().hasClass('series')) {
            // 排他先让所有的minus高度一致 背景图片为加号
            $('.minus').css({
                    "height": "25px"
                }),
                $('.minus dt').css({
                    "background-image": "url(../images/plus.png)"
                }),
                $(this).parent().animate({
                    "height": "76px"
                }, 500),
                $(this).css("background-image", "url('../images/minus.png')")
        }
        // 当点击的为季节时
        if ($(this).parent().hasClass('season')) {
            $('.minus').css({
                    "height": "25px"
                }),
                $('dt').css({
                    "background-image": "url(../images/plus.png)"
                }),
                $(this).parent().animate({
                    "height": "156px"
                }, 500),
                $(this).css("background-image", "url('../images/minus.png')")
        }

        // 当点击的为性别时
        if ($(this).parent().hasClass('sex')) {
            $('.minus').css({
                    "height": "25px"
                }),
                $('.minus dt').css({
                    "background-image": "url(../images/plus.png)"
                }),
                $(this).parent().animate({
                    "height": "76px"
                }, 500),
                $(this).css("background-image", "url('../images/minus.png')")
        }
        // 当点击的为分类时
        if ($(this).parent().hasClass('sort')) {
            $('.minus').css({
                    "height": "25px"
                }),
                $('.minus dt').css({
                    "background-image": "url(../images/plus.png)"
                }),
                $(this).parent().animate({
                    "height": "196px"
                }, 500),
                $(this).css("background-image", "url('../images/minus.png')")
        }
        // 当点击的为价格时
        if ($(this).parent().hasClass('price')) {
            $('.minus').css({
                    "height": "25px"
                }),
                $('.minus dt').css({
                    "background-image": "url(../images/plus.png)"
                }),
                $(this).parent().animate({
                    "height": "156px"
                }, 500),
                $(this).css("background-image", "url('../images/minus.png')")
        }
    } else if (flag == false) {
        flag = true;
        $('.minus').animate({
                "height": "25px"
            }, 500),
            $(this).css("background-image", "url('../images/plus.png')")
    }
})

// 当某一小项被选中时 该项隐藏 并在筛选上部分显示

$('.minus dd').on('click', function () {
    $(this).parent().css({
            "display": "none"
        }),
        $('.selected-lists').css({
            "height": "$('.selected-lists').height+71px"
        }),
        $('.selected-lists').append(`
            <li class="selected-list">
            <h4>${$(this).siblings('dt').html()}</h4>
            <div class="list-cont">
            ${$(this).html()}
            </div>
        </li>
            `),
        $('.reselect').css({
            "display": "block"
        }),
        $(".selected").css({
            "padding-bottom": "0px"
        })
    if ($(this).hasClass('spring')) {
        $(".product").css({
                "display": "none"
            }),
            $('.spring').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/60件商品')
    } else if ($(this).hasClass('summer')) {
        $(".product").css({
                "display": "none"
            }),
            $('.summer').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/75件商品')
    } else if ($(this).hasClass('autumn')) {
        $(".product").css({
                "display": "none"
            }),
            $('.autumn').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/2件商品')
    } else if ($(this).hasClass('bag')) {
        $(".product").css({
                "display": "none"
            }),
            $('.bag').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/58件商品')
    } else if ($(this).hasClass('hat')) {
        $(".product").css({
                "display": "none"
            }),
            $('.hat').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/32件商品')
    } else if ($(this).hasClass('socks')) {
        $(".product").css({
                "display": "none"
            }),
            $('.socks').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/41件商品')
    } else if ($(this).hasClass('shoestring')) {
        $(".product").css({
                "display": "none"
            }),
            $('.shoestring').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/6件商品')
    } else if ($(this).hasClass('priceThree')) {
        $(".product").css({
                "display": "none"
            }),
            $('.priceThree').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/5件商品')
    } else if ($(this).hasClass('priceFour')) {
        $(".product").css({
                "display": "none"
            }),
            $('.priceFour').css({
                "display": "block"
            }),
            $(".ornaments-title h1").html('戴的/3件商品')
    } else if ($(this).hasClass('priceZ')) {
        $(".product").css({
                "display": "block"
            }),
            $('.priceThree').css({
                "display": "none"
            }),
            $('.priceFour').css({
                "display": "none"
            }),
            $(".ornaments-title h1").html('戴的/129件商品')
    }
})