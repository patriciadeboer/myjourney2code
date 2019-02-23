// $('.project8 div').on('click',function(){
// 	$(this).toggleClass('show-description');
// });

$('.project8 div').hover(function(){
	var ww=document.body.clientWidth;
	if(ww>750){
		$(this).toggleClass('show-description');
	}
});


// $('.project8 div').hover(function(){
// 	$(this).toggleClass('show-description');
// });

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 750) {
      $('.project8 div').addClass('show-description');
    } else if(ww>750){
      $('.project8 div').removeClass('show-description');
    }

  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});