define(['Et','text!./Continer.html'],function(Et,ContinerHtml){
    Et.enableStyle = true;
    var Ctn = {
        initView : function(){
            var app = document.getElementById("App");
            var add = document.createElement("ContinerB");
            add.innerHTML += ContinerHtml;
            app.appendChild(add);
        }
    }
    return Ctn;
})