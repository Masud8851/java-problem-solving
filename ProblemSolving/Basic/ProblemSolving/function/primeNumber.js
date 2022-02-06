function getPrimeNumber(primeNumber) {
	PrimeFirstLoop: for (
		let outerNumber = 2;
		outerNumber <= primeNumber;
		outerNumber++
	) {
		for (let innerNumber = 2; innerNumber < outerNumber; innerNumber++) {
			if (outerNumber % innerNumber == 0) {
				continue PrimeFirstLoop;
			}
		}
		console.log(outerNumber + " is a Prime Number");
	}
}

getPrimeNumber(10);
