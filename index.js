
var mainCanvas = document.getElementById('mainCanvas');
var mainCtx = mainCanvas.getContext('2d');

var n1 = createNode();
var n2 = createNode();

mainCtx.drawImage(n1, 0, 0);
mainCtx.drawImage(n2, 50, 50);
mainCtx.drawImage(n2, 130, 20);
mainCtx.drawImage(n2, 100, 120);

// 创建一个节点
function createNode() {
	var canvas = document.createElement('canvas');

	var width = 200,
	height = 200;
	canvas.height = height;
	canvas.width = width;
	var ctx = canvas.getContext('2d');

	var grd = ctx.createRadialGradient(width / 2, height / 2, 1, width / 2, height / 2, height / 2);

	grd.addColorStop(0, 'rgba(0,0,0,1)');
	grd.addColorStop(1, 'rgba(0,0,0,0)');
	//使用经向渐变
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, width, width);

	return canvas;
}
