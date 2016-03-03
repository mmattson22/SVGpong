var pic = document.getElementById("vimg");
var b1 = document.getElementById("animate");
var id;

var drawB = function(){

	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var r = 5;
	c.setAttribute( "cx", 250 );
	c.setAttribute( "cy", 250 );
	c.setAttribute( "r", r );
	c.setAttribute( "fill", "red" );
	c.setAttribute( "stroke", "black" );

	pic.appendChild( c );

};
drawB();
//b1.addEventListener("click",drawB);
