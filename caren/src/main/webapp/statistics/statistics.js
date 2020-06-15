
//Different colors
window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
};

let ctxgraph;

//JSON format for all graph data
let measurementData = {
    weight: [],
    height: [],
    bloodpressure: {
        systolic: [],
        diastolic: []
    }
};

//Configuration for the graph
let config = {
    type: 'line',
    data: {
        labels: ['default'],
        datasets: [{
            label: 'default',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: []
        }]
    },
    options: {
        responsive: true,
        title: {
        	
            display: true,
            text: 'default'
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
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'default'
                }
            }]
        }
    }
};

//On load function
window.onload = function() {
	Chart.defaults.global.defaultFontColor = '#434343';
	Chart.defaults.global.defaultFontFamily = 'Arial';
	//Chart.defaults.global.defaultFontSize = '20';
    var ctx = document.getElementById('canvas').getContext('2d');
    
    //To retrieve values from the canvas. Calls onclickData();
    ctxgraph = document.getElementById('canvas');
    ctxgraph.onclick = onclickData;
    
    getrecords("http://localhost:8080/caren/rest/getrecords/0").then((data) => {
        let parseData = JSON.parse(data);
        parseData.sort((a, b) => {
            let one = new Date(a.date_added);
            let two = new Date(b.date_added)
            if(one < two) { return -1; }
            if(one > two) { return 1; }
            return 0;
        });
        parseData.forEach((report) => {
            let reportType = report.type;
            if (reportType == "height") {
                let obj = {
                    value: report.data.value,
                    date: report.date_added,
                    unit: report.data.unit
                }
                measurementData.height.push(obj);
            } else if (reportType == "weight") {
                let obj = {
                    value: report.data.value,
                    date: report.date_added,
                    unit: report.data.unit
                }
                measurementData.weight.push(obj);

            } else if (reportType == "blood_pressure") {
                let systolicobj = {
                    value: report.data.systolic,
                    date: report.date_added,
                    unit: report.data.unit

                }
                let diastolicobj = {
                    value: report.data.diastolic,
                    date: report.date_added,
                    unit: report.data.unit
                }

                measurementData.bloodpressure.systolic.push(systolicobj);
                measurementData.bloodpressure.diastolic.push(diastolicobj);
            }
        });
        displayGraph('Height');

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

//R
function onclickData(event){
	let reportselectedblock = document.getElementsByClassName("report__clicked")[0];
    var content = lineChart.getElementAtEvent(event);
    if(content[0]){
    	var chartData= content[0]['_chart'].config.data;
    	var index = content[0]['_index'];
    	console.log(content);
    	console.log(chartData);
    	if((chartData.datasets[0].label).includes('Height') || (chartData.datasets[0].label).includes('Weight')){
    		var measurement = chartData.datasets[0].label;
        	var date = chartData.labels[index];
            var value = chartData.datasets[0].data[index];
    	} else {
    		var measurement1 = chartData.datasets[0].label;
    		var measurement2 = chartData.datasets[1].label;
    		var value1 = chartData.datasets[0].data[index];
    		var value2 = chartData.datasets[1].data[index];
    		var date = chartData.labels[index];
    		let returned = `
    			<div> Systolic: ${measurement1}</div>
        		`
    		reportselectedblock.innerHTML= returned;
    	}
    	
    	
    }
}



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


function returnArray(fieldname) {
    let arrayvalue1 = [];
    let arrayvalue2 = [];
    let date = [];
    if(config.data.datasets.length > 1) {
	    config.data.datasets.splice(1, 1);
	}
    if (fieldname == 'Height' || fieldname == 'Weight') {
        measurementData[fieldname.toLowerCase()].forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.value);
            date.push(fieldnamedata.date.split(" ")[0]);
        });
        config.data.datasets[0].data = arrayvalue1;
        config.data.labels = date;
        
    } else {
        measurementData.bloodpressure.systolic.forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.value);
            date.push((fieldnamedata.date.split(" ")[0]));
        });
        measurementData.bloodpressure.diastolic.forEach((fieldnamedata) => {
            arrayvalue2.push(fieldnamedata.value);
        });
        
        //Adding the systolic values into dataset[0]
        config.data.datasets[0].data = arrayvalue1;
        
    	if(config.data.datasets.length > 1) {
    	    config.data.datasets.splice(1, 1);
    	}
        addDataset(arrayvalue2);
        config.data.labels = date;
    }

}


//Adds a dataset to the line chart. Used to visualize both Systolic and Diastolic.
function addDataset(datasetvalue) {
	
	//Creates the dataset with unfilled data values.
    var secondDataset = {
    		label: 'Diastolic ( mm Hg )',
            fill: false,
            backgroundColor: window.chartColors.yellow,
            borderColor: window.chartColors.yellow,
            data: []
    };

    //Adding data  values into the second dataset. Loops the array datasetvalue.
    for (var index = 0; index < datasetvalue.length; ++index) {
        secondDataset.data.push(datasetvalue[index]);
    }

    config.data.datasets.push(secondDataset);
}


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
