import data from './script.js'
const chart = Highcharts.chart('chart', {
    title: false,
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 24
        }
    },
    yAxis: {
        title: {
            text: 'Revenue dynamics'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Days of the week'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
            name: 'Revenue',
            data: data[0].reverse()
        },
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});