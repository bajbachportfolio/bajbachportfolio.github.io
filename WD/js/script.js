$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		slidesToScroll:2,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		infinite: true,
		responsive:[
			{
				breakpoint: 996,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
				}
			}
		]
	});
	$('.arrow-l').click(function(event) {
		$('.slider').slick('slickPrev');
	
	});
	$('.arrow-l.rotate').click(function(event) {
		$('.slider').slick('slickNext');
	
	});
});

