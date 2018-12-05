

	function change_back(){
		var colors= ['lightcoral', 'coral', '#ff4602', '#CC1100', '#FDF0D5', '#EB5E55', '#2CF6B3', '#DE541E', '#FB4D3D','blue','teal','beige'];

		var randColors = Math.floor((Math.random()*colors.length));
		console.log(randColors);

		$(".project2").css("background-color", colors[randColors]);
	}

	function change_font(){
		var pColors = ['white','black','blue','orange','pink','gray','aquamarine', '#754C78', '#FF1CAE'];
		var headingColors=['#388E8E', '#00EEEE', '#ADFC92', '#00F5FF','#0EBFE9','#98F5FF','#009ACD','#003EFF','#000080'];
		var h2Colors= ['magenta','#9A4C95','mediumvioletred', '4A0D67','#551A8B', '#F08CAE', '#1D1A31', '#B68CB8','#FF00FF'];
		var randFont=Math.floor((Math.random()*pColors.length));

		$("p").css("color",pColors[randFont]);
		$("h1").css("color",headingColors[randFont]);
		$("h2").css("color",h2Colors[randFont]);
	}

	function change_greet(){
		var greetingLanguage = ['Hola', 'Hoi', 'Welcome','Bonjour','Ciao','Namaste','Marhaba','Nǐ hǎo','Guten tag', 'Shalom','Konnichiwa','Jambo']
		var randGreet=Math.floor((Math.random()*greetingLanguage.length));

		var greet=document.getElementById('js_greet');
		greet.innerHTML = greetingLanguage[randGreet];
	}

	function get_name(){
		var textInput = document.getElementById('nameInput'); //built function into browser
		var actualText = textInput.value

		var name= document.getElementById('js_name_string');
   		name.innerHTML =' '+ actualText;
	}
