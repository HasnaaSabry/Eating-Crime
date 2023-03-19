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
      if(bagKeyFound!=true)
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
