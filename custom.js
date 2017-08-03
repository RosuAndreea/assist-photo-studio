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
	}
	function timeBack() {
		$("#calendar-cont").show();
		$("#details-cont").hide();
	}
	function confirmNext() {
		$("#confirm").show();
		$("#details-cont").hide();
		var fname = document.getElementById("first-name").value;
		var lname = document.getElementById("last-name").value;
		var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value;
		document.getElementById("fname").innerHTML = fname;
		document.getElementById("lname").innerHTML = lname;
		document.getElementById("em").innerHTML = email;
		document.getElementById("ph").innerHTML = phone;
		document.getElementById("oa").innerHTML =item.address;
	}

	function render() {
		window.renderOffices();
	}

	render();

	window.servicesBack = servicesBack;
	window.calendarBack = calendarBack;
	window.detailsNext = detailsNext;
	window.timeBack = timeBack;
	window.confirmNext = confirmNext;

})();