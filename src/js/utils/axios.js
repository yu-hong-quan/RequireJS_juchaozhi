// 封装数据请求 《模块》
define(function(){
    var axios = {
        // 封装get方法
        get:function(url,params){
            // 处理参数
            var str ='';
            for(var key in params){
                str += key + "=" + params[key] + "&";
            }
            // 去除最后一个特殊字符
            str = str.slice(0,-1);
            // 将参数和地址拼接起来
            url = url + "?" + str;

            // 发起网络请求
            var xhr = new XMLHttpRequest();
            // 发起请求
            xhr.open('get',url);
            xhr.send();
            return new Promise(function(resolve,rejcet){
                xhr.onreadystatechange = function(){
                    if(xhr.readyState != 4){
                        return;
                    }
                    console.log('获取数据');
                    if(xhr.responseText.length){
                        var jsonData = JSON.parse(xhr.responseText);
                        resolve(jsonData);
                        return;
                    }else{
                        console.log("继续请求");
                        axios.get(url,params);
                    }
                }
            })
        }
    }
    window.$axios = axios;
    return axios;
})