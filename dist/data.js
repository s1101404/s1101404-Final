
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
    var data = google.visualization.arrayToDataTable([
        ['城市', '確診數', '增加數'],
        ['台北市', total[0][0], total[0][1]],
        ['新北市', total[1][0], total[1][1]],
        ['基隆市', total[2][0], total[2][1]],
        ['桃園市', total[3][0], total[3][1]],
        ['新竹市', total[4][0], total[4][1]],
        ['新竹縣', total[5][0], total[5][1]],
        ['宜蘭縣', total[6][0], total[6][1]]
    ]);

    var options = {
        title: '北部',
        titleTextStyle: {
            color: 'white'
          },
        backgroundColor: 'transparent',
        chartArea: { 
            width: '50%',
            backgroundColor: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        isStacked: true,
        legend: {
            textStyle:{color: 'white',}
        },
        hAxis: {
            title: '人口數',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: '城市',
            titleTextStyle: {
                color: 'white'
              },
            textStyle: {
                color: 'white',
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked2);

function drawStacked2() {
    var data = google.visualization.arrayToDataTable([
        ['城市', '確診數', '增加數'],
        ['苗栗縣', total[7][0], total[7][1]],
        ['臺中市', total[8][0], total[8][1]],
        ['南投縣', total[9][0], total[9][1]],
        ['彰化縣', total[10][0], total[10][1]],
        ['雲林縣', total[11][0], total[11][1]],
    ]);

    var options = {
        title: '中部',
        titleTextStyle: {
            color: 'white'
          },
        backgroundColor: 'transparent',
        chartArea: { 
            width: '50%',
            backgroundColor: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        isStacked: true,
        legend: {
            textStyle:{color: 'white',}
        },
        hAxis: {
            title: '人口數n',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: '城市',
            titleTextStyle: {
                color: 'white'
              },
            textStyle: {
                color: 'white',
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked3);

function drawStacked3() {
    var data = google.visualization.arrayToDataTable([
        ['城市', '確診數', '增加數'],
        ['嘉義縣', total[12][0], total[12][1]],
        ['嘉義市', total[13][0], total[13][1]],
        ['臺南市', total[14][0], total[14][1]],
        ['高雄市', total[15][0], total[15][1]],
        ['屏東縣', total[16][0], total[16][1]],
    ]);

    var options = {
        title: '南部',
        titleTextStyle: {
            color: 'white'
          },
        backgroundColor: 'transparent',
        chartArea: { 
            width: '50%',
            backgroundColor: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        isStacked: true,
        legend: {
            textStyle:{color: 'white',}
        },
        hAxis: {
            title: '人口數',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: '城市',
            titleTextStyle: {
                color: 'white'
              },
            textStyle: {
                color: 'white',
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked4);

function drawStacked4() {
    var data = google.visualization.arrayToDataTable([
        ['城市', '確診數', '增加數'],
        ['花蓮縣', total[17][0], total[17][1]],
        ['臺東縣', total[18][0], total[18][1]],
    ]);

    var options = {
        title: '東部',
        titleTextStyle: {
            color: 'white'
          },
        backgroundColor: 'transparent',
        chartArea: { 
            width: '50%',
            backgroundColor: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        isStacked: true,
        legend: {
            textStyle:{color: 'white',}
        },
        hAxis: {
            title: '人口數',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: '城市',
            titleTextStyle: {
                color: 'white'
              },
            textStyle: {
                color: 'white',
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div4'));
    chart.draw(data, options);
}