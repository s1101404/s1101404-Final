google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['症狀', '人數'],
        ['未滿10歲<', 159],
        ['10多歲', 55],
        ['20多歲', 87],
        ['30多歲', 124],
        ['40多歲', 268],
        ['50多歲', 531],
        ['60多歲', 1124],
        ['70多歲', 1668],
        ['80多歲', 2232],
        ['大於等於90歲', 1145],
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
        title: '中症確診年齡比 (7393人)',
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
        ['未滿10歲<', 54],
        ['10多歲', 15],
        ['20多歲', 23],
        ['30多歲', 42],
        ['40多歲', 144],
        ['50多歲', 315],
        ['60多歲', 674],
        ['70多歲', 1085],
        ['80多歲', 1584],
        ['大於等於90歲', 1011],
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
        title: '重症確診年齡比 (4947人)',
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