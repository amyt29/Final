(function($){
	$.fn.MySlider = function(interval) {
		var slides;
		var cnt;
		var amount;
		var i;
		
		function run() {
			$(slides[i]).fadeOut(1000);
			i++;
			if (i >= amount) i=0;
			$(slides[i]).fadeIn(1000);
			$(".gallery_tagline").text( $(slides[i]).children().attr("alt") );
			setTimeout(run, interval);
		}
		
		slides = $(this).children();
		amount = slides.length;
		i=0;
		setTimeout(run, interval);
	};
})(jQuery);

function adjustHeights(){
	var newHeight=$("#my_slider").children().height();
	$('#my_slider').css("height", newHeight);
}

$(document).ready(
	function(){
		$('.gallery_tagline').text($('#my_slider img').eq(0).attr("alt"));
		$("#my_slider").MySlider(3000);
		adjustHeights();
	});

$(window).resize(
	function(){
		adjustHeights();
	}
);