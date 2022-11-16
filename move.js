var robot = require("robotjs");

function doStuff() {
  console.log("oi");
  robot.setKeyboardDelay(250);

  move();
}

// run exura 5 hits
function move() {
  console.log("start move...");

  robot.keyTap("up", "command");
  robot.setKeyboardDelay(1000);

  robot.keyTap("left", "command");
  robot.setKeyboardDelay(1000);

  robot.keyTap("down", "command");
  robot.setKeyboardDelay(1000);

  robot.keyTap("right", "command");
  robot.setKeyboardDelay(1000);

  robot.keyTap("up", "command");
  robot.setKeyboardDelay(1000);

  console.log("end move...");
}

setInterval(function () {
  robot.setKeyboardDelay(250);

  robot.keyTap("up", "command");
  robot.setKeyboardDelay(500);

  robot.keyTap("left", "command");
  robot.setKeyboardDelay(500);

  robot.keyTap("down", "command");
  robot.setKeyboardDelay(500);

  robot.keyTap("right", "command");
  robot.setKeyboardDelay(500);
}, 60000 * 5);
