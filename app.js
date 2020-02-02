
	var loc = new Array(
		{'place':'Парк ДГТУ','descrp': 'Студенческий парк ДГТУ', 'id':0},
		{'place':'Футбольное поле','descrp': 'Футбольное поле под открытым небом', 'id':1},
		{'place':'Скейт-парк','descrp': '', 'id':2},
		{'place':'Легко-атлетический манеж','descrp': '', 'id':3},
		{'place':'Храм','descrp': 'храм Святой Великомученицы Татьяны', 'id':4},
		{'place':'Общежитие ДГТУ','descrp': '', 'id':5},
	);

	var card = "";

	for (i = 0; i < loc.length; i++) {
  		card += '<div class="card" id= ' + loc[i].id + '>	<div class="card-header">' + loc[i].place + '</div>	<div class="card-body">		<h7 class="card-title">' + loc[i].descrp + '</h7></div></div>';
	}


	var ContactManager = new Marionette.Application();
  
	ContactManager.StaticView = Marionette.View.extend({
		el: ".card-container",  
	  	template: _.template(card), 
	}); 


	ContactManager.on("start", function(){
	  	var staticView = new ContactManager.StaticView(); 
	  	staticView.render(); 
	});

 	ContactManager.start();

	$( document ).ready(function() {

		$("#0").on('click',function(e){
			let where = centralMarker.getLatLng()
	 		mymap.setView(where, 16.5);
	 		centralMarker.openPopup();
	 	});

	 	 $("#1").on('click',function(e){
			let where = footballMarker.getLatLng()
		 	mymap.setView(where, 16.5);
	 	 	footballMarker.openPopup();
	 	 });

		 $("#2").on('click',function(e){
			let where = skateMarker.getLatLng()
	 	 	mymap.setView(where, 16.5);
	 	 	skateMarker.openPopup();
	 	 });

		 $("#3").on('click',function(e){
			let where = sportMarker.getLatLng()
	 	 	mymap.setView(where, 16.5);
	 	 	sportMarker.openPopup();
	 	 });

	 	 $("#4").on('click',function(e){
			let where = churchMarker.getLatLng()
	 	 	mymap.setView(where, 16.5);
	 	 	churchMarker.openPopup();
	 	 });

	 	$("#5").on('click',function(e){
		 	let where = bedMarker.getLatLng()
	 		mymap.setView(where, 16.5);
	 		bedMarker.openPopup();
	 	});
	});