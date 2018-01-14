				var images = new Array("images/ahmed.png","images/asma.png","images/faw.png","images/has.png",
							 		"images/khaled.png","images/mok.png","images/yom.png","images/ehab.png");
				var used,gameOn,first_clicked,previous_pic,solvedPairs,counter;
				var memorySolved = false;
				var hiddenPics = new Array(16);
				start_game();
				function shufflePics () {
					var new_pic ;
					var index;
					for(i=0; i<16; i++){
						new_pic = false;
						while(!new_pic){
							index = Math.round(Math.random()*7);
							if(used[index]<2){
								hiddenPics[i] = index;
								new_pic = true;
								used[index]++;
							}
						}
					}
				}
				function start_game () {
					if(!gameOn){
						used = new Array(8).fill(0);
						first_clicked = true;
						gameOn = true;
						counter=1;
						solvedPairs = 0;
						shufflePics();

					}

				}

				function end_game () {
					for(i=0; i<16; i++)
						document.getElementsByClassName("puzImgs")[i].src="images/pic.png";
					gameOn = false;
				}

				function replaceImage (imageIndex) {
					if(gameOn && /pic/.test(document.getElementsByClassName("puzImgs")[imageIndex].src)){
						document.getElementsByClassName("puzImgs")[imageIndex].src=images[hiddenPics[imageIndex]];
						if(first_clicked){
							first_clicked = false;
							previous_pic = imageIndex;
						}
						else{
							first_clicked = true;
							if(hiddenPics[imageIndex] != hiddenPics[previous_pic]){
								gameOn=false;
								setTimeout(function(){
									document.getElementsByClassName("puzImgs")[imageIndex].src = "images/pic.png";
									document.getElementsByClassName("puzImgs")[previous_pic].src = "images/pic.png";
								},500);
								gameOn=true;
							}
							else{
								if(++solvedPairs==8)
								{ //player wins
									memorySolved=true;
									document.getElementById("memoryEnvelops").style.display="none";
									document.getElementById("overlay2Room2").style.display="block";
							 		document.getElementById("overlay2Room2").src= "images/enveloppaper.jpg";
									document.getElementById("back-btn1Room2").style.display="block";
									alert("IAM HERe");
									document.getElementById("overlay2Room2").useMap = "#myImageMap";
									var myMap = document.createElement("map");
									myMap.name = "myImageMap";

									var myArea = document.createElement("AREA");
									myArea.coords="331,158,405,95,430,116,457,105,485,121,507,112,519,138,540,153,527,185,531,206,357,198";
									myArea.shape="poly";
									myArea.alt="screen";
									//myArea.style.cursor="pointer";
									myArea.onclick=function(){
										puzzleCollected++;
										document.getElementById("puzzle6_evid").src="images/twopapers.png";

										if(puzzleCollected==4)
										{
											document.getElementById("overlayRoom2").style.display = "none";
											document.getElementById("overlay2Room2").style.display = "none";

											document.getElementById("bk").style.display="none";
											document.getElementById("overlay2").style.display="none";

											startPuzzle();
										}
										else
										{
											document.getElementById("overlayRoom2").style.display = "none";
											document.getElementById("overlay2Room2").src= "images/enveloppaperEmpty.jpg";
											document.getElementById("back-btn1Room2").style.display="block";
										}

									};

									myMap.appendChild(myArea);
									document.getElementById("overlay2Room2").appendChild(myMap);
							}
						}
					}
				}
}
