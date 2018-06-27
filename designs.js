// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var inputRows;
var inputCols;

//this function builds the grids
function makeGrid() {
    var table = document.getElementById("pixelCanvas");
//when the submit button is clicked the table resets
    while(table.rows.length > 0)
        table.deleteRow(0);
    inputRows = document.getElementById("inputHeight").value;
    inputCols = document.getElementById("inputWeight").value;
    for (var i = 0; i < inputRows; i++) {
        var row_elem = table.insertRow(i);
        row_elem.setAttribute("class", "row");
        for (var j = 0; j < inputCols; j++) {
            var cell= row_elem.insertCell(j);
            cell.addEventListener('click', function(evt) {
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
    return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    makeGrid();
});
