function factorial(n) {
	let factorial = 1;
	if (n >= 1) {
		for (let i = 1; i <= n; i++) {
			factorial = factorial * i;
			console.log(i, " factorial = ", factorial);
		}
	}
	console.log("Finally we get,", n, " Factorial = ", factorial);
}

factorial(5);
