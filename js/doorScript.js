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
      if(doorKeyFound==true){
      if(document.getElementById("overlay").childNodes.length > 0)
        document.getElementById("overlay").removeChild(document.getElementById("overlay").childNodes[0]);
      document.getElementById("overlay2").style.display="none";
      document.getElementById("back-btn2").style.display="none";
      document.getElementById("back-btn1").style.display="none";
      document.getElementById("roomsec").style.display="block"
    }
    };

  }
