

	function change_back(){
		var colors= ['lightcoral', 'coral', '#ff4602', '#CC1100', '#FDF0D5', '#EB5E55', '#2CF6B3', '#DE541E', '#FB4D3D','blue','teal','beige'];

		var randColors = Math.floor((Math.random()*colors.length));
		console.log(randColors);

		$(".project2").css("background-color", colors[randColors]);
		//$("#project2").css("background-color", "gray")

	}

	function get_name(){
		var textInput = document.getElementById('nameInput'); //built function into browser
		var actualText = textInput.value

		var name= document.getElementById('js_name_string');
   		name.innerHTML =' '+ actualText;
	}
