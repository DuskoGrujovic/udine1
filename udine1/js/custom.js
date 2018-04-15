// Azienda counter 
$('.count-this').each(function () {

	// Start the counting from a specified number - in this case, 0!
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
    	// Speed of counter in ms, default animation style
        duration: 2000,
        easing: 'swing',
		format:9999,
        step: function (now) {
        	// Round up the number
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function() {
	
    var numberValue1 = $('#count-1').val();
	var numberValue2 = $('#count-2').val();
	var numberValue3 = $('#count-3').val();
	if (numberValue1 > 10 && numberValue1 < 100) {
		$('#count-container-1 .zero').append(0);
		$('#count-container-1 .zero').append(0);
	} else if (99 < numberValue1 && numberValue1 < 1000 ){
		$('#count-container-1 .zero').append(0);
	} else if (numberValue1 < 10) {
		$('#count-container-1 .zero').append(0);
		$('#count-container-1 .zero').append(0);
		$('#count-container-1 .zero').append(0);
	}
	if (numberValue2 > 10 && numberValue2 < 100) {
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
	} else if (99 < numberValue2 && numberValue2 < 1000 ){
		$('#count-container-2 .zero').append(0);
	} else if (numberValue2 < 10) {
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
		$('#count-container-2 .zero').append(0);
	}
	if (numberValue3 > 10 && numberValue3 < 100) {
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
	} else if (99 < numberValue3 && numberValue3 < 1000 ){
		$('#count-container-3 .zero').append(0);
	} else if (numberValue3 < 10) {
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
		$('#count-container-3 .zero').append(0);
	}
	
});