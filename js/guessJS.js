
			var guessme=Math.round(Math.random()*(99)+1);
			var speech='Guess my number (from 1 to 100)';

			function process(mystery) {
			var guess=document.forms.guessquiz.guess.value;
			var speech='"'+guess+ '" does not make sense to me.';
			document.forms.guessquiz.guess.value='';

			if (guess==mystery)
			{
				//alert("right");
				document.getElementById("GuessGame").style.display="none";
				document.getElementById("codes-table").style.display="block";
				document.getElementById("backtodesktopF").style.display="block";
			}

			if (mystery<guess)
			{
			speech='Less than '+ guess;
			}

			if (mystery>guess)
			{
			speech='Greater than '+ guess;
			}

			if (guess=='')
			{
			speech='You didn\'t guess anything!'
			}

			document.forms.guessquiz.prompt.value=speech; document.forms.guessquiz.guess.focus();

			}
