function functionName() {
	console.log("Function Calling");
}
functionName();

function addition(a, b) {
	var sum = a + b;
	return sum;
}
console.log(addition(4, 6));

function callMyName(name, callback) {
	var myAge = 23;
	callback(myAge);
	console.log("Is it interesting? Yes it is Mr." + name);
}
function hello(age) {
	console.log("I am passed through argument and my age is: " + age);
}
callMyName("Masudur Rahman", hello);
