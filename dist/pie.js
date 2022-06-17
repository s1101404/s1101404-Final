google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['症狀', '人數'],
        ['未滿10歲<', 153],
        ['10多歲', 53],
        ['20多歲', 85],
        ['30多歲', 119],
        ['40多歲', 263],
        ['50多歲', 516],
        ['60多歲', 1086],
        ['70多歲', 1619],
        ['80多歲', 2172],
        ['大於等於90歲', 1130],
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
        title: '中症確診年齡比 (7199人)',
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
        ['未滿10歲<', 52],
        ['10多歲', 15],
        ['20多歲', 21],
        ['30多歲', 40],
        ['40多歲', 141],
        ['50多歲', 297],
        ['60多歲', 650],
        ['70多歲', 1043],
        ['80多歲', 1505],
        ['大於等於90歲', 975],
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
        title: '重症確診年齡比 (4739人)',
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