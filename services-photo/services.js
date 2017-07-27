(function () {

  var services = [{
    "id": 1,
    "office_id": 1,
    "price": 170,
    "title": "Children Photo",
    "img_url": "img/child.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }, {
    "id": 2,
    "office_id": 1,
    "price": 100,
    "title": "Classic Photo",
    "img_url": "img/baby1.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }, {
    "id": 3,
    "office_id": 1,

    "price": 90,
    "title": "Nature Photo",
    "img_url": "img/nature.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }, {
    "id": 4,
    "office_id": 1,
    "price": 200,
    "title": "Passport Photo",
    "img_url": "img/passport.jpg",
    "description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide."
  }];



  function renderServices(officeId) {
    var template = '';
    $('#services_panel').empty();

    services.forEach(function (item) {
      if (item.office_id == 1) {

        template =
          '<div class="services" id="' + item.id + '">'
          + '<p class="service-title">' + item.title + '</p>'
          + '<p class="service-title">' + item.price + ' $</p>'
          + '<div class="detail-service">'
          + '<img class="photo" src=" ' + item.img_url + '">'
          + '<p class="right-detail">' + item.description + ' </p></div>'
          + '<div class="btn-select" onclick="selectService(' + item.id + ')"><button class="button"> Select</button></div>'
          + '</div>';

        $('#services_panel').append($(template));
      }
    })

  };

  function selectService(serviceId) {
    $("#calendar-cont").show();
    $(".services").hide();
    // window.selectTime(serviceId);
  }

  window.services = services;
  window.renderServices = renderServices;
  window.selectService = selectService;

})();