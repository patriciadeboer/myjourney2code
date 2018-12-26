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

	let numKeys=Object.keys(diceObject).length;
	let keys=Object.keys(diceObject);

	//3 & 4 of a kind counts
	for(let key in diceObject){
		let currentCount=diceObject[key];

		if(currentCount>2){
			threeKind=diceValues.reduce((x,y)=> x+y);
		}
		if(currentCount>3){
			fourKind=diceValues.reduce((x,y)=> x+y);
		}
		//if only 2 keys, and one has count of 2, other must be count of 3
		if(numKeys===2 && currentCount===2){
			fullHouse=25;
		}
		chance=diceValues.reduce((x,y)=>x+y);
	}


	//small Straight
	if(numKeys>3){
		let incrementalCount=0;
		let arrayDice=diceValues.slice();
		let len=arrayDice.length;
		let minimum = Math.min(...arrayDice);

		for(let i=0;i<len-1;i++){
			
			let idx = arrayDice.indexOf(minimum);
			let nextValue=minimum+1;
			let nextIdx=arrayDice.indexOf(nextValue)

			// console.log(arrayDice)
			// console.log(idx)
			// console.log(minimum)
			// console.log(nextValue)
			arrayDice.splice(idx,1);
			// console.log(arrayDice)

			if(nextIdx!==-1){
				incrementalCount++;
				minimum=nextValue;
			}else{
				incrementalCount=0;
				minimum = Math.min(...arrayDice);
			}
			//console.log("count: "+incrementalCount)

			if(incrementalCount>2){
				smStr=30;
			}
			if(incrementalCount>3&&numKeys>4){
				lgStr=40;
			}
		}
	}
	//large Straight
	// for(let i=1;i<numKeys;i++){
	// 	let currentValue=sortedDice[i];
	// 	let difference=sortedDice[i]-sortedDice[i-1];

	// 	if(numKeys<5||difference>1){
	// 		lgStr=0;
	// 	}else{
	// 		lgStr=40;
	// 	}
	// }

	//Yahtzee?
	if(numKeys===1){
		yahtzeeee=50;
	}


	document.getElementById("score1").innerHTML=score1;
	document.getElementById("score2").innerHTML=score2;
	document.getElementById("score3").innerHTML=score3;
	document.getElementById("score4").innerHTML=score4;
	document.getElementById("score5").innerHTML=score5;
	document.getElementById("score6").innerHTML=score6;
	document.getElementById("threeKind").innerHTML=threeKind;
	document.getElementById("fourKind").innerHTML=fourKind;
	document.getElementById("fullHouse").innerHTML=fullHouse;
	document.getElementById("smStr").innerHTML=smStr;
	document.getElementById("lgStr").innerHTML=lgStr;
	document.getElementById("chance").innerHTML=chance;
	document.getElementById("yahtzeeee").innerHTML=yahtzeeee;
}
