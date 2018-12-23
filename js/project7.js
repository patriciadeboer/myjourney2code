function roll_dice(){
	let dice = 0;

	for(let i=0;i<5;i++){
		dice = Math.floor((Math.random()*6))+1;
		console.log(dice)
		let currentDice='dice'+(i+1);
		console.log(currentDice)
		var currentValue=document.getElementById(currentDice);
		currentValue.innerHTML = dice;
	}
}

function hold_dice(){
	console.log("hi")
	// $(".face").css("background-color",'blue');
}