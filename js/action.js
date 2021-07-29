$(document).ready(function(){
	$("#open-menu").on("click", function(){
		$(".ci-links").css({
			"right": "0"
		});
	});
	$("#close-menu").on("click", function(){
		$(".ci-links").css({
			"right": "-200%"
		});
	});
});