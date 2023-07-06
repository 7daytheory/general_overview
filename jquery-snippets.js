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

//Scroll to top
$(".scrolltotop").click(function(event) {
	event.preventDefault();
    $("html").animate({ scrollTop: 0 }, "slow");
});

/**** Forms ******/

//Form submit and reset
$("#form_id")[0].submit();

//Prevent form from being submitted more than once
$("#form_id")[0].submit(function(event) {
	$("#form_id")[0].submit(function(event) {
    	return false;
    });
});