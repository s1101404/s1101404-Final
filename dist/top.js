$(document).ready(function() {

    var num_li = $(".nav li").length;
    
    var n = 1;
    var moving = 0;
    $(window).mousewheel(function(e) {
        $("html, body").stop();
        if (moving == 0) {
            moving = 1;
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++;
                }
            } else {
                if (n > 1) {
                    n--;
                }
            }
        }
        console.log(n);
        $("html, body").animate({
            "scrollTop": $(".p0" + n).offset().top
        }, function(){
            moving = 0;
        })
    })

    //  一進入網頁時，將導覽列垂直置中
    center();

    //  縮放網頁時，重新將導覽列置中
    $(window).resize(function() {
        center();
    })

    //  計算導覽列垂直置中的高度
    function center() {
        var pos = $(window).height() / 2 - $(".nav").height() / 2;
        $(".nav").css("top", pos);
    }
    
    //  點擊 gotop 時回到頂端
    $(".gotop").click(function(){
        $("html,body").animate({"scrollTop":"0"})
        n = 1;
    })

})