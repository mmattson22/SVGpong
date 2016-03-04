var pic = document.getElementById("vimg");
var b1 = document.getElementById("animate");
var id;



var drawB = function(){

	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var r = 5;
	var dx = 1;
	var dy = 1;
	var cx = 250;
	var cy = 250;
	c.setAttribute( "cx", cx );
	c.setAttribute( "cy", cy );
	c.setAttribute( "r", r );
	c.setAttribute( "fill", "red" );
	c.setAttribute( "stroke", "black" );

	pic.appendChild( c );

	var bounce = function(){
		if (cx = 500)
			dx = -1;
		if (cx = 0)
			dx = 1;
		if (cy = 500)
			dy = -1;
		if (cy = 0)
			dy = 1;
		c.setAttribute("cx", (cx+dx));
		c.setAttribute("cy", (cy+dy));
	}

	id = setInterval(bounce, 640);
};
