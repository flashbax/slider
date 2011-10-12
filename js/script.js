//Next:
//make so only one image displays
//make so I can use keyboard 

$(document).ready(function(){
	
	var positiveTotal=2500;// the max length of all images side by side 
	var negativeTotal=-2500; // the max negative length of all images side by side
	var animating = false; // begin false (animating either enables or disables an animation when a button is clicked)
	
		
	//initially start with left button removed 
	$('#button-left').css('display', 'none');
	
	//left button event
	$('#button-left').click(function() { 
		var moveImageRight=$('li').css('left') //stores the left point of the image
		var position=parseInt(moveImageRight, 10); //changes the css left string to a numeric value
		var newPosition = position+500; //take value stored in position and add 500 then store in newPosition
	
		if (animating) { //if animating var is true exit the function
			return;
		}
		
		if (newPosition<positiveTotal){ //if the number in new position is less than positiveTotal (2500) 
	 		animating=true; //change animating to true
	 		$('li').animate({left: newPosition}, 1000, function() { //move the image 
	 			animating = false; // when finished image animation change animating var to false
	 		});	
  		}  
		
		$('#button-right').css('display', 'block'); //display the right button when left button is clicked
		
		if (newPosition===0) { //if the newPosition is at 0 remove the left button from the page
			$('#button-left').css('display', 'none'); 	
		}
		
		console.log(newPosition);
	});			

	//right button event	
	$('#button-right').click(function() { 
		
		var moveImageLeft=$('li').css('left'); //stores the left point of the image
		var position=parseInt(moveImageLeft, 10); //changes the css left string to a numeric value
		var newPosition = position-500; //take value stored in position and minus 500 then store in newPosition
		
		if (animating) { //if animating var is true exit the function
			return;
		}
		
		if (newPosition>negativeTotal) { //if the number in new position is greated than negativeTotal (-2500) 
			animating=true; //change animating to true
			$('li').animate({left: newPosition}, 1000, function() { //move the image
				animating = false; // when finished image animation change animating var to false
			});
		}
		
		$('#button-left').css('display', 'block'); //display the left button when right button is clicked
		
		if (newPosition===negativeTotal+500) { //if the newPosition is at negativeTotal+500 (-2000) remove the right button from the page
			$('#button-right').css('display', 'none');
		}
		
		console.log(newPosition);
	});
	
	
});


