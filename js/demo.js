$(function() {
    $(".demo_block_bottom").click(function() {
        var obj = $(this).prev(".demo_block_code");
        if(obj.is(":hidden")) {
            obj.slideDown();
            $(this).addClass("demo_block_active");
            $(this).find("i").removeClass("icon_down").addClass("icon_up");
            $(this).find("span").text("收起代码");
        } else {
            obj.slideUp();
            $(this).removeClass("demo_block_active");
            $(this).find("i").removeClass("icon_up").addClass("icon_down");
            $(this).find("span").text("显示代码");
        }
    })
})