$(document).ready(function(){
// div 1
	$('#ref-text-1').click(function(){
      $('#ref-div-1').removeClass('small-solaris').addClass('big-solaris');    
	});

	$('#ref-div-1').click(function(){
		$('#ref-div-1').removeClass('big-solaris').addClass('small-solaris');
	});

	$('#ref-text-1').hover(function(){
		$('#ref-text-1').css({'color': 'blue'});
	});
	$('#ref-text-1').mouseleave(function(){
		$('#ref-text-1').css({'color': '#333'});
	});	
// div 2
	$('#ref-text-2').hover(function(){
		$('#ref-item-2').css({'color': 'blue'});
		$('#ref-text-2').css({'color': 'blue'});
	});
	$('#ref-item-2').hover(function(){
		$('#ref-text-2').css({'color': 'blue'});
		$('#ref-item-2').css({'color': 'blue'});
	});

	$('#ref-text-2').mouseleave(function(){
		$('#ref-item-2').css({'color': '#333'});
		$('#ref-text-2').css({'color': '#333'});
	});	
	$('#ref-item-2').mouseleave(function(){
		$('#ref-text-2').css({'color': '#333'});
		$('#ref-item-2').css({'color': '#333'});
	});	
	$('#ref-text-3').hover(function(){
		$('#ref-item-3').css({'color': 'blue'});
		$('#ref-text-3').css({'color': 'blue'});
	});
	$('#ref-text-3').mouseleave(function(){
		$('#ref-item-3').css({'color': '#333'});
		$('#ref-text-3').css({'color': '#333'});
	});	
	$('#ref-item-3').hover(function(){
		$('#ref-text-3').css({'color': 'blue'});
		$('#ref-item-3').css({'color': 'blue'});
	});
	$('#ref-item-3').mouseleave(function(){
		$('#ref-text-3').css({'color': '#333'});
		$('#ref-item-3').css({'color': '#333'});
	});	
// div 3
	$('#ref-text-4').hover(function(){
		$('#ref-item-4').css({'color': 'blue'});
		$('#ref-text-4').css({'color': 'blue'});
	});
	$('#ref-text-4').mouseleave(function(){
		$('#ref-item-4').css({'color': '#333'});
		$('#ref-text-4').css({'color': '#333'});
	});	
	$('#ref-item-4').hover(function(){
		$('#ref-text-4').css({'color': 'blue'});
		$('#ref-item-4').css({'color': 'blue'});
	});
	$('#ref-item-4').mouseleave(function(){
		$('#ref-text-4').css({'color': '#333'});
		$('#ref-item-4').css({'color': '#333'});
	});	
// div 4
	$('#ref-text-5').hover(function(){
		$('#ref-item-5').css({'color': 'blue'});
		$('#ref-text-5').css({'color': 'blue'});
	});
	$('#ref-text-5').mouseleave(function(){
		$('#ref-item-5').css({'color': '#333'});
		$('#ref-text-5').css({'color': '#333'});
	});	
	$('#ref-item-5').hover(function(){
		$('#ref-text-5').css({'color': 'blue'});
		$('#ref-item-5').css({'color': 'blue'});
	});
	$('#ref-item-5').mouseleave(function(){
		$('#ref-text-5').css({'color': '#333'});
		$('#ref-item-5').css({'color': '#333'});
	});	
// div 5
	$('#ref-text-6').hover(function(){
		$('#ref-item-6').css({'color': 'blue'});
		$('#ref-text-6').css({'color': 'blue'});
	});
	$('#ref-text-6').mouseleave(function(){
		$('#ref-item-6').css({'color': '#333'});
		$('#ref-text-6').css({'color': '#333'});
	});	
	$('#ref-item-6').hover(function(){
		$('#ref-text-6').css({'color': 'blue'});
		$('#ref-item-6').css({'color': 'blue'});
	});
	$('#ref-item-6').mouseleave(function(){
		$('#ref-text-6').css({'color': '#333'});
		$('#ref-item-6').css({'color': '#333'});
	});

});




