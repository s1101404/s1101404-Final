google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['症狀', '人數'],
        ['未滿10歲<', 130],
        ['10多歲', 48],
        ['20多歲', 78],
        ['30多歲', 108],
        ['40多歲', 248],
        ['50多歲', 459],
        ['60多歲', 987],
        ['70多歲', 1487],
        ['80多歲', 1988],
        ['大於等於90歲', 1045],
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            width: '50%',
            backgroundColor: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        title: '中症確診年齡比 (6578人)',
        is3D: true,
        fontSize: '15',
        color: 'white',
        legend: {
            textStyle:{color: 'white',}
        },
        titleTextStyle: {
            color: 'white',
            fontSize: '20'
          },
          
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['症狀', '人數'],
        ['未滿10歲<', 10],
        ['10多歲', 10],
        ['20多歲', 21],
        ['30多歲', 36],
        ['40多歲', 119],
        ['50多歲', 258],
        ['60多歲', 570],
        ['70多歲', 917],
        ['80多歲', 1322],
        ['大於等於90歲', 851],
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            width: '50%',
            backgroundColor: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        title: '重症確診年齡比 (4149人)',
        is3D: true,
        fontSize: '15',
        color: 'white',
        legend: {
            textStyle:{color: 'white',}
        },
        titleTextStyle: {
            color: 'white',
            fontSize: '20'
          },
          
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
    chart.draw(data, options);
}