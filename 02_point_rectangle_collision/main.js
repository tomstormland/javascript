var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var mouseX = 0;
var mouseY = 0;

var intersection = false;

var rectWidth = 100;
var rectHeight = 100;

var rectX = canvas.width / 2 - rectWidth / 2;
var rectY = canvas.width / 2 - rectHeight / 2;

function onMousemove(event) {
  var rect = canvas.getBoundingClientRect();

  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
}

function drawRectangle() {
  ctx.beginPath();
  ctx.rect(rectX, rectY, rectWidth, rectHeight);
  if (intersection) {
    ctx.fillStyle = '#9500DD';
  } else {
    ctx.fillStyle = '#0095DD';
  }
  ctx.fill();
  ctx.closePath();
}

function checkPointRectIntersection(point, rect) {
  if (point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.width) {
    return true;
  }
  return false;
}

function draw() {

  drawRectangle();

  intersection = checkPointRectIntersection({ x: mouseX, y: mouseY }, { x: rectX, y: rectY, width: rectWidth, height: rectHeight});

}

window.addEventListener('mousemove', onMousemove, false);

setInterval(draw, 10);

