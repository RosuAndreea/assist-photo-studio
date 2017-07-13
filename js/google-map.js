function initMap() {
    var location1 = {lat: 47.6634521 , lng: 26.2732302 }; //SV
    var location2 = {lat: 47.151726, lng: 27.587914 }; //Iasi

    var map1 = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: location1
    });
   
    var map2 = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: location2
    });

    var marker1= new google.maps.Marker({
      position: location1,
      map: map1,
      title: 'Suceava'
    });

    var marker2= new google.maps.Marker({
      position: location2,
      map: map2,
      title: 'Iasi'
    });
}
$(document).on('click','#map-acc-b',function(event){
  alert('test');
  console.log(map);
});

$(document).on('click','#map-acc-c',function(event){
  alert('test');
});