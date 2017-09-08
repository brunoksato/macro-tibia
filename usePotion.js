var robot = require("robotjs");

// run exura 5 hits
function usePotions(type, time){
  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);
  robot.keyTap("f3");
  robot.setKeyboardDelay(900);

  robot.keyTap("f3");
  robot.setKeyboardDelay(900);
}

function run(){
  setInterval(usePotions, 0);
}

run();