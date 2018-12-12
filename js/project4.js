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

		checkWinner();
	}

	function checkWinner(){

		//ROWS
		var comboR1 = [$('.tbox0').text(),$('.tbox1').text(),$('.tbox2').text()];
		var comboR2 = [$('.tbox3').text(),$('.tbox4').text(),$('.tbox5').text()];
		var comboR3 = [$('.tbox6').text(),$('.tbox7').text(),$('.tbox8').text()];

		//Columns
		var comboC1 = [$('.tbox0').text(),$('.tbox3').text(),$('.tbox6').text()];
		var comboC2 = [$('.tbox1').text(),$('.tbox4').text(),$('.tbox7').text()];
		var comboC3 = [$('.tbox2').text(),$('.tbox5').text(),$('.tbox8').text()];

		//Diagonals
		var comboD1 = [$('.tbox0').text(),$('.tbox4').text(),$('.tbox8').text()];
		var comboD2 = [$('.tbox2').text(),$('.tbox4').text(),$('.tbox6').text()];

		// console.log('Row1: '+comboR1.join(''))
		// console.log('Row2: '+comboR2.join(''))
		// console.log('Row3: '+comboR3.join(''))

		if(comboR1.join('')==='XXX'||comboR2.join('')==='XXX'||comboR3.join('')==='XXX'){
			document.getElementById('winner').innerHTML='YAY! You Win! :) ';
		}
		if(comboC1.join('')==='XXX'||comboC2.join('')==='XXX'||comboC3.join('')==='XXX'){
			document.getElementById('winner').innerHTML='YAY! You Win! :) ';
		}
		if(comboD1.join('')==='XXX'||comboD2.join('')==='XXX'){
			document.getElementById('winner').innerHTML='YAY! You Win! :) ';
		}

		console.log('Row1: '+comboR1)
		console.log('Row2: '+comboR2)
		console.log('Row3: '+comboR3)
	}

});

