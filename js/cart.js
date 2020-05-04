// 点击提示的关闭按钮  提示消失
$('.close-btn').on("click", function () {
    $('.car_notice').hide(),
        $('.con-progress').css({
            "margin-top": "170px"
        }),
        $('.public-top').css({
            "height": "50px"
        })

})
// 点击全选  所有全选都不选中  价格0
// 当flag为true 时 为选中状态
let num = $('#skuQty').val()
let flag = true

$(".check").on('click', function () {
    if (flag) {
        flag = false
        $(".check").css({
                "background": "url(../images/check.png) no-repeat"
            }),
            $('.info').html('¥ 0.00'),
            $('.xuanzhong').html('0')

    } else if (flag == false) {
        flag = true
        $(".check").css({
                "background": "url(../images/checked.png) no-repeat"
            }),
            $('.info').html('¥ 219.00')
        $('.activity .info').html('¥ 0.00'),
            $('.xuanzhong').html(`${num}`)

    }
})

// 当点击- +号时 价钱变化
let dan = 219.00

$(".icon-left-minus").on("click", function () {
    let num = $('#skuQty').val()
    num--
    if (num < 1) {
        num = 1
    }
    $('#skuQty').val(num)
    $('.goods-price p').html(`dan*num`)
    let price = `${num*dan}`
    $('.goods-price p').html(`&yen;${price}.00`)
})
$('.icon-left-plus').on('click', function () {
    let num = $('#skuQty').val()
    num++
    let dan =  219.00
    $('#skuQty').val(num)
    let price = `${num*dan}`
    $('.goods-price p').html(`&yen;${price}.00`)
})