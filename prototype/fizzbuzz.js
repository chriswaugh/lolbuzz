/*
	This is what I intended to build before writing a line of lolcode.
	Note: the variable names and logic have been altered _slightly_ to match
	the lolcode more closely.
*/

for (var numz = 1; numz != 101; numz++) {
	var rezult = ""

	if (0 === numz % 3) {
		rezult = "Fizz";
	}

	if (0 === numz % 5) {
		rezult += "Buzz";
	}

	if (rezult === "") {
		console.log(numz);
	}
	else {
		console.log(rezult);
	}
}