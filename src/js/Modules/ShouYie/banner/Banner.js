define(['Et','text!./Modules/ShouYie/banner/Banner.html','./utils/axios','./libs/swiper.min'],function(Et,BannerHtml,axios,Swiper){
    Et.enableStyle = true;
    var Bne = {
        initView : function(){
            
            // 获取轮播数据
            var BannerUrl = 'http://localhost:3000/zh-cn/api/focus';
            axios.get(BannerUrl).then((resolve)=>{
                var res = Et.template(BannerHtml,{focus:resolve.focus});
                var sed = document.createElement("div");
                sed.className = "BannerB";
                sed.innerHTML = res;
                var ShouYieBox = document.getElementById("ShouYieBox");
                ShouYieBox.appendChild(sed);
        
                var swiper = new Swiper('.swiper-container', {
                    spaceBetween: 1,
                    centeredSlides: true,
                    autoplay: {
                      delay: 2500,
                      disableOnInteraction: false,
                    },
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    }
                  });
            })
        }
    }
    return Bne;
})