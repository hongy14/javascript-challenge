// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("#form");

var dateField = d3.select("#datetime");

var filter = {};

function saveFilter() {
    var changedFields = d3.select(this).select("input");
    var inputValue = changedFields.property("value");
    var inputID = changedFields.attr("id");
    //console.log(changedFields);
    //console.log(inputID);
    //console.log(inputValue);

    if (inputValue) {
        filter[inputID] = inputValue;
    } else {
        delete filter[inputID];
    };
    console.log(filter);

    filterData();
    //loadData();
};

d3.selectAll(".filter").on("change", saveFilter);

function filterData( ){
    var filteredData = tableData;
    var filterList = Object.entries(filter);

    filterList.forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);

        console.log(filteredData);

        d3.select("tbody").html("");
        var resultRow = filteredData.forEach(element => {
            d3.selectAll("li");   
            var row = d3.select("tbody").append("tr");
            Object.values(element).forEach( value =>{
                var cell = row.append("td");
                cell.text(value);    
            });
        });
    });
};