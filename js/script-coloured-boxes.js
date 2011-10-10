/************************

BASIC SLIDER

Boxes 

- I will need to include 5 different coloured boxes 
- Boxes will need to be displayed in a row on the page 
- Only one box can be seen at a time


Animation 
- User clicks button and box appear to the side which it is coming from 
- Animation slides box in from side which it is supposed to be coming from


Navigation

- I will need to create a left and right button 
- When the last box is shown the button on the right should disappear
- When the first box on the left is show the button on the left should disappear 
- Button left displays box to the left 
- Button right displays box to the right 

 

***********************/


$(document).ready(function(){
	
	//variable to be used across all functions in doc.ready 
	var point=0; //numerical point that we are at in array
	var arr = ['blue','red','green','yellow','orange']; //array of css classes
	
	//initialize functions
	removeLeft();
	removeRight();
	
	
	//initially start with left button removed 
	$('#button-left').css('display', 'none');

	//remove left button 
	function removeLeft() { 
		if (point===0) {
			$('#button-left').css('display', 'none');
			$('#button-right').css('display', 'block');
		} else { 
			$('#button-right').css('display', 'block');
		}
	}
	
	//remove right button 
	function removeRight() { 
		if (point===arr.length-1) {
			$('#button-right').css('display', 'none');
			$('#button-left').css('display', 'block');
		} else { 
			$('#button-left').css('display', 'block');
		}
	}
	
	
	$('#button-left').click(function() { //left button
		
		if (point>=1){ //point cannot be less than 0 
	 		
	 		$('div').removeClass(arr[point]).addClass(arr[point-=1]);
	 		console.log(arr[point]);
	 	} 
		
		removeLeft();
	});			
	
		
	$('#button-right').click(function() { //right button
		
		if (point<=arr.length-2){ //point cannot equal more than length of array
	 		
	 		$('div').removeClass(arr[point]).addClass(arr[point+=1]);
	 		console.log(arr[point]);
	 	}
	 	
		removeRight();
	});
	
	
});


