$(document).ready(function () {
	$("#board tr td").click(userMarkBox);

	var boxes = [0,1,2,3,4,5,6,7,8]

	function userMarkBox() {

		if($(this).text()===''){
			$(this).append("X");
		}else{
			alert("Box already played");
			throw "Box already played";
		}
		var selectedBox = (this).className;
		console.log(selectedBox)
		checkWinner(selectedBox);
		computerTurn(selectedBox);
	}

	function computerTurn(userBox){

		var hit;
		var selected;
		var randomIdx;
		var computerPick;
		compPick();

		function compPick(){
			hit=0;
			selected = '.'+userBox;
			console.log(boxes)
			randomIdx = Math.floor((Math.random()*boxes.length));
			console.log(randomIdx)
			computerPick = '.tbox'+boxes[randomIdx];
		}

		// console.log(randomIdx)
		// console.log(computerPick)
		// console.log(selected)

		while(hit===0){
			if($(computerPick).text()!==''|| computerPick===selected){
				boxes.splice(randomIdx,1)
				compPick();
			}else{
				$(computerPick).append("O")
				hit++;
			}
		}


	}

	function checkWinner(){

		var combo1 = [$('.tbox0').text(),$('.tbox1').text(),$('.tbox2').text()];
		console.log(combo1)
	}

});

