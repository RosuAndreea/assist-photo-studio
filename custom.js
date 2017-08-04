(function () {

	function servicesBack() {
		$(".services").hide();
		$("#office-cont").show();
	}

	function calendarBack() {
		$("#calendar-cont").hide();
		$(".services").show();
	}
	function detailsNext() {
		$("#calendar-cont").hide();
		$("#details-cont").show();
		window.renderOfficeAndService('#details-list-form');
	    window.renderSelectedDate();
	}
	function timeBack() {
		$("#calendar-cont").show();
		$("#details-cont").hide();
	}
	function confirmNext() {
		$("#confirm").show();
		$("#details-cont").hide();
		window.renderConfirmationPage();
	}

	function render() {
		window.mySelection = {};
		window.renderOffices();
	}

	render();

	window.servicesBack = servicesBack;
	window.calendarBack = calendarBack;
	window.detailsNext = detailsNext;
	window.timeBack = timeBack;
	window.confirmNext = confirmNext;

})();