$(document).ready(function(){
	$(document).width($(window).width());
	$(window).resize(function(){
		console.log($(window).width());
	});
	/*if ($(window).width() <= 900) {
		
		$('#video video, #what_do video').css({
			height: '100%',
			width: 'auto'
		});
	}
	else{
		$('#video video, #what_do video').css({
			height: 'auto',
			width: '100%'
		});
	}*/

	$(".screen-height").height($(window).height());
	$(window).resize(function(){
		$(".screen-height").height($(window).height());
	});
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#video, #what_do').css({'background-attachment': 'scroll'});
	} else {
		$('#video, #what_do').parallax('50%', 0.1);
	}
	

	$('.down').on('click', function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $(document).width($(window).width());
		//console.log($(window).width());
	   if ($(window).width() <= 1000) {
	   		$('body,html').animate({scrollTop: top-70}, 1500);
	   }
	   else{
	   		$('body,html').animate({scrollTop: top}, 1500);
	   }
	   
	});

	$('#open-menu').click( function(event){
		event.preventDefault();
		$('#center .left').animate({left: "0"},800);
		$('.overlay').show(400);
	});

	$('.close, .overlay').click( function(){
		$('#center .left').animate({left: "-100%"},800);
		$('.overlay').hide(800);
	});

});