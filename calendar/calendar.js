(function () {

  function renderOfficeAndService(element) {
    var template = '';
    $(element).empty();

      template =
        '<li><span class="left-side">Photo Shoot: </span><span class="right-side">' + window.mySelection.service.title + '</span></li>' + 
        '<li><span class="left-side">Description: </span><span class="right-side">' + window.mySelection.service.description + '</span></li>' +
        '<li><span class="left-side">Price: </span><span class="right-side">' + window.mySelection.service.price + '$</span></li>' +
        '<li><span class="left-side">Address: </span><span class="right-side">' + window.mySelection.office.address + '</span></li>' +
        '<li id="selected_date"><span class="left-side">Date: </span><span class="right-side">' + window.mySelection.selected_date || 'Not selected yet' + '</span></li>';

      $(element).append($(template));
  

  };

  function renderSelectedDate(selectedDate) {
    $('#selected_date .right-side').text(window.mySelection.selected_date);
  }

  window.renderOfficeAndService = renderOfficeAndService;
  window.renderSelectedDate = renderSelectedDate;

})();