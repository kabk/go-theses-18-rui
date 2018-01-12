// index
var allColapsed = false;
var allPs = $('section').find('p, li');

$('section').each(function(i){
	var paragraphs = $(this).find('p, li');
	var notes = $(this).find('.ref-div, .ref-item, .small-solaris, .small-facebook');
	// paragraphs.hide();
	$(this).find('.index').click(function(){

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

	$(this).find('.headers').click(function(){
		paragraphs.toggle();

	});
});

