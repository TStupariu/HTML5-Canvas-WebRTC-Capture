jQuery(document).ready(function($) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "80px Helvetica";
	ctx.fillText("Hello World",50,100);

	var stream = canvas.captureStream(25);
	document.querySelector('video').srcObject = stream;

	eraserClick = false;

	$("#canvas").click(function(event) {
		if (eraserClick) eraserClick = false
			else	eraserClick = true
		});

	$("#canvas").on('mousedown mousemove', function(event) {
		if (eraserClick) {
			mouseX = event.offsetX;
			mouseY = event.offsetY;
			console.log(mouseX, mouseY);
			ctx.fillStyle = "#FFFFFF";
			ctx.fillRect(mouseX-10, mouseY-10, 20, 20);
		}
	});
});