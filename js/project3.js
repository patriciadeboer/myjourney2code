
var chosenWord;
var blanks;
var wrongCount=0;
var correctCount=0;
var wordString;
var wrongGuesses=[];
var done="";

function triggerWord(){
	//pick random word from list of 100 set words
	var wordOptions=["present","tongue","trains","clever","milk","juice","rebel","itchy","society","tiger","error","jail","needy","swanky","arrive","feeble","cooing","day","imaginary","honorable","shape","laugh","haircut","accept","flow","crabby","judge","witty","pointless","nasty","obsolete","bomb","whistle","surprise","uneven","ceaseless","holiday","destroy","glossy","irate","taste","open","tomatoes","brother","current","girls","stew","naughty","cautious","sleet","rain","romantic","fire","pine","practice","dolls","abusive","building","cagey","coherent","madly","dirt","wrathful","wall","slimy","apparel","measly","tart","humdrum","experience","island","sneeze","green","pedal","crime","hunt","spot","change","distinct","trashy","need","tiresome","remember","sheep","plan","ignorant","unbecoming","dazzling","pinch","powerful","annoy","dust","white","evasive","injure","ruthless","enjoy","vessel","reflect","chop"];
	var randomWord = Math.floor((Math.random()*wordOptions.length));

	//establish chosenWord
	chosenWord = wordOptions[randomWord];
	console.log('Word: '+chosenWord)

	var blank ='_ ';
	var wordLength=chosenWord.length;
	blanks = blank.repeat(wordLength);
	//input to screen number of blanks of chosen word and feed back to html
	var wordz= document.getElementById('guessWord');
   	wordz.innerHTML =blanks;

   	//reset counts and guesses
   	wrongCount=0;
	correctCount=0;
	wordString;
	wrongGuesses=[];
	done="";

	var guesses=document.getElementById('wrongGuesses');
	guesses.innerHTML='';

	document.getElementById('youGotIt').innerHTML='';
	document.getElementById('x').innerHTML='';

	hangmanFigure();
}

function hangman(){
	//get input from user & word from triggerWord function
	var wordSelected=chosenWord;
	var wrongArray=wrongGuesses;
	var correct=false;

	//check if they triggered a word
	if(!chosenWord){
		alert("Must select a word. Click button above");
		document.getElementById('letterGuess').value='';
		throw "No word selected yet"
	}

	if(wrongCount===0&&correctCount===0){
		wordString=blanks.split(' ');
	}

	//takes user input and converts to lowercase
	var textInput = document.getElementById('letterGuess');
	var actualInput=textInput.value;
	var actualGuess=actualInput.toLowerCase();

	//check if input is blank OR already submitted
	if(done==="right"||done==="wrong"){
		alert("You already finished. Play again?");
		document.getElementById('letterGuess').value='';
		throw "Finished game"
	}else if(actualGuess===''){
		alert("Error: Input cannot be blank");
		document.getElementById('letterGuess').value='';
		throw "Input cannot be blank"
	}else if(wrongGuesses.includes(actualGuess)||wordString.includes(actualGuess)){
		alert("You've already tried that letter");
		document.getElementById('letterGuess').value='';
		throw "Already submitted that letter :)"
	}else if(actualGuess.length>1){
		alert("You entered more than 1 letter");
		document.getElementById('letterGuess').value='';
		throw "Not a single letter"
	}else if(actualGuess.match(/[A-z]/gi)===null){
		alert("Please enter an alphabetical letter");
		document.getElementById('letterGuess').value='';
		throw "Not an alphabetical letter"
	}




	if(!chosenWord.includes(actualGuess)) {
		wrongCount++;
		wrongGuesses.push(actualGuess);
		console.log(wrongCount)
		if(wrongCount===6){
			doneAnswer();
			done="wrong";
			var rightAnswer= document.getElementById('youGotIt');
   			rightAnswer.innerHTML ='Nice try. Try Again?';
		}
	}else{
		for(let i=0;i<chosenWord.length;i++){
			 if(chosenWord[i].includes(actualGuess)){
			 	correctCount++;
			 	wordString[i]=actualGuess;
			 }
			 if(correctCount===chosenWord.length){
   				var rightAnswer= document.getElementById('youGotIt');
   				rightAnswer.innerHTML ='Yay! You got it!';
   				beerAnswer();
   				var correct=true;
   				done="right";
   			}
		}
	};


	var wordGuess= document.getElementById('guessWord');
   	wordGuess.innerHTML =wordString.join(' ');

   	if(wrongCount>0){
   		var wrongGuess= document.getElementById('wrongGuesses');
   		wrongGuess.innerHTML ='Wrong Guesses: ('+wrongCount+') --> '+ wrongGuesses.join(', ');
   	}

   	document.getElementById('letterGuess').value='';
   	hangmanFigure(correct);

}

function doneAnswer(){
	var x = document.createElement("IMG");
    x.setAttribute("src", "../images/cryingemoji.png" );
    x.setAttribute("alt", "Sad face");
    document.getElementById('x').appendChild(x);
}

function beerAnswer() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "../images/beer.png" );
    x.setAttribute("alt", "Beer");
    document.getElementById('x').appendChild(x);
}

//determines which is right hangman figure to display
function hangmanFigure(value){
	document.getElementById('y').innerHTML='';
	if(!value){
		var numWrong=wrongCount;
		var imgName='../images/project3/hangman'+wrongCount+'.PNG';
	}else{
		var imgName='../images/project3/hangmanok.PNG'
	}

	var y = document.createElement("IMG");
    y.setAttribute("src", imgName );
    y.setAttribute("alt", "Hangman Figure");
    document.getElementById('y').appendChild(y);

}

