define(['Et','text!./YouHui.html','./utils/axios'],function(Et,YouHuiHtml,axios){
    Et.enbaleStyle = true;
    Et.enbaleScript = true;
    // console.log(YouHuiHtml);
    var YouHui = {
        initView : function(){
            var baseURL = "http://localhost:3000/api/home";
            var params = {
                sectionId : 0,
                pageNo : 0,
                pageSize : 15
            }
            axios.get(baseURL,params).then((resolve)=>{
                console.log(resolve);
                
                var rs = Et.template(YouHuiHtml,{
                    goods:resolve.data,
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
    return YouHui;
})