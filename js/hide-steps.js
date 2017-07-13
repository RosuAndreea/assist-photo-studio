$(document).ready(function(){
	$('.container').load("#office-cont");
	$('#services-panel').hide();
	$('#calendar-cont').hide();
	$('#details-cont').hide();
	$('#confirm').hide();

});

$(document).ready(function(){
	$('.acc-btn').click(function(){
		$('#office-cont').hide();
		$('#services-panel').show();
	});
});

$(document).ready(function(){
	$('.btn-select').click(function(){
		$('#services-panel').hide();
		$('#calendar-cont').show();
	});
});

$(document).ready(function(){
	$('.btn-right').click(function(){
		$('#calendar-cont').hide();
		$('#details-cont').show();
	});
});

$(document).ready(function(){
	$('.btn-left').click(function(){
		$('#calendar-cont').hide();
		$('#services-panel').show();
	});
});

$(document).ready(function(){
	$('#back').click(function(){
		$('#details-cont').hide();
		$('#calendar-cont').show();
	});
});

$(document).ready(function(){
	$('#continue').click(function(){
		$('#details-cont').hide();
		$('#confirm').show();
	});
});