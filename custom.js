(function() {
	
	var services = [{
		"id":1,
		"price": 170,
		"title": "Children Photo",
		"img_url": "img/baby1.jpg",
		"description": "PhotoNet   the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores. PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores.PhotoNet are the UK and Ireland’s most trusted baby, child and family portrait photography specialists, our studios are located nationwide in selected Mothercare & Debenhams stores"
	},{
		"id":2,
		"price": 101,
		"title": "title 2",
		"img_url": "img/nature.jpg",
		"description": "description 2"
	},{
		"id":3,
		"price": 102,
		"title": "title 3",
		"img_url": "img/child.jpg",
		"description": "description 3"
	},{
		"id":4,
		"price": 103,
		"title": "title 4",
		"img_url": "img/passport.jpg",
		"description": "description 4"
	}];

	function renderServices() {

		$('#services-panel').append(function (){
			for(var service = 0; service < services.length; service++) {
				return (
							'<div class="services" id="'+services[service].id+'">'
						 +'<p class="service-title">'+ services[service].title +'</p>'
						 +'<p class="service-title">'+ services[service].price + ' $</p>'
						 +'<div class="detail-service">'
						 +'<img class="photo" src="'+ services[service].img_url +'">'
						 +'<p class="right-detail">'+ services[service].description+' </p></div>'
						 +'<div class="btn-select"><button class="button"> Select</button></div>');
			}
		});
		
	}

	function initRender() {
		renderServices();
	}

	initRender();


})();