const canvas = document.getElementById('acetateDisc')
const c = canvas.getContext('2d')

c.fillStyle = "#3586ff";

canvas.width = 100;
canvas.height = 100;

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

function randomIntFromRange(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors)
{
  return colors[Math.floor(Math.random() * colors.length)]
}

// Event Listeners

/*addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})*/

addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if((document.URL).includes('index.html')===false && (document.URL).endsWith('.com')===false)
        //location.reload();
    init(canvas.width*0.5);
})

function DrawAcetateDisc(X,Y,Radius)
{
    c.fillStyle = "rgba(0,0,0,0.08)";
    c.beginPath();
    c.arc(X, Y, Radius/1.1, 2 * Math.PI, false);
    c.fill();

    c.beginPath();
    // if(document.URL.includes("index")==true)
    //   c.fillStyle = "#3586ff";
    // else
    c.fillStyle = "white";
    c.arc(X, Y, Radius/2.5, 2 * Math.PI, false);
    c.fill();

    c.beginPath();
    c.fillStyle = "rgba(0,0,0,0.9)";
    c.arc(X, Y, Radius/10, 2 * Math.PI, false);
    c.fill();

    
}

function Particle(x, y, radius,rad,color)
{
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radian = Math.random() * Math.PI*2;
    this.velocity = 0.01;
    this.distanceFromCenter = randomIntFromRange(rad/2,rad);

  this.draw = function(lastPoint)
  {
    // console.log(this.radius);
    c.beginPath();
    
    c.strokeStyle = this.color;
    c.lineWidth = this.radius/2;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(this.x, this.y)
    c.stroke();
    c.closePath()
  }

  this.update= function()
  {
    const lastPoint = {x:this.x, y:this.y};
    this.radian += this.velocity;

    this.x = x + Math.cos(this.radian) * this.distanceFromCenter;
    this.y = y + Math.sin(this.radian) * this.distanceFromCenter;
    this.draw(lastPoint);
  }
}

// Implementation
let particles = [];
function init(Radius)
{
  particles = []
  const radius = (Math.random() * 2) + 1;
  for (let i = 0; i < 30; i++)
  {
        particles.push(new Particle(canvas.width/2, canvas.height/2,radius,Radius,"White"));
        // console.log(particles);
  }
}

// Animation Loop
function animate()
{
  requestAnimationFrame(animate)

  c.fillStyle = "rgba(255,255,255,0.02)";
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  DrawAcetateDisc(canvas.width/2, canvas.height/2, canvas.width*0.5);
  particles.forEach(particle =>
  {
    particle.update();
  })
}

// console.log(canvas.width);
init(canvas.width*0.5);
animate()