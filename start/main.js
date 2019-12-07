// 设定画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 设定画布长宽
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 生成随机颜色的函数
function randomColor() {
    return 'rgb(' +
        random(0, 255) + ', ' +
        random(0, 255) + ', ' +
        random(0, 255) + ')';
}
//建立球的模型
/* 
  x/y ---小球开始的起始坐标
  velX/velY -- 小球水平/垂直的速度
  color -- 颜色
  size --大小
*/
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size
}
//给小球的原型添加方法 --- 画一个小球
Ball.prototype.draw = function() {
    //开始路径
    ctx.beginPath();
    //定义颜色
    ctx.fillStyle = this.color;
    //开始画圆弧  x/y--开始位置  size--半径  0/2 * Math.PI -- 开始/结束时的夹角
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //填充
    ctx.fill();
};
//跟新小球状态
Ball.prototype.update = function() {
    if (this.x + this.size >= width) {
        this.velX = -this.velX
    }
    if (this.x - this.size <= 0) {
        this.velX = -this.velX
    }
    if (this.y + this.size >= height) {
        this.velY = -this.velY
    }
    if (this.y - this.size <= 0) {
        this.velY = -this.velY
    }
    this.x += this.velX;
    this.y += this.velY;
};
Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            // this.x 
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance <= this.size + balls[j].size) {
                this.color = balls[j].color = randomColor();
                // this.velX = -this.velX;
                // this.velY = -this.velY;
                // balls[j].velX = -balls[j].velX;
                // balls[j].velY = -balls[j].velY;
            }
        }
    }
}
var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 50) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-7, 7),
            random(-7, 7),
            randomColor(),
            random(10, 20)
        );
        balls.push(ball)
    };
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    };
    requestAnimationFrame(loop)
}

loop();