


// ����һ���ڵ�

var canvas = document.createElement('canvas');
canvas.height = 200;
canvas.width = 200;

var ctx = canvas.getContext('2d');

var grd = ctx.createRadialGradient(100, 100, 1, 100, 100, 100);

grd.addColorStop(0, 'rgba(0,0,0,1)');
grd.addColorStop(1, 'rgba(0,0,0,0)');

//ʹ�þ��򽥱�
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 200, 200);



// ʹ��drawImage��һ��canvas���Ƶ���һ��canvas��
var mainCanvas = document.createElement('canvas');
mainCanvas.height = 300;
mainCanvas.width = 300;

var mainCtx = mainCanvas.getContext('2d');

mainCtx.drawImage(canvas, 0, 0);


document.body.appendChild(mainCanvas);
