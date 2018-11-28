define(['Et','text!./JinXuan.html','./utils/axios'],function(Et,JinXuanHtml,axios){
    Et.enbaleStyle = true;
    Et.enbaleScript = true;
    var JinXuan = {
        initView : function(){
            var baseURL = "http://localhost:3000/api/home";
            var params = {
                sectionId:99,
                pageNo : 0,
                pageSize : 30
            }
            axios.get(baseURL,params).then((resolve)=>{
                var rs = Et.template(JinXuanHtml,{
                    goods:resolve.listIndex,
                    Data:window.Date,
                    console:window.console
                })
                var goodsList = document.createElement("div");
                goodsList.className = 'goodsList';
                goodsList.innerHTML += rs;
                var ContinerBox = document.getElementById("ContinerBox");
                ContinerBox.appendChild(goodsList);
            })
        }
    }
    return JinXuan;
})