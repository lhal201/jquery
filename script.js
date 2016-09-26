	console.log("ready about to start")
$(document).ready(function() {
	
    $('div').mouseenter(function() {
        $('div').fadeTo('slow',1.00);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('slow', 0.5);
    });
	console.log("ready has completed")
});
