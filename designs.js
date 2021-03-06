function makeGrid() {
	var canvas, cell, gridHeight, gridWidth, rows;
	canvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();
	canvas.children().remove()
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	rows = $('tr');
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	cell = canvas.find('td');
	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
}
// When size is submitted by the user, call makeGrid()
var submit;
submit = $('input[type="submit"]')
submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});

