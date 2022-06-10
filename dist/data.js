
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
        title: 'Population of Largest U.S. Cities',
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
            title: 'Total Population',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: 'City',
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
        ['City222', '20120 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
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
            title: 'Total Population',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: 'City',
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
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
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
            title: 'Total Population',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: 'City',
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
        ['City', '201440 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
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
            title: 'Total Population',
            titleTextStyle: {
                color: 'white'
              },
            minValue: 0,
            textStyle: {
                color: 'white',
            }
        },
        vAxis: {
            title: 'City',
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