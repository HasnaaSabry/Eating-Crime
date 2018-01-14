var currentDroplet;
var curDropletID;
var newDropletSpeed;
var nrlives;
var score;
var charIsFalling;
var correctHits = 0;
var dropletsSolved=false;
var interval;
$(document).ready(function()
{
	$("#waterfall").fadeTo("fast", 1);

	startNewGame();

});


function startNewGame() {
	$("#waterfall").fadeTo("fast", 1);

	currentDroplet = '';
	curDropletID = '';
	newDropletSpeed = 1000;

	charIsFalling = false;
	updateStats();
	interval = setInterval("createDroplet()",2000);
	// Register keypress events on the whole document

	$(document).keydown(function(e) {
		var myKey1 = (e.keyCode-96); //left keypad
		var myKey2 = (e.keyCode - 48); //uuper keypad
		//alert(e.keyCode - 48);
		if( myKey1 == currentDroplet )
		 {
			correctHits++;
			document.getElementById("d"+correctHits).innerHTML=myKey1;
			corrDropletChar();
		}
		else if(myKey2 == currentDroplet)
		{
			correctHits++;
			document.getElementById("d"+correctHits).innerHTML=myKey2;
			corrDropletChar();
		}
		 else {
			if(charIsFalling) {
				wrongDropletChar();
				for (var i = 1; i <= correctHits; i++) {
							document.getElementById("d"+i).innerHTML="*";
				}
				correctHits=0;

	}

}
});
}

/**
* Updates the current character in the droplet into a random character.
*/
function changeCurrentDroplet() {
   currentDroplet =  Math.round(Math.random() * 9);
}

/**
* Created a unique droplet.
*/
function createDroplet() {
	if(dropletsSolved){
		clearInterval(interval);
	}
	else{
	changeCurrentDroplet();
	var newdroplet = document.createElement("div");
	$(newdroplet).attr("class", "fallingchar");
	var tempId = "waterdrop" + Math.floor(Math.random()*3003);
	$(newdroplet).attr("id", tempId);
	curDropletID = tempId;

	var leftMargin = (Math.ceil(Math.random() * ($("#waterfall").width() - 31)));
	$(newdroplet).css({ marginLeft: leftMargin + "px" });

	var dropletchar = document.createElement("p");
	$(dropletchar).html(currentDroplet);
	$(dropletchar).appendTo(newdroplet);
	document.getElementById("waterfall").insertBefore(newdroplet,document.getElementById("waterfall").firstChild);
	//$(newdroplet).appendTo("#waterfall");

	charFall(tempId, newDropletSpeed);
	}
}



/**
* Animates a character falling.
*/
function charFall(id, fallingtime) {
	charIsFalling = true;
	var droplet = $("#" + id);
	droplet.animate({
			marginTop : (droplet.parent().height() - droplet.height()) + 'px'
		}, {
			duration: fallingtime,
			easing: "easeInCubic",
			complete: function() {
				splashChar(id);
			}
	});
}

/**
* When a droplet hits the ground, this function is called.
* The number of lives goes down.
*/
function splashChar(id){
	charIsFalling = false;
	currentDroplet = '';
	$("#" + id).effect('puff');
	for (var i = 1; i <= correctHits; i++) {
				document.getElementById("d"+i).innerHTML="*";
	}
				correctHits=0;
	updateStats();
}

/**
* Called when the user pressed the correct character.
* Score goes up and determines next droplet speed.
*/
function corrDropletChar() {
	charIsFalling = false;


	$("#" + curDropletID)
		.stop()
		.fadeOut();

	updateStats();
}

/**
* Called when the user pressed the wrong character in hard mode
* removing one life.
*/
function wrongDropletChar() {
	currentDroplet = '';
	charIsFalling = false;

   	$("#" + curDropletID)
		.stop()
		.effect('explode');

	updateStats();
}

/**
* Needed to update all the current stats and create new droplets.
*/
function updateStats(){

	if(correctHits < 8 && !charIsFalling) {
		//setTimeout("createDroplet()", 1000);
		//charIsFalling = true;
	} else {
		charIsFalling = false;
		dropletsSolved = true;
		var gameover = document.createElement("div");
		$(gameover).attr("class", "gameoverscreen");
		$(gameover).attr("id", "gameoverscreen");
		$(gameover).html("<img src='images/game-over.png' /><h2>Access Allowed</h2><p class='counter'>");
		$(gameover).css("cursor", "pointer");

		$(gameover).click(function() {
			location.reload(true);
		});

		$(gameover).prependTo("#waterfall");

		document.getElementById("sus1").src="images/sus_medhat.jpg";
		document.getElementById("sus2").src="images/sus_mazin.jpg";
		document.getElementById("wrapper").style.display="none";
		document.getElementById("back-btn2").style.display="block";
		document.getElementById("overlay2").style.display="block";
		document.getElementById("overlay2").src= "images/screen_fb1.jpg";
	}
}
