/************************

BASIC SLIDER

Image

//Put all images in a row on page 
//Have a window that allows you to see one of those images at a time
//Have one div and then add up the amount of images to get a number of the full length 
//Slide to each of the beggings of the image 


 

***********************/


$(document).ready(function(){
	
	var total=2500;// total length of all images side by side 
	var imageLeft=$('img').css('left'); //stores the left point of the image
	var point=parseInt(imageLeft, 10); //changes the css left string to a numeric value 

	//initially start with left button removed 
	$('#button-left').css('display', 'none');

	//remove left button at end point
	function removeLeft() { 
		$('#button-right').css('display', 'block');
		
		if (point===0) {
			$('#button-left').css('display', 'none');	
		}
	}
	
	//remove right button at end point
	function removeRight() { 
		$('#button-left').css('display', 'block');
		
		if (point===total-1) {
			$('#button-right').css('display', 'none');
				
		}
	}
	
	$('#button-left').click(function() { //left button
		
		if (point>=total){ //point is greater than 0 or equal to total (2500)
	 		$('img').animate({left: '500'}, 5000);	
  		} 
		 
		removeLeft();
	});			
		
	$('#button-right').click(function() { //right button
		
		if (point<=total){ //point is less than or equal to the total (2500)
	 		$('img').animate({left: '-500'}, 5000);	
	 			
		}
		
		removeRight();

	});
	
	
});
// Question: How can i use the off set to tell me the point that I am at? 
//where is it? 
//where it is plus 500

