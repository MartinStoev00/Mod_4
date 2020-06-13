//colors
window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

let measurementData = {
    weight: [],
    height: [],
    bloodpressure: {
        systolic: [],
        diastolic: []
    }
};
let measurementname = 'Height';
// Change it to the received json data
let time = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// Change it to the received Json data

let config = {
    type: 'line',
    data: {
        labels: time,
        datasets: [{
            label: 'Height',
            fill: false,
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.blue,
            data: [12, 19, 3, 19, 12, 1],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Height'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    getrecords("http://localhost:8080/caren/rest/getrecords/0").then((data) => {
        let parseData = JSON.parse(data);
        parseData.forEach((report) => {
            let reportType = report.title;
            if (reportType == "height") {
                let obj = {
                    value: report.text.value,
                    date: report.date,
                    unit: report.text.unit
                }
                measurementData.height.push(obj);
            } else if (reportType == "weight") {
                let obj = {
                    value: report.text.value,
                    date: report.date,
                    unit: report.text.unit
                }
                measurementData.weight.push(obj);

            } else if (reportType == "blood_pressure") {
                let systolicobj = {
                    value: report.text.systolic,
                    date: report.date,
                    unit: report.text.unit

                }
                let diastolicobj = {
                    value: report.text.diastolic,
                    date: report.date,
                    unit: report.text.unit
                }

                measurementData.bloodpressure.systolic.push(systolicobj);
                measurementData.bloodpressure.diastolic.push(diastolicobj);
            }
        });
        window.lineChart.update();

    }).catch((err) => {
        console.log(err);
    });
    window.lineChart = new Chart(ctx, config);

};

let chosenbutton = document.getElementsByClassName('buttonMeasurement');
Array.prototype.forEach.call(chosenbutton, (currentbutton) => {
    let typebutton = currentbutton.getAttribute('data-type');
    if (measurementData[typebutton.toLowerCase()].length != 0) {
        currentbutton.addEventListener('click', () => {
            returnArray(typebutton);
            config.options.title.text = typebutton;
            console.log(measurementData[typebutton.toLowerCase()]);
            config.data.datasets[0].label = typebutton + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
            window.lineChart.update();
        })
    }

});




var colorNames = Object.keys(window.chartColors);

function getrecords(location) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", location, true);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

function returnArray(fieldname) {
    let arrayvalue1 = [];
    let arrayvalue2 = [];
    let date = [];
    if (fieldname == 'Height' || fieldname == 'Weight') {
        measurementData[fieldname.toLowerCase()].forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.value);
            date.push(fieldnamedata.date);

        });
        config.data.datasets[0].data = arrayvalue1;
        config.data.labels = date;
        window.lineChart.update();
    } else {
        console.log(measurementData.bloodpressure);
        measurementData.bloodpressure.forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.systolic);
            arrayvalue2.push(fieldnamedata.diastolic);
            date.push(fieldnamedata.date);
        });
        config.data.datasets[0].data = arrayvalue1;
        addDataset(datasetvalue);
        config.data.labels = date;

    }

}

// UNDER CONSTRUCTION
function addDataset(datasetvalue) {
    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        backgroundColor: newColor,
        borderColor: newColor,
        data: [],
        fill: false
    };

    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(datasetvalue);
    }

    config.data.datasets.push(newDataset);
    window.myLine.update();
}

function removeDataset() {

}