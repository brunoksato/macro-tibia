var robot = require("robotjs");

function eatFood(){
  robot.setKeyboardDelay(1500);
  robot.keyTap("f8");
  robot.setKeyboardDelay(1500);
  robot.keyTap("f8");
  robot.setKeyboardDelay(1500);
  robot.keyTap("f8");
  robot.setKeyboardDelay(1500);
  robot.keyTap("f8");
}

function run(){
  setInterval(eatFood, 60000);
}

run();