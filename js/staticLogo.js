const canvasLogo = document.querySelector('canvas')
const cntxt = canvasLogo.getContext('2d')

canvasLogo.width = window.innerWidth*0.1;
canvasLogo.height = window.innerHeight*0.15;

addEventListener('resize', () => 
{
  canvasLogo.width = window.innerWidth
  canvasLogo.height = window.innerHeight

  DrawLogo();
})

DrawLogo();

function DrawLogo()
{	
	var X = 40, Y = 40, Radius = 22;

	DrawSqaure(X,Y);
	DrawBackgroundCircles(X,Y);
	
	cntxt.fillStyle = "rgba(255,255,255,0.87)";
	cntxt.beginPath();
	cntxt.arc(X, Y, Radius, 2 * Math.PI, false);
	cntxt.fill();
	console.log(parseInt(Radius));

	var grd = cntxt.createLinearGradient(0, 0, 200, 0);
	grd.addColorStop(0, "#064469");
	grd.addColorStop(1, "#8D18FF");

	cntxt.beginPath();
	cntxt.strokeStyle = grd;
	cntxt.fillStyle = grd;
	cntxt.lineWidth = Radius/8;

	let newX = X-(Radius/2.5);
	let newY = (Y+Radius/3);

	cntxt.ellipse(newX-1, newY+1, 3, 4, Math.PI / 2, 0, 2 * Math.PI);
	cntxt.fill();

	cntxt.beginPath();
	cntxt.strokeStyle = grd;

	cntxt.moveTo(newX+2, newY);

	newY = Y-(Radius/3);

	cntxt.lineTo(newX+5,newY);

	newX = X+(Radius/3)
	cntxt.lineTo(newX+2, newY-4);

	newY = (Y+Radius/3);
	cntxt.lineTo(newX-1, newY-4);
	cntxt.stroke();

	cntxt.beginPath();
	cntxt.fillStyle =grd;
	cntxt.ellipse(newX-4, newY-3, 3, 4, Math.PI / 2, 0, 2 * Math.PI);
	cntxt.fill();
}

function DrawSqaure(X,Y)
{
	var rectX = X-30;
	var rectY = Y-30;
	var rectWidth = 60;
	var rectHeight = 60;
	var cornerRadius = 20;

	// Set faux rounded corners
	cntxt.fillStyle = "White";
	cntxt.strokeStyle = "White";
	cntxt.lineJoin = "round";
	cntxt.lineWidth = cornerRadius;

	// Change origin and dimensions to match true size (a stroke makes /the shape a bit larger)
	cntxt.strokeRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
	cntxt.fillRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
}

function DrawBackgroundCircles(X,Y)
{
	cntxt.fillStyle = "rgba(0,255,0,0.4)";
	cntxt.beginPath();
	cntxt.arc(X-15, Y-15, 10, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(255,255,0,0.6)";
	cntxt.beginPath();
	cntxt.arc(X, Y-12, 15, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(255,0,0,0.6)";
	cntxt.beginPath();
	cntxt.arc(X-14, Y, 15, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(0,0,255,0.6)";
	cntxt.beginPath();
	cntxt.arc(X, Y+14, 15, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(14,150,250,0.6)";
	cntxt.beginPath();
	cntxt.arc(X+14, Y, 15, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(0,150,250,0.6)";
	cntxt.beginPath();
	cntxt.arc(X+14, Y+14, 10, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(150,0,250,0.6)";
	cntxt.beginPath();
	cntxt.arc(X+14, Y-14, 10, 2 * Math.PI, false);
	cntxt.fill();

	cntxt.fillStyle = "rgba(150,0,250,0.6)";
	cntxt.beginPath();
	cntxt.arc(X-14, Y+14, 10, 2 * Math.PI, false);
	cntxt.fill();
}