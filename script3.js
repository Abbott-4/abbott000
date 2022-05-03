$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close Menu' ? 'Menu' : 'Close Menu');
    e.preventDefault();
  });
});


  var map = new BMap.Map("allmap");    
  map.centerAndZoom(new BMap.Point(9.072264, 7.491302), 11);  
  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));   
  map.setCurrentCity("Abuja");          
  map.enableScrollWheelZoom(true);