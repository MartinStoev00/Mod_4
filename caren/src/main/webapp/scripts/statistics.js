Chart.defaults.global.defaultFontColor = '#434343';
Chart.defaults.global.defaultFontFamily = 'Arial';
//Different colors
window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    yellowopacity: 'rgb(255, 205, 86, 0.65)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    blueopacity: 'rgb(54, 162, 235, 0.65)'
};

let ctxgraph = document.getElementById('canvas');
//To retrieve values from the canvas. Calls onclickData();
ctxgraph.onclick = onclickData;
var ctx = ctxgraph.getContext('2d');


let ctxgraphbar = document.getElementById('changescanvas');
var ctxbar = ctxgraphbar.getContext('2d');


let initData;
let from_date = document.getElementsByClassName("statistics__date")[0];
let end_date = document.getElementsByClassName("statistics__date")[1];


//JSON format for all graph data
let measurementData = {
    weight: [],
    height: [],
    bloodpressure: {
        systolic: [],
        diastolic: []
    }
};

//line Graph Configuration
let lineConfig = {
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

let barConfig = {
		type: 'bar',
		title: 'Changes since last measurement',
		data: {
			labels: ['Previous','Current'],
			datasets: [{
				backgroundColor: window.chartColors.blueopacity,
	            borderColor: window.chartColors.blue,
				label: 'default',
				fill: true,
				data:[]
			}]
		},
		options: {
			legend: {
	            display: false
	         },
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
	            	gridLines: {
	                    color: "rgba(0, 0, 0, 0)",
	                },
	                display: true,
	                scaleLabel: {
	                    display: true,
	                    labelString: 'Date'
	                }
	            }],
	            yAxes: [{
	            	ticks : {
	            		suggestedMin: 0,
		            	suggestMax: 250
	            	},
	            	gridLines: {
	                    color: "rgba(0, 0, 0, 0)",
	                },
	                display: true,
	                scaleLabel: {
	                    display: true,
	                    labelString: 'default'
	                }
	            }]
	        }
	    }
}

export function statistics(records) {

	if(window.lineChart){
		window.lineChart.destroy();
	}
	initData = records;
	
	insertIntoJSON(records);
	window.lineChart = new Chart(ctx, lineConfig);
	
	window.barChart = new Chart(ctxbar, barConfig);

	console.log(measurementData);
	
	
	displayGraph('height');
    
    
};

function insertIntoJSON(records){
	measurementData = {
			weight: [],
			height: [],
			bloodpressure: {
				systolic: [],
				diastolic: []
			}
		};
		
	    records.forEach((report) => {
	    	
	        let reportType = report.type;
	        let dataformatted = report.data.replace(/\\/g, ``);
	        if(!dataformatted.includes("text")){
	        	dataformatted = JSON.parse(dataformatted);
	        }
	        if (reportType == "height" || reportType == "weight") {
	        	
	            let obj = {
	                value: dataformatted.value,
	                date: report.date_added,
	                unit: dataformatted.unit,
	                rid: report.record_id
	            }
	            measurementData[reportType].push(obj);

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

}


function onclickData(event){
	let reportselectedblock = document.getElementsByClassName("report__clicked")[0];
    var content = lineChart.getElementAtEvent(event);
    if(content[0]){
    	console.log(content[0]);
    	var chartData= content[0]['_chart'].config.data;
    	var index = content[0]['_index'];
    	let rid;
    	if((chartData.datasets[0].label).includes('Height') || (chartData.datasets[0].label).includes('Weight')){
            rid = chartData.datasets[0].rid[index];
    	} else {
            rid = chartData.datasets[0].rid[index];
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
    if(typebutton == 'height' || typebutton == 'weight' ){
    	if(!measurementData[typebutton].length == 0){
    		returnArray(typebutton);
    		lineConfig.options.scales.yAxes[0].scaleLabel.labelString = typebutton.charAt(0).toUpperCase() + typebutton.slice(1) + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
            lineConfig.data.datasets[0].label = typebutton.charAt(0).toUpperCase() + typebutton.slice(1) + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
            from_date.value = measurementData[typebutton.toLowerCase()][0].date.split(" ")[0];
            end_date.value = measurementData[typebutton.toLowerCase()][measurementData[typebutton.toLowerCase()].length - 1].date.split(" ")[0];

            barConfig.options.scales.yAxes[0].scaleLabel.labelString = typebutton.charAt(0).toUpperCase() + typebutton.slice(1) + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
            barConfig.data.datasets[0].label = typebutton.charAt(0).toUpperCase() + typebutton.slice(1) + " ( " + measurementData[typebutton.toLowerCase()][0].unit + " )";
            
    	} else {
    		chart.clear();
    		
    		console.log("No records nibba");
    	}  
    } else {
    	if(!measurementData.bloodpressure.systolic.length == 0){
    		returnArray(typebutton);
        	lineConfig.options.scales.yAxes[0].scaleLabel.labelString = typebutton.charAt(0).toUpperCase() + typebutton.slice(1) + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
            lineConfig.data.datasets[0].label = "Systolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
            lineConfig.data.datasets[1].label = "Diastolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
            from_date.value = measurementData.bloodpressure.systolic[0].date.split(" ")[0];
            end_date.value = measurementData.bloodpressure.systolic[measurementData.bloodpressure.systolic.length - 1].date.split(" ")[0];

         barConfig.options.scales.yAxes[0].scaleLabel.labelString = typebutton.charAt(0).toUpperCase() + typebutton.slice(1) + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
            barConfig.data.datasets[0].label = "Systolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
            barConfig.data.datasets[1].label = "Diastolic" + " ( " + measurementData.bloodpressure.systolic[0].unit + " )";
            
    	}else {
    		
    		console.log("No records nibba");
    	}
    	
    }
    
    window.lineChart.update();
    window.barChart.update();
}


function returnArray(fieldname) {
    let arrayvalue1 = [];
    let arrayvalue2 = [];
    let ridvalue = [];
    let date = [];
    if(lineConfig.data.datasets.length > 1 || barConfig.data.datasets.length > 1) {
	    lineConfig.data.datasets.splice(1, 1);
	    barConfig.data.datasets.splice(1, 1);
	}
    
    if (fieldname == 'height' || fieldname == 'weight') {
    		measurementData[fieldname].forEach((fieldnamedata) => {
                arrayvalue1.push(fieldnamedata.value);
                ridvalue.push(fieldnamedata.rid);
                date.push(fieldnamedata.date.split(" ")[0]);
            });
            lineConfig.data.datasets[0].data = arrayvalue1;
            lineConfig.data.datasets[0].rid = ridvalue;
            lineConfig.data.labels = date;
        
          if(arrayvalue1.length > 1){
            	barConfig.data.datasets[0].data = arrayvalue1.slice(arrayvalue1.length-2, arrayvalue1.length);
            }
            
            
        
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
            lineConfig.data.datasets[0].data = arrayvalue1;
            lineConfig.data.datasets[0].rid = ridvalue;
            
        	if(lineConfig.data.datasets.length > 1) {
        	    lineConfig.data.datasets.splice(1, 1);
        	}
            addLineDataset(arrayvalue2, ridvalue);
            lineConfig.data.labels = date;
            
            
            if(arrayvalue1.length > 1){
            	barConfig.data.datasets[0].data = arrayvalue1.slice(arrayvalue1.length-2, arrayvalue1.length);
            	addBarDataset(arrayvalue2.slice(arrayvalue2.length-2, arrayvalue2.length));
            }

    	}
        

}


//Adds a dataset to the line chart. Used to visualize both Systolic and Diastolic.
function addLineDataset(datasetvalue, ridvalue) {
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
    //Adding data  values into the line graph's second dataset. Loops the array datasetvalue.
    for (var index = 0; index < datasetvalue.length; ++index) {
        secondDataset.data.push(datasetvalue[index]);
        secondDataset.rid.push(ridvalue[index]);
    }
    lineConfig.data.datasets.push(secondDataset);
}

function addBarDataset(datasetvalue){
    
    var secondDatasetBar = {
    	backgroundColor: window.chartColors.yellowopacity,
        borderColor: window.chartColors.yellow,	
		label: 'Diastolic ( mm Hg )',
		fill: true,
		data:[]
	}
    
    console.log(datasetvalue);
    
    for(var index = 0; index < datasetvalue.length; index++){
    	secondDatasetBar.data.push(datasetvalue[index]);
    }
    barConfig.data.datasets.push(secondDatasetBar);
    
    
}

function dataChange() {
	let start = new Date(from_date.value);
	let finish = new Date(end_date.value);
	console.log(start < finish);
	let otherData = initData;
	otherData = otherData.filter((recordItem)=>{
		let recordDate = new Date(recordItem.date_added.split(" ")[0]);
		return recordDate >= start && recordDate <= finish;
	});
	insertIntoJSON(otherData);
	let currentState = "";
	for(let num = 1; num < 4; num++) {
		if(document.getElementsByClassName("sidebar__link")[num].getAttribute("data-state") == "selected") {
			currentState = document.getElementsByClassName("sidebar__link")[num].getAttribute("data-link");
		}
	}
	console.log(currentState);
	displayGraph(currentState);
}

from_date.addEventListener("change", dataChange);
end_date.addEventListener("change", dataChange);
