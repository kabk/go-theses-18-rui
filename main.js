// index
var allColapsed = false;
var allPs = $('section').find('p, li, a, img, figcaption, div');

$('section').each(function(i){
	//single paragraph show/hide
	var paragraphs = $(this).find('p, li, a, img, figcaption, div');
	var notes = $(this).find('.ref-div, .ref-item, .small-solaris, .small-facebook');

		$(this).find('#title').click(function(){
		if (allColapsed === false) {
			allColapsed = true;
			allPs.hide();
			$('.ref-div, .ref-item, .small-solaris, .small-facebook').hide();
		} else {
			allColapsed = false;
			allPs.show();
			$('.ref-div, .ref-item, .small-solaris, .small-facebook').show();

		}
	});

	//change color of al headers on h1 hover
	$(this).find('#title').hover(function(){
		$('h1, h2, h3, h4, h5').addClass('title');
	});
	$(this).find('#title').mouseleave(function(){
		$('h1, h2, h3, h4, h5').removeClass('title');
	});



//single paragraph show/hide
	$(this).find('.headers').click(function(){
		paragraphs.toggle();



	});
});
