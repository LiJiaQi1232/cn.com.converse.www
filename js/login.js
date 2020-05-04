//登录
var loginType = 1;//不展开
$('.header-enroll').find('#login').on('click', function () {

    if (loginType == 0) {
        // 点登录的时候先把注册框隐藏
        $('nav').stop().animate({
            top: '80px'
        }, 500)
        $('.register').stop().slideUp(500).siblings().eq(3).stop().hide();

        registerType = 0;

        $('.login').stop().slideDown(500).next().stop().hide();
        $('nav').stop().animate({
            top: '477px'
        }, 500)
        loginType = 1;
    } else if (loginType == 1) {
        $('.login').stop().slideUp(500).next().stop().hide();
        $('nav').stop().animate({
            top: '80px'
        }, 500)
        loginType = 0;
    }
})

$('.iconMy').click(function () {


    
    if (loginType == 0) {
        $('.register').stop().slideUp(500).siblings().eq(3).stop().hide();
        $('.header-nav').stop().animate({
            top: '80px'
        }, 500)
        registerType = 0;

        $('.login').stop().slideDown(500);
        $('.header-nav').stop().animate({
            top: '477px'
        }, 500)
        loginType = 1;
    } else if (loginType == 1) {
        $('.login').stop().slideUp(500);
        $('.header-nav').stop().animate({
            top: '80px'
        }, 500)
        loginType = 0;
        
        $('.login').stop().slideUp(500);
        $('.header-nav').stop().animate({
            top: '80px'
        }, 500)
        loginType = 0;
    }
})

//验证localstorage
$('.lgBtn').click(function () {
    if ($('#username').val() === localStorage.username && $('#password').val() === localStorage.password) {
        // $('.headerSign').html('您好'+localStorage.username);
        history.go(0);
        $('.login').stop().slideUp(500).next().stop().hide();
        $('.header-nav').stop().animate({
            top: '80px'
        }, 500)

        document.cookie = "isLogin=" + localStorage.username;
        if ($('.remember')[0].checked) {
            var d = new Date();
            d.setDate(d.getDate() + 3);
            document.cookie = "isLogin=" + localStorage.username + ";expires=" + d;
        }

        loginType = 0;
    } else {
        alert("账号或密码错误");
    }
})



// 登录的状态
var zw = document.cookie.split("; ");
var dqdl;
var gwc;
for (var j = 0; j < zw.length; j++) {
    if (zw[j].split('=')[0] === 'isLogin') {
        dqdl = JSON.parse(zw[j].split('=')[1]);
    }
    if (zw[j].split('=')[0] === 'goods') {
        gwc = JSON.parse(zw[j].split('=')[1]);
        // console.log(gwc);
        var sum = 0;
        for (var k = 0; k < gwc.length; k++) {
            sum += gwc[k].num * 1;
        }
        $('.iconCar').html(sum);
    }
}

if (dqdl) {
    $('.header-sign').html("您好," + dqdl + '<input type="button" value="退出" class="isLogin_quit"></input>');

}

$('.isLogin_quit').click(function () {
    var d = new Date();
    d.setDate(d.getDate() - 3);
    document.cookie = 'isLogin=88;expires=' + d;
    history.go(0);
})