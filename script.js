$(document).ready(function () {
	var allPs = $(this).find('#main-text p, #main-text img, #main-text figure, #main-text blockquote');
	var allColapsed = false;

	$(allPs).hide();
	$('.footnotes').hide();
	$('#info-web').hide();
	$('#info').hide();

//click headers show indivudal paragraphs
  $('.headers').click(function () {
    $(this).parent().nextAll().slideToggle(500);
		if (allColapsed === false) {
			allColapsed = true;
			$('.footnotes').show();
		} else {
			allColapsed = false;
			}
  });

//click #title show all pargraphs and footnotes
	$("#title").click(function(){
		if (allColapsed === false) {
			allColapsed = true;
			allPs.slideDown(500);
			$('.footnotes').show();
		} else {
			allColapsed = false;
			allPs.slideUp(500);
			$('.footnotes').hide();
			}
  });

	//click footnote in text show footnotes
	$(this).find('.footnote').click(function(){
		$('#footnotes').show();
	});

	//change color of all headers on #title hover
	$(this).find('#title').hover(function(){
		$('#title, .headers').addClass("title-on-hover");
	});
	$(this).find('#title').mouseleave(function(){
		$('#title, .headers').removeClass("title-on-hover");
	});
	//click info button show info
	$(this).find('#info-button').click(function(){
		$('#info-web').toggle();
		$('#footnotes').hide();
	});
	//click main-text hide info
	$("#main-text").click(function(){
		$('#info-web').hide();
});

$('#print-button').on('click', function() {
  window.print();
  return false; // why false?
});

});
