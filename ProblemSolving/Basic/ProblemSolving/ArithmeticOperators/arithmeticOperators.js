let area;

// Rectangle area function
function areaOfRectangle(length, width) {
	area = length * width;
	console.log("Area of rectangle is  : ", area);
	return area;
}

// Circle area function
function areaOfCircle(length) {
	const PI = 3.1416;
	area = length * PI;
	console.log("Area of cicle is  : ", area);
	return area;
}

// Square area function
function areaOfSquare(length) {
	area = length * length;
	console.log("Area of square is  : ", area);
	return area;
}

areaOfRectangle(3, 5);
areaOfCircle(3);
areaOfSquare(3);
