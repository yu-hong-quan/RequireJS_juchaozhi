define(['Et','text!Me.html'],function(Et,MeHtml){
    var obj = {
        initView : function(){
            var app = document.getElementById("App");
            app.innerHTML = MeHtml;
        }
    }
    return obj;
})