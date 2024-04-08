var figlet = require("figlet");

var text = process.argv.slice(2).join(" ");

figlet(text, function(err, data) {
	if (err) {
		console.log("Something went wrong...");
		console.dir(err);
		return;
	}
	console.log(data);
});