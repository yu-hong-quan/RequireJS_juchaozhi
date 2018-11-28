define(['Et','text!FenLei.html'],function(Et,FenLeiHtml){
    var obj = {
        initView : function(){
            var app = document.getElementById("App");
            app.innerHTML = FenLeiHtml;
        }
    }
    return obj;
})