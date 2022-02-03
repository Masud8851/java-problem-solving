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
