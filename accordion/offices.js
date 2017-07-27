(function () {

  var offices = [{
    "id": 1,
    "name": "Office 1",
    "address": "Strada Parcul Tineretului,Botosani,Romania",
    "coordinates":
    {
      "lat": 47.751903804356296,
      "lng": 26.673176081753578
    },
    "phone": "0756 891 756",
  },
  {
    "id": 2,
    "name": "Office 2",
    "address": "Strada Primaverii,Botosani,Romania",
    "coordinates":
    {
      "lat": 47.73861269791697,
      "lng": 26.655417812719744
    },
    "phone": "0231 255477",
  }, {
    "id": 3,
    "name": "Office 3",
    "address": "Strada Pacea,Botosani,Romania",
    "coordinates":
    {
      "lat": 47.7502527,
      "lng": 26.630664799999977
    },
    "phone": "0231 225866",
  },
  {
    "id": 4,
    "name": "Office 4",
    "address": "Strada Cuza Voda,Botosani,Romania",
    "coordinates":
    {
      "lat": 47.74308525298022,
      "lng": 26.66335806204075
    },
    "phone": "0230 222555",
  }];

  function initMap(coordinates, address) {

    var map = new google.maps.Map(document.getElementById('map'), {
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


  function renderOffices() {
    var template = '';
    var initialMap = offices[0];

    initMap(initialMap.coordinates, initialMap.address);

    offices.forEach(function (item) {
      template =
        '<h3 id="' + item.id + '"> <a href="#">' + item.name + '</a></h3>' +
        '<div class="acc-text">' +
        '<p>' + item.address + '</p>' +
        '<p>' + item.phone + '</p>' +
        '<span class="acc-btn"><button class="button" onclick="selectOffice(' + item.id + ')">Select</button></span>'
      '</div > '

      $('.accordion').append($(template));

    });

    $(".accordion").accordion({
      change: function (event, ui) {
        var index = parseInt(ui.newContent.context.id) - 1;
        initMap(offices[index].coordinates, offices[index].address);
        // initMap(offices[index.coordinates], offices[index.address]);
      }
    });
  };

  function selectOffice(officeId) {
    $(".services").show();
    $("#office-cont").hide();
    window.renderServices(officeId);
  }

  window.offices = offices;
  window.renderOffices = renderOffices;
  window.selectOffice = selectOffice;

})();