$(document).ready(function(){

	$('#flashlightBtn').click(function(){

		// Draw Gray Circle
		$('#canvas1').drawArc({
			  layer: true,
			  draggable: true,
			  mask: true,
			  name: 'flashLight',
			  strokeStyle: '#e6ce1a',
			  strokeWidth: 8,
			  fillStyle: '#bbb',
			  x: 150, y: 150,
			  radius: 50
			}) // end draw flashlight
			
			// Draw hidden text
			.drawText({
				layer: true,
				name: 'name1',
				fillStyle: '#ff8d28',
				x: 100,
				y: 50,
				fontSize: '18px',
				fontFamily: 'Cuprum, sans-serif',
				text: "McQueen"
			})
			.drawText({
				layer: true,
				name: 'name2',
				fillStyle: '#fff',
				x: 270,
				y: 230,
				fontSize: '18px',
				fontFamily: 'Cuprum, sans-serif',
				text: "Lightning"
			})
			.drawText({
				layer: true,
				name: 'name3',
				fillStyle: '#c10000',
				x: 70,
				y: 170,
				fontSize: '18px',
				fontFamily: 'Cuprum, sans-serif',
				text: "Racecar"
			})
		
			// Restore light mask
			.restoreCanvas({
			  layer: true
			})

	}); // end flashlight button click
	
	// reveal image if all text fields are correct	
	$('#submit').click(function(){
		if ($('#line1').val() == 'Lightning' && $('#line2').val() == 'McQueen' && $('#line3').val() == 'Racecar') {
				$('#canvas2').drawImage({
					source: 'img/Lightning.png',
					x: 200, y: 125
				});				
			}
	});
	
	$('#resetBtn').click(function(){
		$('#canvas2').clearCanvas();
	});


}); //end ready
