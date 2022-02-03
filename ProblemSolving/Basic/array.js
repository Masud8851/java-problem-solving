// new array making
var array = new Array("Masud", 5, "Rifat", 8);
console.log(array);

// array declare
var anotherArray = [
	"Mango",
	"Apple",
	"Cat",
	"Apple",
	"Cat",
	"Apple",
	"Cat",
	"Apple",
	"Cat",
];
console.log(anotherArray);
console.log(anotherArray[2]);

// indexValue change
anotherArray[2] = "Jambura";
console.log(anotherArray);

for (var i = 0; i < anotherArray.length; i++) {
	console.log(anotherArray[i]);
}

// add last item to the array
anotherArray.push("Ridoy");
console.log(anotherArray);

// remove last item to the array
anotherArray.pop("Ridoy");
console.log(anotherArray);

// remove first item to the array
anotherArray.shift("Ridoy");
console.log(anotherArray);

// add first item to the array
anotherArray.unshift("Bablu");
console.log(anotherArray);

// array item index
var index = anotherArray.indexOf("Jambura");
console.log(index);

// remove item through index number
var removeItem = anotherArray.splice(2, 3); /* remove items from - to index */
console.log(removeItem); /* remove items */
console.log(anotherArray); /* final array after removing items */

//splice items add to new array
var defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = defaultArray.splice(3);
console.log(newArray); /* remove items storing array */
console.log(defaultArray); /* after removing default array */
