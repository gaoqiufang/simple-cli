define(function(require) {
    var $ = require('jquery');
    var template = require('template');
    var liItem = require('text!templates/li_item.html');
    require('highcharts');

    console.log(Highcharts);
    
    //mock Data
    var data = [
        {
            name: 'jquery',
            updateTime: 1527492399793
        },
        {
            name: 'require',
            updateTime: 1527492399793
        },
        {
            name: 'arttemplate',
            updateTime: 1527492399793
        },
        {
            name: 'moment',
            updateTime: 1527492399793
        },
        {
            name: 'text',
            updateTime: 1527492399793
        },
        {
            name: 'url',
            updateTime: 1527492399793
        },
        {
            name: 'index',
            updateTime: 1527492399793
        }
    ];

    function init() {
        
        var html = template.render(liItem, {data: data});
        //或者var html = template.compile(liItem)({data: data});

        $('#box').html(html);
    }

    function chart() {

        Highcharts.chart('container', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
        
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
        
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });

    }

    function start() {
        init();
        chart();
    }

    return {
        start: start
    }
});