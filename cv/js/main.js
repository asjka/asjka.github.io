new WOW().init();
		
$('.menu-trigger').on('click', function(){
	if ($('nav').hasClass('active')){
		$('nav').removeClass('active');
	} else {
		$('nav').addClass('active');
	}
	
});

$("nav ul").on("click","a", function (event) {
	var url = $(this).attr('href');
	if (url.indexOf('#') == 0) {
		event.preventDefault();  
		$('body,html').animate({scrollTop: $(url).offset().top}, 1500);  
	}
});

$("nav ul li a").on('click', function(){
	$("nav ul li a").removeClass("active");
	$(this).addClass("active");
});