let diceRolls=3;
let diceValues=[];


function roll_dice(){
	let dice = 0;

	if(diceRolls>0){
		diceRolls--;
	}else{
		alert("Max rolls reach for this turn. Select score first");
		throw "Must submit score / Max rolls reached for this turn"
	}

	let rollsRemaining=document.getElementById('rolls');
	rollsRemaining.innerHTML=diceRolls;

	//Create random numbers for dice face
	for(let i=0;i<5;i++){
		let currentDice='dice'+(i+1);
		var currentValue=document.getElementById(currentDice);
		let classArr= currentValue.parentNode.className;
		//if user selected dice, do not re-roll
		if (!classArr.includes('hold')){
			dice = Math.floor((Math.random()*6))+1;
			//console.log(dice)
			//console.log(currentDice)	
			currentValue.innerHTML = dice;
			diceValues[i]=dice;
		}
	}
	console.log(diceValues)
	calculateScore();
}

//If face selected, change class to 'hold'
$('.face').click(function(){
  if(diceRolls===3){
  	alert("Roll the dice first!")
  	throw "No numbers availabe to select"
  }
  if ($(this).hasClass('hold')) {
    $(this).removeClass('hold');
  } else {
    $(this).addClass('hold');
  }
});

function calculateScore(){
	//sort dice values
	sortedDice=diceValues.slice();
	sortedDice.sort();
	console.log(sortedDice)

	let score1=0;
	let score2=0;
	let score3=0;
	let score4=0;
	let score5=0;
	let score6=0;
	//Number Scores
	for(let i=0;i<5;i++){
		if(diceValues[i]===1){
			score1++;
		}
		if(diceValues[i]===2){
			score2+=2;
		}
		if(diceValues[i]===3){
			score3+=3;
		}
		if(diceValues[i]===4){
			score4+=4;
		}
		if(diceValues[i]===5){
			score5+=5;
		}
		if(diceValues[i]===6){
			score6+=6;
		}
	}
	//Unique Score Points
	let threeKind = 0;
	let fourKind = 0;
	let fullHouse = 0;
	let smStr = 0;
	let lgStr = 0;
	let chance = 0;
	let yahtzeeee = 0;

	let diceObject={};

	for(let i=0;i<5;i++){
		if(diceValues[i] in diceObject){
			diceObject[diceValues[i]]++;
		}else{
			diceObject[diceValues[i]]=1;
		}
	}
	console.log(diceObject)
	//3 & 4 of a kind counts
	for(let key in diceObject){
		let currentCount=diceObject[key];
		if(currentCount>2){
			threeKind=diceValues.reduce((x,y)=> x+y);
		}
		if(currentCount>3){
			fourKind=diceValues.reduce((x,y)=> x+y);
		}
		chance=diceValues.reduce((x,y)=>x+y);
	}



	// for(let i=0;i<5;i++){
	// 	let currentValue=sortedDice[i];


	// 	chance+=diceValues[i];

	// }

	document.getElementById("score1").innerHTML=score1;
	document.getElementById("score2").innerHTML=score2;
	document.getElementById("score3").innerHTML=score3;
	document.getElementById("score4").innerHTML=score4;
	document.getElementById("score5").innerHTML=score5;
	document.getElementById("score6").innerHTML=score6;
	document.getElementById("threeKind").innerHTML=threeKind;
	document.getElementById("fourKind").innerHTML=fourKind;
	document.getElementById("chance").innerHTML=chance;
}
