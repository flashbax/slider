/************************

BASIC SLIDER

Image

//Put all images in a row on page 
//Have a window that allows you to see one of those images at a time
//Have one div and then add up the amount of images to get a number of the full length 
//Slide to each of the beggings of the image 


 

***********************/


$(document).ready(function(){
	
	var positiveTotal=2500;// the max length of all images side by side 
	var negativeTotal=-2500; // the max negative length of all images side by side
	var animating = false; // false until animation begins
	
		
	//initially start with left button removed 
	$('#button-left').css('display', 'none');
	
		
	$('#button-left').click(function() { //left button
		var moveImageRight=$('img').css('left') //stores the left point of the image
		var position=parseInt(moveImageRight, 10); //changes the css left string to a numeric value
		var newPosition = position+500;
	
		if (animating) { 
			return;
		}
		
		if (newPosition<positiveTotal){ //point is greater than 0 or equal to total (2500)
	 		animating=true;
	 		$('img').animate({left: newPosition}, 1000, function() { 
	 			animating = false;
	 		});	
  		}  
		
		$('#button-right').css('display', 'block');
		
		if (newPosition===0) {
			$('#button-left').css('display', 'none');	
		}
	});			

		
	$('#button-right').click(function() { //right button
		
		var moveImageLeft=$('img').css('left'); //stores the left point of the image
		var position=parseInt(moveImageLeft, 10); //changes the css left string to a numeric value
		var newPosition = position-500;
		
		if (animating) { 
			return;
		}
		
		if (newPosition>negativeTotal) { 
			animating=true;
			$('img').animate({left: newPosition}, 1000, function() { 
				animating = false;
			});
		}
		
		$('#button-left').css('display', 'block');
		
		if (newPosition===negativeTotal) {
			$('#button-right').css('display', 'none');
		}
		
		
	});
	
	
});
// Question: How can i use the off set to tell me the point that I am at? 
//where is it? 
//where it is plus 500

