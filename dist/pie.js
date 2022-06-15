google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['症狀', '人數'],
        ['未滿10歲<', 136],
        ['10多歲', 50],
        ['20多歲', 80],
        ['30多歲', 110],
        ['40多歲', 251],
        ['50多歲', 475],
        ['60多歲', 1029],
        ['70多歲', 1518],
        ['80多歲', 2054],
        ['大於等於90歲', 1066],
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
        title: '中症確診年齡比 (6768人)',
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
        ['未滿10歲<', 48],
        ['10多歲', 12],
        ['20多歲', 21],
        ['30多歲', 37],
        ['40多歲', 130],
        ['50多歲', 274],
        ['60多歲', 594],
        ['70多歲', 946],
        ['80多歲', 1384],
        ['大於等於90歲', 895],
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
        title: '重症確診年齡比 (4351人)',
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