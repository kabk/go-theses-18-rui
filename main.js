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


// // footnotes
// $(document).ready(function(){
// // div 1
//       $('#ref-text-1').click(function(){
//       $('#ref-div-1').removeClass('small-solaris').addClass('big-solaris');    
//       });

//       $('#ref-div-1').click(function(){
//             $('#ref-div-1').removeClass('big-solaris').addClass('small-solaris');
//       });

//       $('#ref-text-1').hover(function(){
//             $('#ref-text-1').css({'color': 'blue'});
//             // $('#ref-div-1').css({'background-color': 'blue'});
//             // $('#antonia').css({'width': '0px'});

//       });
//       $('#ref-text-1').mouseleave(function(){
//             $('#ref-text-1').css({'color': '#0184bc'});
//       });   
// // div 2
//       $('#ref-text-2').hover(function(){
//             $('#ref-item-2').css({'color': 'blue'});
//             $('#ref-text-2').css({'color': 'blue'});
//       });
//       $('#ref-item-2').hover(function(){
//             $('#ref-text-2').css({'color': 'blue'});
//             $('#ref-item-2').css({'color': 'blue'});
//       });
//       $('#ref-text-2').mouseleave(function(){
//             $('#ref-item-2').css({'color': '#5aa14f'});
//             $('#ref-text-2').css({'color': '#0184bc'});
//       });   
//       $('#ref-item-2').mouseleave(function(){
//             $('#ref-text-2').css({'color': '#0184bc'});
//             $('#ref-item-2').css({'color': '#5aa14f'});
//       });   
//       $('#ref-text-3').hover(function(){
//             $('#ref-item-3').css({'color': 'blue'});
//             $('#ref-text-3').css({'color': 'blue'});
//       });
//       $('#ref-text-3').mouseleave(function(){
//             $('#ref-item-3').css({'color': '#5aa14f'});
//             $('#ref-text-3').css({'color': '#0184bc'});
//       });   
//       $('#ref-item-3').hover(function(){
//             $('#ref-text-3').css({'color': 'blue'});
//             $('#ref-item-3').css({'color': 'blue'});
//       });
//       $('#ref-item-3').mouseleave(function(){
//             $('#ref-text-3').css({'color': '#0184bc'});
//             $('#ref-item-3').css({'color': '#5aa14f'});
//       });   
// // div 3
//       $('#ref-text-4').hover(function(){
//             $('#ref-item-4').css({'color': 'blue'});
//             $('#ref-text-4').css({'color': 'blue'});
//       });
//       $('#ref-text-4').mouseleave(function(){
//             $('#ref-item-4').css({'color': '#9ec47b'});
//             $('#ref-text-4').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-4').hover(function(){
//             $('#ref-text-4').css({'color': 'blue'});
//             $('#ref-item-4').css({'color': 'blue'});
//       });
//       $('#ref-item-4').mouseleave(function(){
//             $('#ref-text-4').css({'color': '#9ec47b'});
//             $('#ref-item-4').css({'color': '#9ec47b'});
//       });   
// // div 4
//       $('#ref-text-5').hover(function(){
//             $('#ref-item-5').css({'color': 'blue'});
//             $('#ref-text-5').css({'color': 'blue'});
//       });
//       $('#ref-text-5').mouseleave(function(){
//             $('#ref-item-5').css({'color': '#9ec47b'});
//             $('#ref-text-5').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-5').hover(function(){
//             $('#ref-text-5').css({'color': 'blue'});
//             $('#ref-item-5').css({'color': 'blue'});
//       });
//       $('#ref-item-5').mouseleave(function(){
//             $('#ref-text-5').css({'color': '#9ec47b'});
//             $('#ref-item-5').css({'color': '#9ec47b'});
//       });   
// // div 5
//       $('#ref-text-6').hover(function(){
//             $('#ref-item-6').css({'color': 'blue'});
//             $('#ref-text-6').css({'color': 'blue'});
//       });
//       $('#ref-text-6').mouseleave(function(){
//             $('#ref-item-6').css({'color': '#9ec47b'});
//             $('#ref-text-6').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-6').hover(function(){
//             $('#ref-text-6').css({'color': 'blue'});
//             $('#ref-item-6').css({'color': 'blue'});
//       });
//       $('#ref-item-6').mouseleave(function(){
//             $('#ref-text-6').css({'color': '#9ec47b'});
//             $('#ref-item-6').css({'color': '#9ec47b'});
//       });
// // div 6
//       $('#ref-text-7').hover(function(){
//             $('#ref-item-7').css({'color': 'blue'});
//             $('#ref-text-7').css({'color': 'blue'});
//       });
//       $('#ref-text-7').mouseleave(function(){
//             $('#ref-item-7').css({'color': '#9ec47b'});
//             $('#ref-text-7').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-7').hover(function(){
//             $('#ref-text-7').css({'color': 'blue'});
//             $('#ref-item-7').css({'color': 'blue'});
//       });
//       $('#ref-item-7').mouseleave(function(){
//             $('#ref-text-7').css({'color': '#9ec47b'});
//             $('#ref-item-7').css({'color': '#9ec47b'});
//       });
// // div 7
//       $('#ref-text-8').hover(function(){
//             $('#ref-item-8').css({'color': 'blue'});
//             $('#ref-text-8').css({'color': 'blue'});
//       });
//       $('#ref-text-8').mouseleave(function(){
//             $('#ref-item-8').css({'color': '#9ec47b'});
//             $('#ref-text-8').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-8').hover(function(){
//             $('#ref-text-8').css({'color': 'blue'});
//             $('#ref-item-8').css({'color': 'blue'});
//       });
//       $('#ref-item-8').mouseleave(function(){
//             $('#ref-text-8').css({'color': '#9ec47b'});
//             $('#ref-item-8').css({'color': '#9ec47b'});
//       });
// // div 8
//       $('#ref-text-9').hover(function(){
//             $('#ref-item-9').css({'color': 'blue'});
//             $('#ref-text-9').css({'color': 'blue'});
//       });
//       $('#ref-text-9').mouseleave(function(){
//             $('#ref-item-9').css({'color': '#9ec47b'});
//             $('#ref-text-9').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-9').hover(function(){
//             $('#ref-text-9').css({'color': 'blue'});
//             $('#ref-item-9').css({'color': 'blue'});
//       });
//       $('#ref-item-9').mouseleave(function(){
//             $('#ref-text-9').css({'color': '#9ec47b'});
//             $('#ref-item-9').css({'color': '#9ec47b'});
//       });
// // div 9
//       $('#ref-text-10').hover(function(){
//             $('#ref-item-10').css({'color': 'blue'});
//             $('#ref-text-10').css({'color': 'blue'});
//       });
//       $('#ref-text-10').mouseleave(function(){
//             $('#ref-item-10').css({'color': '#9ec47b'});
//             $('#ref-text-10').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-10').hover(function(){
//             $('#ref-text-10').css({'color': 'blue'});
//             $('#ref-item-10').css({'color': 'blue'});
//       });
//       $('#ref-item-10').mouseleave(function(){
//             $('#ref-text-10').css({'color': '#9ec47b'});
//             $('#ref-item-10').css({'color': '#9ec47b'});
//       });

//       $('#ref-text-11').hover(function(){
//             $('#ref-item-11').css({'color': 'blue'});
//             $('#ref-text-11').css({'color': 'blue'});
//       });
//       $('#ref-text-11').mouseleave(function(){
//             $('#ref-item-11').css({'color': '#9ec47b'});
//             $('#ref-text-11').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-11').hover(function(){
//             $('#ref-text-11').css({'color': 'blue'});
//             $('#ref-item-11').css({'color': 'blue'});
//       });
//       $('#ref-item-11').mouseleave(function(){
//             $('#ref-text-11').css({'color': '#9ec47b'});
//             $('#ref-item-11').css({'color': '#9ec47b'});
//       });
// // div 10
//       $('#ref-text-12').hover(function(){
//             $('#ref-item-12').css({'color': 'blue'});
//             $('#ref-text-12').css({'color': 'blue'});
//       });
//       $('#ref-text-12').mouseleave(function(){
//             $('#ref-item-12').css({'color': '#9ec47b'});
//             $('#ref-text-12').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-12').hover(function(){
//             $('#ref-text-12').css({'color': 'blue'});
//             $('#ref-item-12').css({'color': 'blue'});
//       });
//       $('#ref-item-12').mouseleave(function(){
//             $('#ref-text-12').css({'color': '#9ec47b'});
//             $('#ref-item-12').css({'color': '#9ec47b'});
//       });
//       $('#ref-text-13').hover(function(){
//             $('#ref-item-13').css({'color': 'blue'});
//             $('#ref-text-13').css({'color': 'blue'});
//       });
//       $('#ref-text-13').mouseleave(function(){
//             $('#ref-item-13').css({'color': '#9ec47b'});
//             $('#ref-text-13').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-13').hover(function(){
//             $('#ref-text-13').css({'color': 'blue'});
//             $('#ref-item-13').css({'color': 'blue'});
//       });
//       $('#ref-item-13').mouseleave(function(){
//             $('#ref-text-13').css({'color': '#9ec47b'});
//             $('#ref-item-13').css({'color': '#9ec47b'});
//       });
//       $('#ref-text-14').hover(function(){
//             $('#ref-item-14').css({'color': 'blue'});
//             $('#ref-text-14').css({'color': 'blue'});
//       });
//       $('#ref-text-14').mouseleave(function(){
//             $('#ref-item-14').css({'color': '#9ec47b'});
//             $('#ref-text-14').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-14').hover(function(){
//             $('#ref-text-14').css({'color': 'blue'});
//             $('#ref-item-14').css({'color': 'blue'});
//       });
//       $('#ref-item-14').mouseleave(function(){
//             $('#ref-text-14').css({'color': '#9ec47b'});
//             $('#ref-item-14').css({'color': '#9ec47b'});
//       });
//       $('#ref-text-15').hover(function(){
//             $('#ref-item-15').css({'color': 'blue'});
//             $('#ref-text-15').css({'color': 'blue'});
//       });
//       $('#ref-text-15').mouseleave(function(){
//             $('#ref-item-15').css({'color': '#9ec47b'});
//             $('#ref-text-15').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-15').hover(function(){
//             $('#ref-text-15').css({'color': 'blue'});
//             $('#ref-item-15').css({'color': 'blue'});
//       });
//       $('#ref-item-15').mouseleave(function(){
//             $('#ref-text-15').css({'color': '#9ec47b'});
//             $('#ref-item-15').css({'color': '#9ec47b'});
//       });
//       $('#ref-text-16').hover(function(){
//             $('#ref-item-16').css({'color': 'blue'});
//             $('#ref-text-16').css({'color': 'blue'});
//       });
//       $('#ref-text-16').mouseleave(function(){
//             $('#ref-item-16').css({'color': '#9ec47b'});
//             $('#ref-text-16').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-16').hover(function(){
//             $('#ref-text-16').css({'color': 'blue'});
//             $('#ref-item-16').css({'color': 'blue'});
//       });
//       $('#ref-item-16').mouseleave(function(){
//             $('#ref-text-16').css({'color': '#9ec47b'});
//             $('#ref-item-16').css({'color': '#9ec47b'});
//       });
//       $('#ref-text-17').hover(function(){
//             $('#ref-item-17').css({'color': 'blue'});
//             $('#ref-text-17').css({'color': 'blue'});
//       });
//       $('#ref-text-17').mouseleave(function(){
//             $('#ref-item-17').css({'color': '#9ec47b'});
//             $('#ref-text-17').css({'color': '#9ec47b'});
//       });   
//       $('#ref-item-17').hover(function(){
//             $('#ref-text-17').css({'color': 'blue'});
//             $('#ref-item-17').css({'color': 'blue'});
//       });
//       $('#ref-item-17').mouseleave(function(){
//             $('#ref-text-17').css({'color': '#9ec47b'});
//             $('#ref-item-17').css({'color': '#9ec47b'});
//       });
//       $('#ref-text-18').click(function(){
//       $('#ref-div-18').removeClass('small-solaris').addClass('big-solaris');    
//       });

//       $('#ref-div-18').click(function(){
//             $('#ref-div-18').removeClass('big-solaris').addClass('small-solaris');
//       });

//       $('#ref-text-18').hover(function(){
//             $('#ref-text-18').css({'color': 'blue'});
//       });
//       $('#ref-text-18').mouseleave(function(){
//             $('#ref-text-18').css({'color': '#9ec47b'});
//       });

//       $('#ref-text-19').click(function(){
//       $('#ref-div-19').removeClass('small-solaris').addClass('big-solaris');    
//       });

//       $('#ref-div-19').click(function(){
//             $('#ref-div-19').removeClass('big-solaris').addClass('small-solaris');
//       });

//       $('#ref-text-19').hover(function(){
//             $('#ref-text-19').css({'color': 'blue'});
//       });
//       $('#ref-text-19').mouseleave(function(){
//             $('#ref-text-19').css({'color': '#9ec47b'});
//       });

//       $('#ref-text-20').click(function(){
//       $('#ref-div-20').removeClass('small-solaris').addClass('big-solaris');    
//       });

//       $('#ref-div-20').click(function(){
//             $('#ref-div-20').removeClass('big-solaris').addClass('small-solaris');
//       });

//       $('#ref-text-20').hover(function(){
//             $('#ref-text-20').css({'color': 'blue'});
//       });
//       $('#ref-text-20').mouseleave(function(){
//             $('#ref-text-20').css({'color': '#9ec47b'});
//       });
// });