//Next:
//make so I can use keyboard
//image loader
var animating= 			false; // begin false (animating either enables or disables an animation when a button is clicked)


$(document).keyup(function(e){ //listen for the keystroke

	//37 Left
	//39 Right
	
	//when I press the left button the images in the slider will move left 
	//if i press the right button the images will move right 
	
	//capture the keycode
	//examine what I have captured (conditional)
	//utilize a function (may not be obtainable)
	//function that to move the slider in the proper direction
	//while the animation is happening the button is not enabled
	
	
	//1. User hits left or right on keyboard
	//2. Get information from keyboard event to give direction 
	//3. Move images in slider in proper direction
	
	
	switch (e.keyCode) {  //check which key is pressed
		case 37: move('left'); 
		break; 
		case 39: move('right'); 
		break; 
	} 
	
});


function move(direction) { 
	
	var rightExtent=	-2500, // the max length of all images side by side 
	leftExtent=		    0, // the max negative length of all images side by side
	position=			parseInt($('ul').css('left'), 10), //changes the css left string to a numeric value
	imgWidth=			500,
	newPosition; //take value stored in position and add 500 then store in newPosition
	
	switch (direction) { 
		case 'right' : newPosition=position-imgWidth; 
		break; 
		case 'left'  : newPosition=position+imgWidth;
		break;
	}
	
	if (animating) { //if animating var is true exit the function
		return;
	}
	
	if (newPosition>rightExtent && newPosition<=leftExtent){ //if the number in new position is less than positiveTotal (2500) 
 		animating=true; //change animating to true, no double click
 		
 		$('ul').animate({left: newPosition}, 1000, function() { //move the image 
 			animating = false; // I am now open to pressing the button again
 		});
 			
	} 
	 
	if (newPosition<=rightExtent+imgWidth) { //if the newPosition is at 0 remove the left button from the page
		$('#button-right').css('display', 'none'); 	
	} else { 		
		$('#button-right').css('display', 'block');
	}
	
	if (newPosition>=leftExtent) { 
		$('#button-left').css('display', 'none');	
	} else { 
		$('#button-left').css('display', 'block');
	}


};



$(document).ready(function(){
	
	$('#button-left').click(function(){
		move('left');
	});
	
	$('#button-right').click(function(){
		move('right');
	});
	
	$('#button-left').css('display', 'none');
	
});		
		
	

