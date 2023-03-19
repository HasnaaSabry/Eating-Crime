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
