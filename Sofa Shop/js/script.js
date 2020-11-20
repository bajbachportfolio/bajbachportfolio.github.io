$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:6,
        autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 534,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$('.img-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		/*responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]*/
	});
});

