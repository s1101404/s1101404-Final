google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
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
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}