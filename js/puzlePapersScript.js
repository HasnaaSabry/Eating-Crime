var puzzleSolved = false;
function startPuzzle() //puzzle game
{

  document.getElementById("room").style.display = "none";
  document.getElementById("overlay3").style.display="block";
  document.getElementById("back-btn1Room2").style.display="block";
  document.getElementById("overlay3").src= "images/ital.jpg";
  document.getElementById("left").style.display = "none";
  document.getElementById("overlay2Room2").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlayRoom2").style.display = "none";
  document.getElementById("bk").style.display = "none";


  document.getElementById("overlay3").onload = function()
  {
    snapfit.add(document.getElementById("overlay3"),{callback: function() {document.getElementById("puzzle_evid").src="images/ital.jpg";puzzleSolved = true;}, aborder:true, aimage:true, polygon:true, space:20});
    snapfit.reset(document.getElementById("overlay3"),1);
    snapfit.admix(document.getElementById("overlay3"));
  };

}
