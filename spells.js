var robot = require("robotjs");

function doStuff() {
  //boot not exaust
  robot.setKeyboardDelay(250);

  //try cast exura five hits
  spells("f7", 2100);
}

// run exura 5 hits
function spells(type, time){
  robot.keyTap(type);
  robot.setKeyboardDelay(time);

  robot.keyTap(type);
  robot.setKeyboardDelay(time);

  robot.keyTap(type);
  robot.setKeyboardDelay(time);

  robot.keyTap(type);
  robot.setKeyboardDelay(time);

  robot.keyTap(type);
  robot.setKeyboardDelay(time);

  robot.keyTap(type);
  robot.setKeyboardDelay(time);
}

function run(){
  setInterval(doStuff, 0);
}

run();
