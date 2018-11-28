define(['Et','text!./YouHui.html'],function(Et,YouHuiHtml){
    Et.enbaleStyle = true;
    console.log(YouHuiHtml);
    var YouHui = {
        initView : function(){
            // ContinerBox.innerHTML = "";
            var ContinerBox = document.getElementById("ContinerBox");
            ContinerBox.innerHTML = YouHuiHtml;
        }
    }
    return YouHui;
})