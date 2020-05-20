$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1500,
		autoplaySpeed:3000,
		infinite:true,
		fade:true,
		appendDots: $('.about__slider'),
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

