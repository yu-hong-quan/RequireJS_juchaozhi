define(['Et','text!./FaXian.html'],function(Et,FaXianHtml){
    Et.enbaleStyle = true;
    console.log(FaXianHtml);
    var FaXian = {
        initView : function(){
            var ContinerBox = document.getElementById("ContinerBox");
            ContinerBox.innerHTML = FaXianHtml;
        }
    }
    return FaXian;
})