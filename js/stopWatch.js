/*STOPWATCH BOJECT*/
function stopWatch() {

  this.startTime; //always the start of the timer
  this.resetFlag = true; //reset flag ensures the timer starts fresh if reset is called
  this.stoppedTime; //variable to measure time while stopped
  this.offset = 0; //offset variable to add-on stoppage time
  this.running = false; //running variable to say whether or not a timer is active

  /*Tick function to be called at intervals < 1000 millseconds*/
  this.tick = function() {
    if (this.resetFlag) { //reset everything if reset flag is true
      this.startTime = new Date();
      this.offset = 0;
      this.stoppedTime = 0;
      this.resetFlag = false;
    }
    this.timeNow = new Date();
    this.difference = new Date((this.timeNow - this.startTime) - this.offset); //find out how long it's been since we started (minus offset)
    return padZero(this.difference.getUTCMinutes()) + ":" + padZero(this.difference.getUTCSeconds()); //return the difference in MM:SS (padded zeroes)
  }

  /*Toggle function to be caleld each time the timer is stopped and started*/
  this.toggle = function() {
    this.running = !this.running; //flip the running bool
    if (this.running){
      if (this.stoppedTime) {
        this.offset += (new Date() - this.stoppedTime); //add time since last stop to offset
      }
    }
    else {
      this.stoppedTime = new Date(); //log when we stopped
    }
    return this.running;
  }

  /*Reset function be called every time the timer is reset */
  this.reset = function() {
    this.resetFlag = true; // we're going to restart on the next tick
  }
}

function padZero(number) {
  number = parseInt(number).toString();
  if (number.length < 2) { //if number is a single digit
    number = "0" + number;
  }
  return number;
}
