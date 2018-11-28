require.config({
    baseUrl : './src/js',
    paths : {
        Tabbar : './Modules/Commons/Tabbar',
        Et : './libs/easy.templatejs',
        text : './libs/text',
        nav : './Modules/ShouYie/Nav/nav'
    }
});

require(['Tabbar','nav'],function(Tabbar,Nav){
    Tabbar.initView();
    console.log("本消息是由：入口文件输出~");
})