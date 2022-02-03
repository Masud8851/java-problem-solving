// for loop
for (var i = 0; i < 10; i++) {
	console.log("Go", i, "Step");
}

// do...while
var startingPoint = 15;
do {
	console.log("Print", startingPoint);
	++startingPoint;
} while (startingPoint <= 30);

var zeroPoint = 15;
do {
	++zeroPoint;
	console.log("Go", zeroPoint);
	++zeroPoint;
} while (zeroPoint <= 30);
console.log("Finish");

// while
var num = 20;
while (num < 12) {
	console.log("True");
	num++;
}
console.log("False");
