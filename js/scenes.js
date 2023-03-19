			//var puzzleSolved = false;
			//var doorKeyAppear = false;
			//var roojDiscovered = false;
			//var newMsg = false;
			//var keyCaught = false;
			//var currentScene = "room";
			var in_basket = false;
			var basket_pepsi_paper_collected = 0; //new
			var bag_ID_check_collected = 0; //new
			var bag_lock_opend = false;
			var basketDropped = false;

			// el character awel lma nfta7 el game
			var finishedSpeaking = false; //new
			var puzzleCollected=0;
			var lockerPasswordCounter=0;
			var lockerPassword = "";
			var lockerPasswordSolved=false;
			var foundInLocker = false;

			var doorKeyFound = false;
			var bagKeyFound = false;

			var showText = function (target, message, index, interval) {  //new
				if (index < message.length) {
				$(target).append(message[index++]);
				setTimeout(function () { showText(target, message, index, interval); }, interval);
				} else{
					setTimeout(function () {
						finishedSpeaking = true ;
						document.getElementById("main_box").style.display = "none";
						document.getElementById("room").style.display = "block";
						document.getElementById("left").style.display = "block";
					}, 2000);
				}

			}

			$(function () { //new
				var str =  "Hi , seems like you are trying to help me solve my case. "
				+"let's find out who ate inside the room! "
				+"try to collect the evidences in less than 10 minutes, otherwise you will have to pay 5LE . "
				+"Remember, Time is Money . "
				+"GO!" ;

				///////////////////////////////////////////////////////////////////////////
				// here just short message str="Hi" for making testing easier
				// don't forget to change the number to longer time ex. 5000 in setTimeout()
				/////////////////////////////////////////////////////////////////////////
				var str="Hi";
				showText("#msg", str, 0, 50);
			});




//////////////////////////////////////////////////////////////////////////////
///////// TIME TABLE                                       ///////////////////////
////////////////////////////////////////////////////////////////////////////

			function zoomTimeline(){
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/timeline.jpg";

				document.getElementById("left").style.display = "none";
			}

// puzzle piece on the floor
			function zoomPuzzle1(){
				puzzleCollected++;
				alert("no.puzzle = " + puzzleCollected);
				document.getElementById("puzzle3_evid").src="images/Asset 3.png";

				if(puzzleCollected==4)
					startPuzzle();
				document.getElementById("room").src="images/roomb.jpg";
			}

			function backToRoom(){ //done
				document.getElementById("room").style.display = "block";
				document.getElementById("left").style.display = "block";
				document.getElementById("overlay").style.display="none";
				document.getElementById("overlay2").style.display="none";
				document.getElementById("wrapper").style.display="none";//to be edited
				document.getElementById("back-btn1").style.display="none";

				if(document.getElementById("overlay").childNodes.length > 0)
					document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
			}


			function backToOverlay(){ //done

				document.getElementById("overlay").style.display = "block";
				document.getElementById("overlay2").style.display="none";
				document.getElementById("back-btn2").style.display="none";
				document.getElementById("overlay3").style.display="none";//to be edited
				document.getElementById("wrapper").style.display="none";//to be edited

				if(in_basket){
					in_basket = false ;
					zoomBasket();
				}
			}

			// **************************************** Room 2 code : *************************************************

			function zoomEnvelops(){
				document.getElementById("room2").style.display = "none";
				document.getElementById("overlayRoom2").style.display="block";
				document.getElementById("back-btn1Room2").style.display="block";
			 	document.getElementById("overlayRoom2").src= "images/envelops1.jpg";
				document.getElementById("overlayRoom2").useMap = "#myImageMap";

				document.getElementById("right").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="127,43,603,610";
				myArea.shape="rect";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){zoomenvelops_2()};

				myMap.appendChild(myArea);
				document.getElementById("overlayRoom2").appendChild(myMap);
				//$('area').css('cursor','copy');
			}

			function zoomenvelops_2(){
				document.getElementById("overlayRoom2").style.display = "none";

				//document.getElementById("back-btn2Room2").style.display="block";
				if(memorySolved){
					//document.getElementById("overlay2Room2").style.display="block";
			 		//document.getElementById("overlay2Room2").src= "images/envelops2.jpg";
					puzzleCollected++; ///memory paper
					alert("no.puzzle = " + puzzleCollected);
					document.getElementById("back-btn1Room2").style.display="block";
					document.getElementById("overlayRoom2").removeChild(document.getElementById("overlayRoom2").childNodes[0]);
					if(puzzleCollected==4){
						startPuzzle();}
			 	}
			 	else{
			 		document.getElementById("memoryEnvelops").style.display="block";
			 	}
			 	////show image of envelops with paper pieces at envelops.js file
			}

			function backToRoom2(){ //done
				document.getElementById("room2").style.display = "block";
				document.getElementById("right").style.display = "block";
				document.getElementById("overlayRoom2").style.display="none";
				document.getElementById("back-btn1Room2").style.display="none";
				if(document.getElementById("overlayRoom2").childNodes.length > 0)
					document.getElementById("overlayRoom2").removeChild(document.getElementById("overlayRoom2").childNodes[0]);
				document.getElementById("memoryEnvelops").style.display="none";
				document.getElementById("overlay3").style.display="none";
				document.getElementById("overlay2Room2").style.display="none";


				alert("back to room 2 zeft w nela");
			}

			function backToOverlayRoom2(){ //done
					document.getElementById("overlayRoom2").style.display = "block";


				document.getElementById("overlay2Room2").style.display="none";
				document.getElementById("back-btn2Room2").style.display="none";
				document.getElementById("overlay3").style.display="none";
				document.getElementById("card-wrapper").style.display="none";
				document.getElementById("overlay4").style.display="none";

				alert("backtoOverlay room 2");

			}

			// ****************** roomsec **********************//
			function zoomDesk(){
				document.getElementById("roomsec").style.display = "none";
				document.getElementById("overlayRoomsec").style.display="block";
				document.getElementById("back-btnToroomsec").style.display="block";
			 	document.getElementById("overlayRoomsec").src= "images/deskview.jpg";
				document.getElementById("overlayRoomsec").useMap = "#myImageMap";

				//document.getElementById("left").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="316,23,78,30,81,172,301,164";
				myArea.shape="poly";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){ zoomlaptopsec();};

				myMap.appendChild(myArea);
				document.getElementById("overlayRoomsec").appendChild(myMap);

			}
			function zoomlaptopsec(){
				document.getElementById("overlayRoomsec").style.display = "none";
				//document.getElementById("overlay2Roomsec").style.display="block";
			 	//document.getElementById("overlay2Roomsec").src= "images/desktop.jpg";
				document.getElementById("secDesktop").style.display="block";

			}

			function backToRoomsec(){
				document.getElementById("roomsec").style.display = "block";
				document.getElementById("GuessGame").style.display="none";
				document.getElementById("secDesktop").style.display="none";
				document.getElementById("overlayRoomsec").style.display="none";
				document.getElementById("back-btnToroomsec").style.display="none";
			}

			// ****************** moving between rooms **********************//

			function gotoRoom2(){
				document.getElementById("left").style.display = "none";
				document.getElementById("room").style.display="none";
				document.getElementById("right").style.display = "block";
				document.getElementById("room2").style.display="block";
			}

			function gotoRoom1(){
				document.getElementById("left").style.display = "block";
				document.getElementById("room").style.display="block";
				document.getElementById("right").style.display = "none";
				document.getElementById("room2").style.display="none";
			}




			// **************** Security desktop **************************** //

			function showPop(){
			document.getElementById("sec-pop-up").style.display="block";
		}

		function backToDesktopF(){
			document.getElementById("codes-table").style.display="none";
			document.getElementById("backtodesktopF").style.display="none";
			document.getElementById("secDesktop").style.display="block";
		}
		function backToDesktopV(){
			document.getElementById("secVideo").style.display="none";
			document.getElementById("backtodesktopV").style.display="none";
			document.getElementById("secDesktop").style.display="block";
		}
		function playMovie(sel){
			var option = sel.options[sel.selectedIndex].value;
			document.getElementById("sec-pop-up").style.display="none";
			if(option == 0){
				//play video
				document.getElementById("secVideo").style.display="block";
				$("#hishamVideo").fadeIn();
				$("#hishamVideo").animate({left: '510px'}, 3000);
				$("#hishamVideo").fadeOut(1000);
				$("#ibrahimVideo").fadeIn(3000);
				$("#ibrahimVideo").animate({left: '515px'}, 3000);
				$("#ibrahimVideo").fadeOut(1000);
				$("#imanVideo").fadeIn(6000);
				$("#imanVideo").animate({left: '570px'}, 3000);
				$("#imanVideo").fadeOut(1000);
				document.getElementById("backtodesktopV").style.display="block";
			}
		}
		function showGuess(){
			document.getElementById("GuessGame").style.display="block";
		}
