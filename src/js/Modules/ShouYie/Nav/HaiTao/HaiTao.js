define(['Et','text!./HaiTao.html'],function(Et,HaiTaoHtml){
    Et.enbaleStyle = true;
    console.log(HaiTaoHtml);
    var HaiTao = {
        initView : function(){
            var ContinerBox = document.getElementById("ContinerBox");
            ContinerBox.innerHTML = HaiTaoHtml;
        }
    }
    return HaiTao;
})