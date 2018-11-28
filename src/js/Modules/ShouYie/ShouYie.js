require.config({
    paths : {
        Bnr : 'Modules/ShouYie/banner/Banner',
        Nav : 'Modules/ShouYie/Nav/nav',
        Continer : 'Modules/ShouYie/Continer/Continer',
        JinXuan : 'Modules/ShouYie/Nav/JinXuan/JinXuan'
    }
})
define(['Et','text!./Modules/ShouYie/ShouYie.html','Bnr','Nav','Continer','JinXuan'],function(Et,ShouYieHtml,Bnr,nav,Continer,JinXuan){
    Et.enableStyle = true;
    var obj = {
        initView : function(){
            Continer.innerHTML = "";
            var app = document.getElementById("App");
            app.innerHTML = ShouYieHtml;
            Bnr.initView();
            nav.initView();
            Continer.initView();
            JinXuan.initView();
        }
    }
    return obj;
})