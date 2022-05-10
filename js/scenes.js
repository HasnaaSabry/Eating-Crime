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
					}, 3000);
				}

			}

			$(function () { //new
				var str =  "Hi Esraa, seems like you are trying to help me in solving my case. "
				+"let's find out who ate inside the room! "
				+"try to collect the evidences in less than 10 minutes, otherwise you will have to pay 5LE . "
				+"Remember, Time is Money . "
				+"GO!" ;
				var str="Hi";
				showText("#msg", str, 0, 50);
			});

			function zoomBag(){ //done
				if(!bag_lock_opend){
					document.getElementById("room").style.display = "none";
					document.getElementById("overlay").style.display="block";
					document.getElementById("back-btn1").style.display="block";
					document.getElementById("overlay").src= "images/closedBag.jpg";
					document.getElementById("overlay").useMap = "#myImageMap";

					document.getElementById("left").style.display = "none";

					var myMap = document.createElement("map");
					myMap.name = "myImageMap";

					var myArea = document.createElement("AREA");
					myArea.coords="579,300,516,327,512,340,485,354,481,375,487,393,499,403,519,406,536,400,548,406,612,379";
					myArea.shape="poly";
					myArea.alt="screen";
					//myArea.style.cursor="pointer";
					myArea.onclick=function(){
						if(bagKeyFound==true)
						{
							if(bag_ID_check_collected == 0)
								replaceBag_both();
							else if(bag_ID_check_collected == 1)
								replaceBag_ID();
							else if(bag_ID_check_collected == 2)
								replaceBag_nothing();
						}
					};

					myMap.appendChild(myArea);
					document.getElementById("overlay").appendChild(myMap);
				}
				else{
					if(bag_ID_check_collected == 0)
						replaceBag_both();
					else if(bag_ID_check_collected == 1)
						replaceBag_ID();
					else if(bag_ID_check_collected == 2)
						replaceBag_nothing();
				}

				//$('area').css('cursor','copy');
			}

			function replaceBag_both(){
				bag_lock_opend = true ;
				// lazm yb2a m3ana key 3shan nesha3'al el fun. de
				if(document.getElementById("overlay").childNodes.length > 0)
					document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
				// el lines de malhomsh lazma awe
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/openedBag.jpg";

				document.getElementById("left").style.display = "none";
				// l3'ayet hna
				document.getElementById("overlay").useMap = "#myImageMap";
				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="273,344,238,384,220,365,134,451,188,503,233,460,299,498,346,406";
				myArea.shape="poly";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){
					showID_Check()
					};

				myMap.appendChild(myArea);
				document.getElementById("overlay").appendChild(myMap);
				//$('area').css('cursor','copy');
			}

			function replaceBag_ID(){
				if(document.getElementById("overlay").childNodes.length > 0)
					document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
				// el lines de malhomsh lazma awe
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/openbag2.jpg";
				document.getElementById("left").style.display = "none";

				// l3'ayet hna
				document.getElementById("overlay").useMap = "#myImageMap";
				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="273,344,238,384,220,365,134,451,188,503,233,460,299,498,346,406";
				myArea.shape="poly";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){
					showID_Check()
				};
				myMap.appendChild(myArea);
				document.getElementById("overlay").appendChild(myMap);
			}
			function replaceBag_nothing(){
				if(document.getElementById("overlay").childNodes.length > 0)
					document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
				// el lines de malhomsh lazma awe
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/openbag3.jpg";
				document.getElementById("left").style.display = "none";
			}

			function showID_Check(){
				document.getElementById("overlay").style.display = "none";
				document.getElementById("overlay2").style.display="block";
				document.getElementById("back-btn2").style.display="block";
				if(bag_ID_check_collected == 0){
					bag_ID_check_collected = 1;
					document.getElementById("overlay2").src= "images/reciept.jpg";
					//document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
					document.getElementById("overlay").src= "images/openbag2.jpg";
				}
				else if(bag_ID_check_collected == 1){
					bag_ID_check_collected = 2;
					document.getElementById("overlay2").src= "images/ID.jpg";
					document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
					document.getElementById("overlay").src= "images/openbag3.jpg";
				}
			}

			function zoomLaptop () { //done //gehad (put game, if he wins the fb screen will apper)
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/laptop.jpg";
				document.getElementById("overlay").useMap = "#myImageMap";

				document.getElementById("left").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="49,141,366,136,371,348,56,355";
				myArea.shape="poly";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){zoomScreen()};

				myMap.appendChild(myArea);
				document.getElementById("overlay").appendChild(myMap);

				//$('area').css('cursor','copy');
			}

			function zoomScreen(){//done //gehad (put game, if he wins the fb screen will apper)
				document.getElementById("overlay").style.display = "none";
				document.getElementById("overlay2").style.display="block";
				document.getElementById("back-btn2").style.display="block";
			 	document.getElementById("overlay2").src= "images/screen_fb1.jpg";

				//document.getElementById("wrapper").style.display="block"; //btsha3'al game el water

				document.getElementById("back-btn2").style.display="none";
				if(!dropletsSolved){
					document.getElementById("wrapper").style.display="block";
					document.getElementById("overlay2").style.display="none";
				}
			}

			function zoomBasket(){ //done
			 	document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/basket.jpg";
				document.getElementById("overlay").useMap = "#myImageMap";

				document.getElementById("left").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="435,168,341,157,257,170,286,344,343,357,403,345";//to edit
				myArea.shape="poly";
				myArea.alt="downBasket";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){
					document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
					if(basket_pepsi_paper_collected == 0)
						downBasket1();
					else if(basket_pepsi_paper_collected == 1)
						downBasket2();
					else
						downBasket3();
					};

				myMap.appendChild(myArea);
				document.getElementById("overlay").appendChild(myMap);
				//$('area').css('cursor','copy');

			}

			function downBasket1(){
				in_basket = true;
				document.getElementById("overlay").style.display = "none";
				document.getElementById("overlay2").style.display="block";
				document.getElementById("back-btn2").style.display="block";
			 	document.getElementById("overlay2").src= "images/basketdownall.jpg";
				//document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
				document.getElementById("overlay2").useMap = "#myImageMap";

				document.getElementById("left").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="531,324,493,353,504,408,516,430,556,404,589,374,576,333,547,340";
				myArea.shape="poly";
				myArea.alt="basket";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){
					document.getElementById("overlay2").removeChild(document.getElementById("overlay2").childNodes[0]);
					basket_pepsi_paper_collected = 1;
					document.getElementById("pepsi_evid").src="images/pepsi.jpg";
					downBasket2();
					//zoomBasket();
				};
				myMap.appendChild(myArea);
				document.getElementById("overlay2").appendChild(myMap);
			}

			function downBasket2(){
				in_basket = true;
				document.getElementById("overlay").style.display = "none";
				document.getElementById("overlay2").style.display="block";
				document.getElementById("back-btn2").style.display="block";
			 	document.getElementById("overlay2").src= "images/basketdownpaper.jpg";
				//document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
				document.getElementById("overlay2").useMap = "#myImageMap";

				document.getElementById("left").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="561,312,536,335,559,386,598,380,619,363,607,320,577,328";
				myArea.shape="poly";
				myArea.alt="basket";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){
					document.getElementById("overlay2").removeChild(document.getElementById("overlay2").childNodes[0]);
					basket_pepsi_paper_collected = 2;
					document.getElementById("puzzle2_evid").src="images/Asset 3.png";
					puzzleCollected++;
					if(puzzleCollected==4)
						startPuzzle();
					downBasket3();
					//zoomBasket();
				};
				myMap.appendChild(myArea);
				document.getElementById("overlay2").appendChild(myMap);
			}

			function downBasket3(){
				in_basket = true;
				document.getElementById("overlay").style.display = "none";
				document.getElementById("overlay2").style.display="block";
				document.getElementById("back-btn2").style.display="block";
			 	document.getElementById("overlay2").src= "images/basketdownnothing.jpg";
				//document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
			}

			function zoomDoor(){ //done
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/door.jpg";
				document.getElementById("overlay").useMap = "#myImageMap";

				document.getElementById("left").style.display = "none";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="288,380,304,428";
				myArea.shape="rect";
				myArea.alt="lockDoor";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){zoomLockDoor()};

				myMap.appendChild(myArea);
				document.getElementById("overlay").appendChild(myMap);
				//$('area').css('cursor','copy');
			 	/*if(!keyCaught){
			 		document.getElementById("sceneView").style.backgroundImage = "url('images/roomDoor.jpg')";
			 		//here character explains to user that door is locked and he needs key
			 	}
				else{
			 		document.getElementById("sceneView").style.backgroundImage = "url('images/outScene.jpg')";
			 		currentScene = "outRoom";
			 		document.getElementById("securityDeskArea").style.display="block";

				}*/
			}

			function zoomLockDoor(){
					document.getElementById("overlay").style.display = "none";
					document.getElementById("overlay2").style.display="block";
					document.getElementById("back-btn2").style.display="block";
				 	document.getElementById("overlay2").src= "images/neerDoor.jpg";

					document.getElementById("overlay2").onclick=function(){
						if(document.getElementById("overlay").childNodes.length > 0)
							document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
						document.getElementById("overlay2").style.display="none";
						document.getElementById("back-btn2").style.display="none";
						document.getElementById("back-btn1").style.display="none";
						document.getElementById("roomsec").style.display="block"
					};

				}


			function zoomTimeline(){
				document.getElementById("room").style.display = "none";
				document.getElementById("overlay").style.display="block";
				document.getElementById("back-btn1").style.display="block";
			 	document.getElementById("overlay").src= "images/timeline.jpg";

				document.getElementById("left").style.display = "none";
			}

			function zoomPuzzle1(){
				puzzleCollected++;
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

			function zoomLooker(){

				document.getElementById("room2").style.display = "none";
				document.getElementById("overlayRoom2").style.display="block";
				document.getElementById("back-btn1Room2").style.display="block";
			 	document.getElementById("overlayRoom2").src= "images/locker.jpg";
				document.getElementById("overlayRoom2").useMap = "#myImageMap";

				document.getElementById("right").style.display = "none";

				// for part of the puzzle
				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="383,55,473,182";
				myArea.shape="rect";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){zoomLooker_1()};

				myMap.appendChild(myArea);
				// for keypad
				var myArea2 = document.createElement("AREA");
				myArea2.coords="275,219,363,347";
				myArea2.shape="rect";
				myArea2.alt="screen";
				//myArea.style.cursor="pointer";
				myArea2.onclick=function(){zoomLooker_2()};

				myMap.appendChild(myArea2);

				var myArea3 = document.createElement("AREA");
				myArea3.coords="384,385,474,513";
				myArea3.shape="rect";
				myArea3.alt="screen";
				//myArea3.style.cursor="pointer";
				myArea3.onclick=function(){zoomLooker_3()};

				myMap.appendChild(myArea3);

				document.getElementById("overlayRoom2").appendChild(myMap);
				//$('area').css('cursor','copy');

			}

			function zoomLooker_1(){
				document.getElementById("overlayRoom2").style.display = "none";
				document.getElementById("overlay2Room2").style.display="block";
				document.getElementById("back-btn2Room2").style.display="block";

				if(foundInLocker==false)
				{
			  		document.getElementById("overlay2Room2").src= "images/locker_1.jpg";
						document.getElementById("overlay2Room2").onclick=function()
						{

								document.getElementById("puzzle1").style.display="none";
								document.getElementById("puzzle1_evid").src="images/Asset 3.png";
								document.getElementById("overlay2Room2").src= "images/locker3.jpg";

								puzzleCollected++;
								if(puzzleCollected==4&&foundInLocker==false)
									startPuzzle();

								foundInLocker=true;

						};
				}
				else
			  	document.getElementById("overlay2Room2").src= "images/locker3.jpg";
			}

			function zoomLooker_2(){
				document.getElementById("overlayRoom2").style.display = "none";
				document.getElementById("overlay2Room2").style.display="block";
				document.getElementById("back-btn2Room2").style.display="block";
			 	document.getElementById("overlay2Room2").src= "images/keypad.jpg";

				document.getElementById("overlay2Room2").useMap = "#myImageMap";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea1=document.createElement("AREA");
				myArea1.coords="280,205,344,278";
				myArea1.shape="rect";
				myArea1.alt="keyPad1";
				myArea1.style.cursor="pointer";
				myArea1.onclick=function(){SolvePass(1)};
				myMap.appendChild(myArea1);

				var myArea2 = document.createElement("AREA");
				myArea2.coords="384,204,444,278";
				myArea2.shape="rect";
				myArea2.alt="keyPad2";
				myArea2.onclick=function(){SolvePass(2)};
				myArea2.style.cursor="pointer";
				myMap.appendChild(myArea2);

				var myArea3 = document.createElement("AREA");
				myArea3.coords="481,207,544,276";
				myArea3.shape="rect";
				myArea3.alt="keyPad3";
				myArea3.onclick=function(){SolvePass(3)};
				myArea3.style.cursor="pointer";
				myMap.appendChild(myArea3);

				var myArea4 = document.createElement("AREA");
				myArea4.coords="281,308,344,376";
				myArea4.shape="rect";
				myArea4.alt="keyPad4";
				myArea4.onclick=function(){SolvePass(4)};
				myArea4.style.cursor="pointer";
				myMap.appendChild(myArea4);

				var myArea5 = document.createElement("AREA");
				myArea5.coords="382,306,446,375";
				myArea5.shape="rect";
				myArea5.alt="keyPad5";
				myArea5.onclick=function(){SolvePass(5)};
				myArea5.style.cursor="pointer";
				myMap.appendChild(myArea5);

				var myArea6 = document.createElement("AREA");
				myArea6.coords="483,307,546,376";
				myArea6.shape="rect";
				myArea6.alt="keyPad6";
				myArea6.onclick=function(){SolvePass(6)};
				myArea6.style.cursor="pointer";
				myMap.appendChild(myArea6);

				var myArea7 = document.createElement("AREA");
				myArea7.coords="281,408,344,477";
				myArea7.shape="rect";
				myArea7.alt="keyPad7";
				myArea7.onclick=function(){SolvePass(7)};
				myArea7.style.cursor="pointer";
				myMap.appendChild(myArea7);

				var myArea8 = document.createElement("AREA");
				myArea8.coords="383,405,445,476";
				myArea8.shape="rect";
				myArea8.alt="keyPad8";
				myArea8.onclick=function(){SolvePass(8)};
				myArea8.style.cursor="pointer";
				myMap.appendChild(myArea8);

				var myArea9 = document.createElement("AREA");
				myArea9.coords="480,406,545,476";
				myArea9.shape="rect";
				myArea9.alt="keyPad9";
				myArea9.onclick=function(){SolvePass(9)};
				myArea9.style.cursor="pointer";
				myMap.appendChild(myArea9);

				var myArea0 = document.createElement("AREA");
				myArea0.coords="384,507,445,576";
				myArea0.shape="rect";
				myArea0.alt="keyPad0";
				myArea0.onclick=function(){SolvePass(0)};
				myArea0.style.cursor="pointer";
				myMap.appendChild(myArea0);

				document.getElementById("overlay2Room2").appendChild(myMap);

				if(document.getElementById("overlayRoom2").childNodes.length > 0)
					document.getElementById("overlayRoom2").removeChild(document.getElementById("overlayRoom2").childNodes[0]);

			}

			function zoomLooker_3(){
				document.getElementById("overlayRoom2").style.display = "none";
				document.getElementById("overlay2Room2").style.display="block";
				document.getElementById("back-btn2Room2").style.display="block";
				document.getElementById("card-wrapper").style.display="block";

			}

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
					puzzleCollected++
					document.getElementById("back-btn1Room2").style.display="block";
					document.getElementById("overlayRoom2").removeChild(document.getElementById("overlayRoom2").childNodes[0]);
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



			// ****************** locker pasword**********************//

			function SolvePass(key)
			{
				lockerPasswordCounter++;
				if(lockerPasswordCounter<=4)
				{
					lockerPassword += key;
					document.getElementById("calc_screen").innerHTML=lockerPassword;
					if(lockerPasswordCounter==4)
					{
						if(lockerPassword=="6438")
						{
							lockerPasswordSolved=true;
							//document.getElementById("overlay2Room2").style.display="none";
							//document.getElementById("back-btn2Room2").style.display;
							document.getElementById("card-wrapper").style.display="none";
							document.getElementById("calc_screen").style.display="none";
							if(document.getElementById("overlay2Room2").childNodes.length > 0)
								document.getElementById("overlay2Room2").removeChild(document.getElementById("overlay2Room2").childNodes[0]);
							document.getElementById("overlay2Room2").src="images/locker6.jpg";

							if(puzzleCollected==4 && doorKeyFound==true){
								document.getElementById("overlay2Room2").useMap = "#myImageMap";
								bagKeyFound=true;
								var myMap = document.createElement("map");
								myMap.name = "myImageMap";

								var myArea = document.createElement("AREA");
								myArea.coords="346,303,287,346";
								myArea.shape="rect";
								myArea.alt="screen";
								//myArea.style.cursor="pointer";
								myArea.onclick=function(){document.getElementById("overlay2Room2").src="images/locker7.jpg";bagKeyFound=true;document.getElementById("bagKey_evid").src="images/key2.png";};

								myMap.appendChild(myArea);
								document.getElementById("overlay2Room2").appendChild(myMap);
								//$('area').css('cursor','copy');
							}

						}
					}
				}
				else
				{
					document.getElementById("calc_screen").innerHTML="";
					lockerPassword="";
					lockerPasswordCounter=0;
				}
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
