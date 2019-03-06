var promptsAdventure=[
	'ADJECTIVE', 
	'YOUR NAME',
	'ADVERB ending in ly (such as quietly)',
	'ADJECTIVE',
	'ANIMAL (plural)',
	'VERB ending in ING',
	'ARTICLE of CLOTHING',
	'FOOD',
	'TYPE of LIQUOD',
	'THING/OBJECT',
	'VERB',
	'PART of BODY'];

var answersAdventure=[];
//Track current prompt
var currentPrompt=0;
//var currentAns=0;

https://www.facebook.com/
var nextPrompt=function(){
	//adds input to answers array
	if(currentPrompt != 0){
    	answersAdventure.push($('.madlibInput').val());  
  	}
  	//if still prompts remaining, ask user
	if(currentPrompt<promptsAdventure.length){
		$('.prompt1').html('<input class="madlibInput" id="madlibInputSpot" type="text"><br>'+ promptsAdventure[currentPrompt]);
		currentPrompt+=1;
	//otherwise show the final result/ madlib
	}else{
		showFinal();
	}
}
//Try to see if changing ID to be different if I can get Enter key to work
// var nextPrompt=function(){
// 	//adds input to answers array
// 	if(currentPrompt != 0){
//     	answersAdventure.push($('.madlibInput').val());  
//   	}
//   	//if still prompts remaining, ask user
// 	if(currentPrompt<promptsAdventure.length){
// 		$('.prompt1').html('<input class="madlibInput" id="madlibInputSpot'+currentPrompt+'" type="text"><br>'+ promptsAdventure[currentPrompt]);
// 		currentPrompt+=1;
// 	//otherwise show the final result/ madlib
// 	}else{
// 		showFinal();
// 	}
// }

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





var nextInput = document.getElementById("madlibInputSpot");
nextInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    nextPrompt();
  }
});

// var nextInput = document.getElementById("madlibInputSpot0");
// nextInput.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     nextPrompt();
//   }
// });

// var nextInput = document.getElementById("madlibInputSpot");

// var onEnterKey = function(event){
// 	if (event.keyCode === 13) {
// 		nextPrompt();
// 	}
// };
// $("#madlibInputSpot").addEventListener("keyup", onEnterKey);



