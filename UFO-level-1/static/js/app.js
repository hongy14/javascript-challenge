// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var inputField = d3.select("#datetime");

button.on("click", filterData);
form.on("submit", filterData);

function filterData () {
    d3.event.preventDefault();
    d3.select("tbody").text("");
    var inputDate = inputField.property("value");
    //console.log(inputDate);
    var result = tableData.filter(row => row.datetime===inputDate);
    console.log(result);
    var resultRow = result.forEach(element => {
        var row = d3.select("tbody").append("tr");
        Object.entries(element).forEach(([key, value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });  
};