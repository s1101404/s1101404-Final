google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['症狀', '人數'],
        ['未滿10歲<', 108],
        ['10多歲', 39],
        ['20多歲', 67],
        ['30多歲', 93],
        ['40多歲', 222],
        ['50多歲', 407],
        ['60多歲', 895],
        ['70多歲', 1363],
        ['80多歲', 1802],
        ['大於等於90歲', 962],
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
        title: '中症確診年齡比',
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
        ['30多歲', 34],
        ['40多歲', 104],
        ['50多歲', 225],
        ['60多歲', 512],
        ['70多歲', 802],
        ['80多歲', 1168],
        ['大於等於90歲', 761],
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
        title: '重症確診年齡比',
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