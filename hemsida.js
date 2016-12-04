var counter = 0;
window.setInterval(
function () {
counter = counter +57;
document.getElementById("counter").innerHTML = counter;
},100	);


var counter2 = 0;
window.setInterval(
function () {
counter2 = counter2 +28,5;
document.getElementById("counter2").innerHTML = counter2;
}, 100);



var counter3 = 0;
window.setInterval(
function () {
counter3 = counter3 +5,1;
document.getElementById("counter3").innerHTML = counter3;
}, 100);

var data = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
  series: [
    [11.52, 13.43, 13.51, 14.64, 16.21, 18.32, ,0],
    [7.14, 8.08, 9.14, 9.07, 8.1, 9.13, 0,],
    [1.89, 1.99, 2.11, 1.88, 1.56, 1.65, 0,]
  ]
};

var options = {
  seriesBarDistance: 10
};

var responsiveOptions = [
  ['screen and (max-width: 200px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);