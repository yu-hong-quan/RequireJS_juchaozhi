define(['Et','text!./YuanChuang.html'],function(Et,YuanChuangHtml){
    Et.enbaleStyle = true;
    console.log(YuanChuangHtml);
    var YuanChuang = {
        initView : function(){
            var ContinerBox = document.getElementById("ContinerBox");
            ContinerBox.innerHTML = YuanChuangHtml;
        }
    }
    return YuanChuang;
})