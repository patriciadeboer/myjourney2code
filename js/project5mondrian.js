//Create your own Mondrian


$(document).ready(function () {

	//Clear canvas
	$('.clearCanvas').on('click',clearCanvas);

	function clearCanvas() {
		//$(this).css("background-color", "white")
		$('.boxes').css("background-color", "white")
		$('.masterpiece').css("visibility", "hidden")
	};

	//OLD VERSION predetermined colors. Now truly random
	// var color1= ['pink','#9A4C95','mediumvioletred', '4A0D67','#551A8B', '#F08CAE', '#1D1A31', '#B68CB8','#FF00FF', '#754C78', '#FF1CAE'];
	// var color2= ['#388E8E', '#00EEEE', '#ADFC92', '#00F5FF','#0EBFE9','#98F5FF','#009ACD','#003EFF','#000080'];
	// var color3= ['lightcoral', 'coral', '#ff4602', '#CC1100', '#FDF0D5', '#EB5E55', '#2CF6B3', '#DE541E', '#FB4D3D'];
	var originalColors = ['yellow','red','blue'];

	
	function randomColor() {
  	return (
	    "rgba(" +
	    Math.round(Math.random() * 250) +
	    "," +
	    Math.round(Math.random() * 250) +
	    "," +
	    Math.round(Math.random() * 250) +
	    "," +
	    Math.ceil(Math.random() * 10) / 10 +
	    ")"
	  );
  	}

	//Change color pallete
	
	$('.originalColors').on('click',setOriginalColors);
	function setOriginalColors(){
		$('.color1').css("background-color", originalColors[0]);
		$('.color2').css("background-color", originalColors[1]);
		$('.color3').css("background-color", originalColors[2]);
		$('.boxes').css("background-color", "white")
		$('.masterpiece').css("visibility", "hidden")
		selectedColor='white';
	}

	//original colors reset
	$('.changePalette').on('click',changePalette);
	//OLD VERSION WITH PREDETERMINED COLORS
	// function changePalette(){
	// 	var randColor1 = Math.floor((Math.random()*color1.length));
	// 	var randColor2 = Math.floor((Math.random()*color2.length));
	// 	var randColor3 = Math.floor((Math.random()*color3.length));
	// 	console.log(randColor2)
	// 	$('.color1').css("background-color", color1[randColor1]);
	// 	$('.color2').css("background-color", color2[randColor2]);
	// 	$('.color3').css("background-color", color3[randColor3]);
	// 	$('.boxes').css("background-color", "white");
	// 	$('.masterpiece').css("visibility", "hidden");
	// 	selectedColor='white';
	// };
	function changePalette(){
		var randColor1 = randomColor();
		var randColor2 = randomColor();
		var randColor3 = randomColor();
		console.log(randColor2)
		$('.color1').css("background-color", randColor1);
		$('.color2').css("background-color", randColor2);
		$('.color3').css("background-color", randColor3);
		$('.boxes').css("background-color", "white");
		$('.masterpiece').css("visibility", "hidden");
		selectedColor='white';
	};

	//selecting and applying the color
	var selectedColor;

	$('.activeColor').on('click', findColor);

	function findColor() {
		selectedColor = $(this).css('background-color');
	};

	$('.boxes').on('click', changeColor);

	function changeColor() {

		$(this).css("background-color", selectedColor );
		if(selectedColor==="white"){
			$('.masterpiece').css("visibility", "hidden")
		}
		else{
			$('.masterpiece').css("visibility", "visible")
		}
	};



});