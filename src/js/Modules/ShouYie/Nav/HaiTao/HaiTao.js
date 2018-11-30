define(['Et','text!./HaiTao.html','./utils/axios'],function(Et,HaiTaoHtml,axios){
    Et.enbaleStyle = true;
    // console.log(HaiTaoHtml);
    var HaiTao = {
        initView : function(){
            // 设置请求地址
            var baseURL = "http://localhost:3000/api/home";
            // 设置请求参数
            var parmas = {
                sectionId : 1,
                pageNo : 0,
                pageSize : 15
            }
            // 发起请求
            axios.get(baseURL,parmas).then((resolve)=>{
                // 检查是否拿到数据
                console.log(resolve);
                // 糅合
                var rs = Et.template(HaiTaoHtml,{
                    goods:resolve.data,
                    Data:Window.Date,
                    console:window.console
                })
                var goodList = document.createElement("div");
                goodList.className = "goodsList";
                goodList.innerHTML += rs;
                var ContinerBox = document.getElementById("ContinerBox");
                ContinerBox.appendChild(goodList);

            }).catch((error)=>{
                console.log(error);
            })
            // var ContinerBox = document.getElementById("ContinerBox");
            // ContinerBox.innerHTML = HaiTaoHtml;
        }
    }
    return HaiTao;
})