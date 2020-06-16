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
            pointRadius: 6,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [],
            rid: []
        }]
    },
    options: {
        responsive: true,
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

export default function statistics(records) {
	Chart.defaults.global.defaultFontColor = '#434343';
	Chart.defaults.global.defaultFontFamily = 'Arial';
	//Chart.defaults.global.defaultFontSize = '20';
    var ctx = document.getElementById('canvas').getContext('2d');
    
    //To retrieve values from the canvas. Calls onclickData();
    ctxgraph = document.getElementById('canvas');
    ctxgraph.onclick = onclickData;

    records.sort((a, b) => {
        let one = new Date(a.date_added);
        let two = new Date(b.date_added)
        if(one < two) { return -1; }
        if(one > two) { return 1; }
        return 0;
    });
    records.forEach((report) => {
    	
        let reportType = report.type;
        let dataformatted = report.data.replace(/\\/g, ``);
        if(!dataformatted.includes("text")){
        	dataformatted = JSON.parse(dataformatted);
        }
        if (reportType == "height") {
            let obj = {
                value: dataformatted.value,
                date: report.date_added,
                unit: dataformatted.unit,
                rid: report.record_id
            }
            measurementData.height.push(obj);
        } else if (reportType == "weight") {
            let obj = {
                value: dataformatted.value,
                date: report.date_added,
                unit: dataformatted.unit,
                rid: report.record_id
            }
            measurementData.weight.push(obj);

        } else if (reportType == "blood_pressure") {
            let systolicobj = {
                value: dataformatted.systolic,
                date: report.date_added,
                unit: dataformatted.unit,
                rid: report.record_id

            }
            let diastolicobj = {
                value: dataformatted.diastolic,
                date: report.date_added,
                unit: dataformatted.unit,
                
            }
            measurementData.bloodpressure.systolic.push(systolicobj);
            measurementData.bloodpressure.diastolic.push(diastolicobj);
        }
    });
    
    window.lineChart = new Chart(ctx, config);
    displayGraph('height');
};
//R
function onclickData(event){
	let reportselectedblock = document.getElementsByClassName("report__clicked")[0];
    var content = lineChart.getElementAtEvent(event);
    if(content[0]){
    	var chartData= content[0]['_chart'].config.data;
    	var index = content[0]['_index'];
    	let rid;
    	if((chartData.datasets[0].label).includes('Height') || (chartData.datasets[0].label).includes('Weight')){
    		var measurement = chartData.datasets[0].label;
        	var date = chartData.labels[index];
            var value = chartData.datasets[0].data[index];
            rid = chartData.datasets[0].rid[index];
    	} else {
            rid = chartData.datasets[0].rid[index];
    		var measurement1 = chartData.datasets[0].label;
    		var measurement2 = chartData.datasets[1].label;
    		var value1 = chartData.datasets[0].data[index];
    		var value2 = chartData.datasets[1].data[index];
    		var date = chartData.labels[index];
    	}
		console.log("What we have:" + rid);
		let postsBlocks = document.getElementsByClassName("post");
		Array.prototype.forEach.call(postsBlocks, (block) => {
			block.style.display = "none";
			if(block.getAttribute("data-id") == rid) {
				block.style.display = "flex";
			}
		});
    }
}



export function displayGraph(typebutton){
    returnArray(typebutton);
    if(typebutton == 'height' || typebutton == 'weight'){
    	config.options.scales.yAxes[0].scaleLabel.labelString = typebutton.replace("h", "H").replace("w","W") + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
        config.data.datasets[0].label = typebutton.replace("h", "H").replace("w","W") + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
    } else {
    	config.options.scales.yAxes[0].scaleLabel.labelString = typebutton.replace("_", " ").replace("b","B").replace("p","P") + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
        config.data.datasets[0].label = "Systolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
        config.data.datasets[1].label = "Diastolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
    }
    
    window.lineChart.update();
}


function returnArray(fieldname) {
    let arrayvalue1 = [];
    let arrayvalue2 = [];
    let ridvalue = [];
    let date = [];
    if(config.data.datasets.length > 1) {
	    config.data.datasets.splice(1, 1);
	}
    if (fieldname == 'height' || fieldname == 'weight') {
        measurementData[fieldname.toLowerCase()].forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.value);
            ridvalue.push(fieldnamedata.rid);
            date.push(fieldnamedata.date.split(" ")[0]);
        });
        config.data.datasets[0].data = arrayvalue1;
        config.data.datasets[0].rid = ridvalue;
        config.data.labels = date;
        
    } else {
        measurementData.bloodpressure.systolic.forEach((fieldnamedata) => {
            arrayvalue1.push(fieldnamedata.value);
            ridvalue.push(fieldnamedata.rid);
            date.push((fieldnamedata.date.split(" ")[0]));
        });
        measurementData.bloodpressure.diastolic.forEach((fieldnamedata) => {
            arrayvalue2.push(fieldnamedata.value);
        });
        
        //Adding the systolic values into dataset[0]
        config.data.datasets[0].data = arrayvalue1;
        config.data.datasets[0].rid = ridvalue;
        
    	if(config.data.datasets.length > 1) {
    	    config.data.datasets.splice(1, 1);
    	}
        addDataset(arrayvalue2, ridvalue);
        config.data.labels = date;
    }

}


//Adds a dataset to the line chart. Used to visualize both Systolic and Diastolic.
function addDataset(datasetvalue, ridvalue) {
	//Creates the dataset with unfilled data values.
    var secondDataset = {
    		label: 'Diastolic ( mm Hg )',
            fill: false,
            pointRadius: 6,
            backgroundColor: window.chartColors.yellow,
            borderColor: window.chartColors.yellow,
            data: [],
            rid: []
    };
    //Adding data  values into the second dataset. Loops the array datasetvalue.
    for (var index = 0; index < datasetvalue.length; ++index) {
        secondDataset.data.push(datasetvalue[index]);
        secondDataset.rid.push(ridvalue[index]);
    }

    config.data.datasets.push(secondDataset);
}