var figlet = require("figlet");
var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Please enter the text to be translated into Ascii Art: ", function(text) {
	figlet(text, function(err, data) {
		if (err) {
			console.log("Something went wrong...");
			console.dir(err);
			return;
		}
		console.log(data);
	});
	rl.close();
});