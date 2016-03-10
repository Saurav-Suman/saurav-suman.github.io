$(document).ready(function(){
  
  	  $('a').click(function(e) { //  'e' refers to itself
	    $.scrollTo(

			$(this).attr("href"), 
			
			{
			duration: 1000,
			axis:'y',  // stops screen flicking on ios devices
			offset: {'top':-0 }
			}    
	    
	    );
	    e.preventDefault();
	  });

});