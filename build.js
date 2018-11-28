{
    baseUrl:'.', //配置模块的基础目录
    dir: 'dist', //输出打包后内容的目录
    optimize: 'uglify2',
    mainConfigFile: 'src/js/main.js', //模块入口文件，基于baseUrl
    removeCombined: true,  //如果为true 将从输出目录中删除已合并的文件
    //过滤，匹配到的文件将不会被输出到dir
    fileExclusionRegExp: '/^(r|build.*)\.js$', 
    paths: {
        Et:'empty:',
        swiper:'empty:',
        text:'empty:',
        Tabbar:'src/js/Modules/Commons/Tabbar.js',
        FenLei:'src/js/Modules/FenLei/FenLei.js',
        Me:'src/js/Modules/Me/Me.js',
        ShouYie:'src/js/Modules/ShouYie/ShouYie.js',
        Banner:'src/js/Modules/ShouYie/banner/Banner.js',
        Continer:'src/js/Modules/ShouYie/Continer/Continer.js',
        Nav:'src/js/Modules/ShouYie/Nav/nav.js',
        FaXian:'src/js/Modules/ShouYie/Nav/FaXian/FaXian.js',
        HaiTao:'src/js/Modules/ShouYie/Nav/HaiTao/HaiTao.js',
        JinXuan:'src/js/Modules/ShouYie/Nav/JinXuan/JinXuan.js',
        YouHui:'src/js/Modules/ShouYie/Nav/YouHui/YouHui.js',
        YuanChuang:'src/js/Modules/ShouYie/Nav/YuanChuang/YuanChuang.js',
    },
    allChunks: true,
    // optimizeCss: 'standard',
    writeBuildTxt: false,
    modules: [{name : 'src/js/main'}] //需要优化的模块
}