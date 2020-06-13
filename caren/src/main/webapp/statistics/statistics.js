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
            backgroundColor: window.chartColors.purple,
            borderColor: window.chartColors.blue,
            data: [12, 19, 3, 19, 12, 1]
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
                    labelString: 'Time'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Height (cm)'
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    getrecords("http://localhost:8080/caren/rest/getrecords/0").then((data) => {
        let parseData = JSON.parse(data);
        parseData.sort((a, b) => {
            let one = new Date(a.date);
            let two = new Date(b.date)
            if(one < two) { return -1; }
            if(one > two) { return 1; }
            return 0;
        });
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
        displayGraph('Height');
        window.lineChart.update();

    }).catch((err) => {
        console.log(err);
    });
    
    window.lineChart = new Chart(ctx, config);
    console.log(measurementData);
    window.lineChart.update();
};

let chosenbutton = document.getElementsByClassName('buttonMeasurement');
Array.prototype.forEach.call(chosenbutton, (currentbutton) => {
    let typebutton = currentbutton.getAttribute('data-type');
    //SOMEONE DEAL WITH THIS. Make sure that measurementData is neither empty or undefined. ----------------------READ <<<<<<<<<<<<<<<<<<<<
    if (typeof measurementData[typebutton.toLowerCase()] != 'undefined' || measurementData[bloodpressure] != 'undefined') {
        currentbutton.addEventListener('click', () => {
        	displayGraph(typebutton);
        })
    }

});

function displayGraph(typebutton){
    returnArray(typebutton);
    config.options.title.text = typebutton;
    if(typebutton == 'Height' || typebutton == 'Weight'){
    	config.options.scales.yAxes[0].scaleLabel.labelString = typebutton + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
        config.data.datasets[0].label = typebutton + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
    } else {
    	config.options.scales.yAxes[0].scaleLabel.labelString = typebutton + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
        config.data.datasets[0].label = "Systolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
        config.data.datasets[1].label = "Diastolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
    }
    
    window.lineChart.update();
}


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
        measurementData.bloodpressure.systolic.forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.value);
            date.push(fieldnamedata.date);
        });
        measurementData.bloodpressure.diastolic.forEach((fieldnamedata) => {
            arrayvalue2.push(fieldnamedata.value);
        });
        config.data.datasets[0].data = arrayvalue1;
        window.lineChart.update();
        addDataset(arrayvalue2);
        config.data.labels = date;
        window.lineChart.update();
    }

}

// UNDER CONSTRUCTION ADD AND REMOVE IS NOT FULLY FUNCTION
function addDataset(datasetvalue) {
	console.log(config.data.datasets[1]);	
	if(config.data.datasets[1]=='Diastolic ( mm Hg )'){
		removeDataset(config.data.datasets[1]);
	}
    var newDataset = {
    		label: 'Diastolic',
            fill: false,
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.orange,
            data: []
    };
    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(datasetvalue);
    }

    config.data.datasets.push(newDataset);
    window.lineChart.update();
}

function removeDataset(chart) {
	chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        config.data.dataset.data.pop();
    });
    window.lineChart.update()
}