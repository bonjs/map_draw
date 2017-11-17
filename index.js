


// 创建一个节点

var canvas = document.createElement('canvas');
canvas.height = 200;
canvas.width = 200;


var ctx = canvas.getContext('2d');

var grd = ctx.createRadialGradient(100, 100, 1, 100, 100, 100);

grd.addColorStop(0, 'rgba(0,0,0,1)');
grd.addColorStop(1, 'rgba(0,0,0,0)');

//使用经向渐变
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 200, 200);


document.body.appendChild(canvas);
