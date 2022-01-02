// 自适应配置页面, 先加载body，所以要在body后进入该文件
function remSize() {
    // 获取设备宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;

    // 设置页面不高于750，可以在手机上查看
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    }

    // 设置页面不低于750，可以在手机上查看
    if (deviceWidth <= 320) {
        deviceWidth = 320;
    }

    // 根据iphoneX的设计稿进行设计； 1rem = 100px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    // 字体
    document.querySelector('body').style.fontSize = 0.3 + 'rem';
    
}

remSize();

window.onresize = function() {
    remSize();
}