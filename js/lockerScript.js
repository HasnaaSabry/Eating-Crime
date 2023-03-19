
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



////// looker B with paper inside

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

								puzzleCollected++; //// locker paper
								alert("no.puzzle = " + puzzleCollected);
								if(puzzleCollected==4&&foundInLocker==false)
									startPuzzle();

								foundInLocker=true;

						};
				}
				else
			  	document.getElementById("overlay2Room2").src= "images/locker3.jpg";
			}

////// looker C with numbers

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
