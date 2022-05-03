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



function validateform(){  
var name=document.myform.name.value; 
var phone=document.myform.phone.value;
var address=document.myform.address.value;
var subject=document.myform.subject.value;  
  
if (name==null || name==""){  
  alert("  Name can't be blank");  
  return false;
}if (phone==null || phone==""){  
  alert(" Phone can't be blank");  
  return false; 
}if (address==null || address==""){  
  alert(" Address can't be blank");  
  return false; 
}else if(subject==null || subject==""){  
  alert("  message can't be blank");  
  return false; 
  
  }  
}

//Abbott(Lin Jixiang)，description:My JavaScript basically describes a form that will prompt you if your name, phone number, address or other information is submitted with an unfilled status. For example, if the name is not written, the page will prompt you that the name should not be blank. Similarly, other forms will also prompt you. It jumps to my email screen when all the messages are finished.