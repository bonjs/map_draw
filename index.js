


// ����һ���ڵ�
function createNode() {
	var canvas = document.createElement('canvas');
	
	var width = height = 200;
	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');

	var grd = ctx.createRadialGradient(width / 2, height / 2, 1, width / 2, height / 2, 100);

	grd.addColorStop(0, 'rgba(0,0,0,1)');
	grd.addColorStop(1, 'rgba(0,0,0,0)');

	//ʹ�þ��򽥱�
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, width, height);
	
	return canvas;
}





// ʹ��drawImage��һ��canvas���Ƶ���һ��canvas��
var mainCanvas = document.createElement('canvas');
mainCanvas.height = 300;
mainCanvas.width = 300;

var mainCtx = mainCanvas.getContext('2d');


var node1 = createNode();
mainCtx.drawImage(node1, 0, 0);


document.body.appendChild(mainCanvas);
