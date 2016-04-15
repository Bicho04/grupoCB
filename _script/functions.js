$(document).ready(function() {
  $('.servicio').click(function(){
    $(this).toggleClass("is-hidden");
  });

   $(".pictures").owlCarousel({
    loop:true,
    center:true,
    nav:false,
    dots:false,
    items:1,
    autoplay:true
   });

});


$(document).ready(function () {
  $('.main').each(function(index) {
    $(this).children('.tab-header-and-content').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.main').on('click', '.tab > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.main');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


// ########### Instituto Codas Thompson #####################
var codasThompson = (function () {
  var myLatlng = new google.maps.LatLng(-25.800,-54.800),
      mapCenter = new google.maps.LatLng(-25.800,-54.800),
      mapCanvas = document.getElementById('codasThompson'),
      mapOptions = {
        center: mapCenter,
        zoom: 16,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<strong>Instituto Codas Thompson</strong>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Casa Matriz'
      });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 60}
        ]}
      ]);

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map,marker);
      });
    }
  };
}());

// ########### Sanatorio Britanico #####################
var sanatorioBritanico = (function () {
  var myLatlng = new google.maps.LatLng(-25.700,-54.700),
      mapCenter = new google.maps.LatLng(-25.700,-54.700),
      mapCanvas = document.getElementById('sanatorioBritanico'),
      mapOptions = {
        center: mapCenter,
        zoom: 16,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<strong>Sanatorio Británico</strong>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Casa Matriz'
      });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 60}
        ]}
      ]);

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map,marker);
      });
    }
  };
}());

// ########### Consultorio Medico Genesis #####################
var consultorioGenesis = (function () {
  var myLatlng = new google.maps.LatLng(-25.600,-54.600),
      mapCenter = new google.maps.LatLng(-25.600,-54.600),
      mapCanvas = document.getElementById('consultorioGenesis'),
      mapOptions = {
        center: mapCenter,
        zoom: 16,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<strong>Consultorio Medico Génesis</strong>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Casa Matriz'
      });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 60}
        ]}
      ]);

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map,marker);
      });
    }
  };
}());



consultorioGenesis.init();
sanatorioBritanico.init();
codasThompson.init();