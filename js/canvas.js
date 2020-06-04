
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth*0.55;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

var minRadius = 5;
var maxRadius = 40;
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // draw() method
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = "#3586ff";
        c.strokeStyle = "#3586ff";
        c.stroke();
        c.fill();
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var cirArr = [];
var balls = 40;

for(let i=0;i<balls;i++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5)*2; //speed = X-axis
    var dy = (Math.random() - 0.5)*1.5; //Y-axis
    cirArr.push(new Circle(x, y, dx, dy, 30));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(let i=0; i<cirArr.length;i++)
        cirArr[i].update();
}

animate();