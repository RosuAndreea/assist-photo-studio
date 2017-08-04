(function () {

   function initMap(coordinates, address) {

    var map = new google.maps.Map(document.getElementById('map-confirmation'), {
      zoom: 14,
      center: coordinates
    });

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: address,
      // label: address
    });
    google.maps.event.trigger(map, 'resize');
  }


  function renderConfirmationPage() {
   var first_name = document.getElementById("first-name").value;
   var last_name = document.getElementById("last-name").value;
   var email = document.getElementById("email").value;
   var mobile = document.getElementById("phone").value;

   window.mySelection.details = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    mobile: mobile,
   }

         window.renderOfficeAndService("#details-list-confirmation");
         window.renderSelectedDate();


         var template = '';
          $("#user-details-confirmation").empty();

          template =
            '<li><span class="left-side">First name: </span><span class="right-side">' + window.mySelection.details.first_name + '</span></li>' + 
            '<li><span class="left-side">Last name: </span><span class="right-side">' + window.mySelection.details.last_name + '</span></li>' +
            '<li><span class="left-side">email: </span><span class="right-side">' + window.mySelection.details.email + '$</span></li>' +
            '<li><span class="left-side">Mobile: </span><span class="right-side">' + window.mySelection.details.mobile + '</span></li>';

          $("#user-details-confirmation").append($(template));

      initMap(window.mySelection.office.coordinates, window.mySelection.office.address);

    $("#confirm").show();
    $("#details-cont").hide();
  }

  window.renderConfirmationPage = renderConfirmationPage;

})();