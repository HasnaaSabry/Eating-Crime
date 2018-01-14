var arr = new Array("images/sym1.png","images/sym2.png","images/sym3.png","images/sym4.png");
	var counter1=-1,counter2=-1,counter3=-1,counter4=-1;
	var solved = false;
	function loadimg(id){
			if(!solved){
					switch(id){
						case 'i1':
							counter1++;
							if (counter1 == 4){
							counter1 = 0;
							}
							document.getElementById(id).src = arr[counter1];


					break;
					case 'i2':
						counter2++;
						if (counter2 == 4){
							counter2 = 0;
						}
						document.getElementById(id).src = arr[counter2];


					break;
					case 'i3':
						counter3++;
						if (counter3 == 4){
							counter3 = 0;
						}
						document.getElementById(id).src = arr[counter3];


					break;
					case 'i4':
						counter4++;
						if (counter4 == 4){
							counter4 = 0;
						}
						document.getElementById(id).src = arr[counter4];


					break;
			}
			if(counter1 == 0 && counter2 == 2 && counter3 == 1 && counter4 == 3){
				solved = true;
				document.getElementById("card-wrapper").style.display="none";
				document.getElementById("cardsContainer").style.display="none";

				document.getElementById("overlay4").style.display="block";
				document.getElementById("overlay4").src="images/locker4.jpg";
				document.getElementById("overlay4").useMap = "#myImageMap";

				var myMap = document.createElement("map");
				myMap.name = "myImageMap";

				var myArea = document.createElement("AREA");
				myArea.coords="410,472,458,506";
				myArea.shape="rect";
				myArea.alt="screen";
				//myArea.style.cursor="pointer";
				myArea.onclick=function(){addKeyToEvidence()};

				myMap.appendChild(myArea);
				document.getElementById("overlay4").appendChild(myMap);


			}
		}
	}

	function addKeyToEvidence()
	{
				document.getElementById("key_evid").src="images/key.png";
				document.getElementById("overlay4").src="images/locker5.jpg";
				doorKeyFound=true;
	}
