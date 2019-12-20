$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>'+ item.el.attr('authors') +'</small>';
			}
		}
	});
});

// $(document).ready(function() {
// 	$('.popup-with-zoom-anim').magnificPopup({
// 		type: 'inline',
//
// 		fixedContentPos: false,
// 		fixedBgPos: true,
//
// 		overflowY: 'auto',
//
// 		closeBtnInside: true,
// 		preloader: false,
//
// 		midClick: true,
// 		removalDelay: 300,
// 		mainClass: 'my-mfp-zoom-in'
// 	});
//
// 	$('.popup-with-move-anim').magnificPopup({
// 		type: 'inline',
//
// 		fixedContentPos: false,
// 		fixedBgPos: true,
//
// 		overflowY: 'auto',
//
// 		closeBtnInside: true,
// 		preloader: false,
//
// 		midClick: true,
// 		removalDelay: 300,
// 		mainClass: 'my-mfp-slide-bottom'
// 	});
// });
