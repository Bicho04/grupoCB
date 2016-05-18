$(document).ready(function() {

  $('.servicio').addClass('is-hidden');

  $('.servicio').click(function(){
    $(this).toggleClass("is-hidden");
  });
});

$(document).ready(function () {

  $(".pictures").owlCarousel({
    loop:true,
    center:true,
    nav:false,
    dots:false,
    items:1,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:300
  });


  $(".galeria").colorbox({
    inline:true,
    transition:"fade",
    Width:"50%"
   });

  $("#slide1").responsiveSlides({
    manualControls: '#slide-nav1',
    auto: false,
    speed: 0
  });

  $("#slide2").responsiveSlides({
    manualControls: '#slide-nav2',
    auto: false,
    speed: 0
  });

  // $("#slide3").responsiveSlides({
  //   manualControls: '#slide-nav3',
  //   auto: false,
  //   speed: 0
  // });

  // $("#slide4").responsiveSlides({
  //   manualControls: '#slide-nav4',
  //   auto: false,
  //   speed: 0
  // });

  // $("#slide5").responsiveSlides({
  //   manualControls: '#slide-nav5',
  //   auto: false,
  //   speed: 0
  // });
 
});

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
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
  var myLatlng = new google.maps.LatLng(-25.2909323,-57.5884438),
      mapCenter = new google.maps.LatLng(-25.2909323,-57.5884438),
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
  var myLatlng = new google.maps.LatLng(-25.2957249,-57.6329255),
      mapCenter = new google.maps.LatLng(-25.2957249,-57.6329255),
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
  var myLatlng = new google.maps.LatLng(-25.2937477,-57.6146018),
      mapCenter = new google.maps.LatLng(-25.2937477,-57.6146018),
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