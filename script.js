$(document).ready(function () {
		var allPs = $(this).find('#main-text p, #main-text img, #main-text figure, #main-text blockquote');
		var allColapsed = false;

		$(allPs).hide();
		$('.footnotes').hide();

//click headers show indivudal paragraphs
    $('.headers').click(function () {
        $(this).parent().nextAll().slideToggle(200);
				//footnotes
				if (allColapsed === false) {
							allColapsed = true;
						} else {
							allColapsed = false;
							$('.footnotes').show();
							}
    });
//click #title show all pargraphs and footnotes
		$("#title").click(function(){
				if (allColapsed === false) {
							allColapsed = true;
							allPs.hide();
							$('.footnotes').hide();
						} else {
							allColapsed = false;
							allPs.show();
							$('.footnotes').show();
							}

    });


  	//change color of all headers on #title hover
  	$(this).find('#title').hover(function(){
  		$('#title, .headers').addClass("title-on-hover");
  	});
  	$(this).find('#title').mouseleave(function(){
  		$('#title, .headers').removeClass("title-on-hover");
  	});


});
