var require = {
    waitSeconds: 0,
    baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery',
        'highcharts': 'lib/hcharts/highcharts',
        'moment': 'lib/moment',
        'text': 'lib/text',
        'url': 'lib/url',
        'templates': '../templates',
    },
    shim: {
        //两个highchart的扩展, 需要的时候引用
        'lib/hcharts/highcharts-3d': ['highcharts'], //highcharts 3d 功能文件
        'lib/hcharts/highcharts-more': ['highcharts'], //highcharts 增加功能文件
    }
};
