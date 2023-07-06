// Get and Post Requests

$.get("example.php?name=david", function(data, status) {
	// output the result to console
	console.log(data, status);
});
$.post("example.php", {
	"name": "David"
}, function(data, status) {
	// output the result to console
	console.log(data, status);
});