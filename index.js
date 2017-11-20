
var mainCanvas = document.getElementById('mainCanvas');
var mainCtx = mainCanvas.getContext('2d');

console.time()

for(var i = 0; i < 30000; i ++) {
	var n1 = createNode(mainCtx);
}
console.timeEnd();




// 创建一个节点
function createNode(ctx) {
	
	var alpha = 0.5;
	
	var x = 10;
	var y = 10;
	
	var radius = 5;
	
	ctx.shadowColor = ('rgba(0,0,0,' + alpha + ')');
	//
	ctx.shadowOffsetX = 15000;
	ctx.shadowOffsetY = 15000;
	ctx.shadowBlur = radius;

	ctx.beginPath();
	ctx.arc(x - 15000, y - 15000, radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();

}
