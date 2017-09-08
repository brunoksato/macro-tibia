var robot = require("robotjs");

function refillPotion(){
  robot.moveMouse(2545, 695);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2500, 730);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2530, 875);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2480, 695);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2550, 789);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2500, 790);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2488, 835);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
  robot.moveMouse(2530, 875);
  robot.setMouseDelay(200);
  robot.mouseClick();
  robot.setMouseDelay(200);
}

function run(){
  setInterval(refillPotion, 30000);
}

run();