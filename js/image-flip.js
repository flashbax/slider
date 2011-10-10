/************************

BASIC SLIDER

Image

//Put all images in a row on page 
//Have a window that allows you to see one of those images at a time
//Have one div and then add up the amount of images to get a number of the full length 
//Slide to each of the beggings of the image 


 

***********************/


$(document).ready(function(){
	
	//variable to be used across all functions in doc.ready 
	var point=0; //numerical point that we are at in array
	var arr = ['1','2','3','4','5']; //number of image
	
	//initialize functions
	removeLeft();
	removeRight();
	
	//first image
	$('img').attr('src', 'img/'+ arr[point] +'.jpg');
	
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
		
		if (point===arr.length-1) {
			$('#button-right').css('display', 'none');
		}
	}
	
	//.animate({left: '50'}, 5000)
	
	$('#button-left').click(function() { //left button
		
		if (point>=1){ //point cannot be less than 0 
	 		$('img').attr('src', 'img/'+ arr[point-=1] +'.jpg');	 	
  		} 
		
		removeLeft();
	});			
	
		
	$('#button-right').click(function() { //right button
	
		
		if (point<=arr.length-2){ //point cannot equal more than length of array
	 		$('img').attr('src', 'img/'+ arr[point+=1] +'.jpg');
		}
	 	
		removeRight();
	});
	
	
});


