"use strict";

function getPrimeNumber(primeNumber) {
  PrimeFirstLoop: for (var outerNumber = 2; outerNumber <= primeNumber; outerNumber++) {
    for (var innerNumber = 2; innerNumber < outerNumber; innerNumber++) {
      if (outerNumber % innerNumber == 0) {
        continue PrimeFirstLoop;
      }
    }

    console.log(outerNumber + " is a Prime Number");
  }
}

getPrimeNumber(10);