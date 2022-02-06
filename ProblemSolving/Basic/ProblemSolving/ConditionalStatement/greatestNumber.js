// Find the greatest number from 3 values
var a = 30;
var b = 3;
var c = 303;

if (a > b && a > c) {
	console.log("Greatest Number here : The first given number is", a);
} else if (b > a && b > c) {
	console.log("Greatest Number here : The second given number is", c);
} else {
	console.log("Greatest Number here : The third given number is", c);
}

// Grading System
var avg_score = 75;
if (avg_score >= 80) {
	console.log("Score: ", avg_score, " Grade : A+");
} else if (avg_score >= 75 && avg_score < 80) {
	console.log("Score: ", avg_score, " Grade : A");
} else if (avg_score >= 70 && avg_score < 75) {
	console.log("Score: ", avg_score, " Grade : A-");
} else if (avg_score >= 65 && avg_score < 70) {
	console.log("Score: ", avg_score, " Grade : A-");
} else if (avg_score >= 60 && avg_score < 65) {
	console.log("Score: ", avg_score, " Grade : B+");
} else if (avg_score >= 55 && avg_score < 60) {
	console.log("Score: ", avg_score, " Grade : B");
} else if (avg_score >= 50 && avg_score < 55) {
	console.log("Score: ", avg_score, " Grade : B-");
} else if (avg_score >= 45 && avg_score < 50) {
	console.log("Score: ", avg_score, " Grade : C+");
} else if (avg_score >= 40 && avg_score < 45) {
	console.log("Score: ", avg_score, " Grade : C");
} else if (avg_score >= 33 && avg_score < 40) {
	console.log("Score: ", avg_score, " Grade : C");
} else {
	console.log("Grade : F");
}

// Switch Case

var weekend = "Sunday";
switch (weekend) {
	case "Saturday":
		console.log("Last day before weekend");
		break;
	case "Sunday":
		console.log("Today is weekend");
		break;
	case "Monday":
		console.log("First day of the week");
		break;
	case "Tuesday":
		console.log("Second day of the week");
		break;
	case "Wednesday":
		console.log("Third day of the week");
		break;
	case "Thursday":
		console.log("Fourth day of the week");
		break;
	case "Friday":
		console.log("Fifth day of the week");
		break;
	default:
		console.log("Last day of the week");
}
