$(document).ready(function(){
	console.log('Page Loaded');
	
	
	$('tbody tr:even').css({
		backgroundColor:"#8c8c8c"
	});
	
	$('tbody tr').hover(
		function(){
			$(this).css({
				color: "#97040c"
			})
		},
		function(){
			$(this).css({
				color: "#333"
			})
		} 
	);
	
	$('#setting_atteneded').change(function(){
		if ($('#setting_atteneded').val() == 'yes') {
			//alert('did it');
			$('#custom').slideDown();
		} 
	});
	

	$('#favoritedriver').change(function(){
		if ($('#favoritedriver').val() == 'joey') {
				console.log('Joey Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_11.jpg");
			} else if ($('#favoritedriver').val() == 'dan') {
				console.log('Danny Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_55.jpg");
			} else if ($('#favoritedriver').val() == 'parker') {
				console.log('Parker Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_3.jpg");
			} else if ($('#favoritedriver').val() == 'laura') {
				console.log('Laura Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_26.jpg");
			} else if ($('#favoritedriver').val() == 'mason') {
				console.log('Mason Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_30.jpg");
			} else if ($('#favoritedriver').val() == 'dad') {
				console.log('Dad Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_7.jpg");
			} else if ($('#favoritedriver').val() == 'seth') {
				console.log('Seth Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_89.jpg");
			} else {
				console.log('No Driver Selected');
				$('.favoriteDriverImage img').attr("src","img/tab_tms.png");
			}

	}); //end change
	
	$('.boysImage').click(function(){
		$(this).animate({
			height: "toggle",
			opacity: .2
		}, 2000, function() {
		});
		$('.socialIcons').animate({
			opacity: .3
		}, 2000, function() {
		});
		$(".story p").animate({
			fontSize:24
			}, 2000, function() {
		});
	});
	
	$('#lastRace-btn').click(function(){
		$('#lastRace').modal();
	});
	
	
	$("#lastRace-btn").hover(function(){
    	$(this).filter(':not(:animated)').animate({ width: "180px" });
    	$('.results').slideUp(600);
			}, function() {
		$(this).animate({ width: "140px" });
		$('.results').slideDown(600);
	});
	
	$('.checkeredFlag').animate({
			opacity:1
			}, 2000, function() {
		});x
	
	
	$('#submit-btn').click(function(){
		alert('Thanks joining The Garage!');	
	});
});