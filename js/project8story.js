var promptsAdventure=[
	'ADJECTIVE', 
	'YOUR NAME',
	'ADVERB ending in ly (such as quietly)']
	// 'ADJECTIVE',
	// 'ANIMAL (plural)',
	// 'VERB ending in ING',
	// 'ARTICLE of CLOTHING',
	// 'FOOD',
	// 'TYPE of LIQUOD',
	// 'THING/OBJECT',
	// 'VERB',
	// 'PART of BODY'];

var answersAdventure=[];
//Track current prompt
var currentPrompt=0;
//var currentAns=0;


var nextPrompt=function(){
	//adds input to answers array
	if(currentPrompt != 0){
    	answersAdventure.push($('.madlibInput').val());  
  	}
  	//if still prompts remaining, ask user
	if(currentPrompt<promptsAdventure.length){
		$('.prompt1').html('<input class="madlibInput" type="text"><br>'+ promptsAdventure[currentPrompt]);
		currentPrompt+=1;
	//otherwise show the final result/ madlib
	}else{
		showFinal();
	}
}


//puts user answers into HTML
var showFinal = function() {
	for(currentAns=0;currentAns<answersAdventure.length;currentAns++){
		var currentElementId='js_ans'+currentAns;
		var currentInput=document.getElementById(currentElementId);
		currentInput.innerHTML = answersAdventure[currentAns];
	}


  //hide button
  $('.madlibButton').hide();

}




$(".madlibButton").click(function(){
  nextPrompt();
});

nextPrompt();

