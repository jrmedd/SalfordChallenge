sw = new stopWatch(); //create a new stopWatch object

var ticking; //ticking variable for tick intervals

function toggleTimer() {
  if (sw.toggle()) {
    ticking = setInterval(function(){$("#stopwatch").html(sw.tick());}, 75); //tick while running
  }
  else {
    clearTimeout(ticking); //stop while not running
  }
}
function resetTimer() {
  sw.reset(); //reset stopwatch object
  $("#stopwatch").html("00:00"); //immediately reset the clock
}
