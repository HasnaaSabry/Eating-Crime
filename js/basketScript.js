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
    puzzleCollected++; ////////// paper in basket
    alert("no.puzzle = " + puzzleCollected);
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
