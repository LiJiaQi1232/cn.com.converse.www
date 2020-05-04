// 点击提示的关闭按钮  提示消失
$('.close-btn').on("click", function () {
    $('.car_notice').hide(),
    $('.con-progress').css({
        "margin-top":"170px"
    }),
        $('.public-top').css({
            "height":"50px"
        })

})
// 点击全选  所有全选都不选中  价格0
// 当flag为true 时 为选中状态
let flag=true
$(".check").on('click', function () {
    if (flag) {
        $(".check").css({
            "background":"url(../images/check.png) no-repeat"
        }),
            $('.info').html('¥ 0.00')
    }
})