require.config({
    paths: {
        ShouYe : 'Modules/ShouYie/ShouYie',
        FenLei : 'Modules/FenLei/FenLei',
        Me : 'Modules/Me/Me'
    }
})
define(['Et','text!../js/Modules/Commons/Tabbar.html','ShouYe','FenLei','Me'],function(Et,TabbarHtml,ShouYe,FenLei,Me){
    Et.enableStyle=true;
    var tabbls = {
        initView : function(){
            var res = Et.template(TabbarHtml,{});
            var body = document.body;
            body.innerHTML += res;
            
            var tabs = document.querySelectorAll(".tabs");
            tabs[0].style.color = "red";
            var tabsLength = tabs.length;
            ShouYe.initView();
            for(let i=0;i<tabs.length;i++){
                var tab = tabs[i];
                tab.onclick = function(){
                    // 设置默认选中的样式
                    for(let j=0;j<tabsLength;j++){
                        tabs[j].style.color="black";
                    }
                    this.style.color="red";
                    switch(i){
                        case 0:
                            ShouYe.initView();
                            break;
                        case 1:
                            FenLei.initView();
                            break;
                        case 2:
                            Me.initView();
                            break;
                    }   
                }
            }
        }
    }
    return tabbls;
})