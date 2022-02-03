const person = {
	firstName: "Masudur",
	lastName: "Rahman",
	age: 23,
	eyeColor: "black",
	block: {
		name: "f",
	},
};

console.log(person);
console.log(person.firstName); /*Dot Notation*/
console.log(person["age"]); /*Bracket Notation*/

person.country = "Bangladesh"; /* Add new item */
console.log(person);

person.address = {
	home: "Dahaka",
	zipCode: 1207,
};
console.log(person.address);

person.Human = function () {
	console.log("Masud");
};
console.log(person.Human);

// access all item in object
for (item in person) {
	console.log(item);
}

// array in object
var objArr = {
	defaultName: "Masudur Rahman",
	nameList: ["Karim", "Rahim", "Jafor", "Sadik"],
	age: [12, 34, 34, 21],
};
console.log(objArr.nameList[1], objArr.age[1]);

// object in array
var arrObj = [
	"Masud",
	{
		name: "Rafiq",
		age: 23,
		job: "Developer",
	},
	"Bangladesh",
];
console.log(arrObj[1].name);
