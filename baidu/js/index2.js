//下面是右侧边菜单动态设置
var baiDu = {
    init: function() {
        this.baiduSetting();
    },
    baiduSetting: function() {
        $('#navMore,#moreProduct').mouseover(function(){
        	$("#moreProduct").show();
              }).mouseout(function(){
        	$("#moreProduct").hide();
        })


        




    }
}







$(function() {
        baiDu.init();
    })
    //下面是登陆后页面中央tab选项
$(document).ready(function() {
    $(".main-content-change div").each(function(index) {
        var liNode = $(this)
        $(this).click(function() {

            $(".tabin").removeClass('tabin');
            $(".main-notice").removeClass("main-notice");
            $(".main-tabin div").eq(index).addClass("tabin");
            liNode.addClass('main-notice');

        }).mouseout(function() {

        });
    })
})
