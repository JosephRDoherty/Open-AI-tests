//THIS WAS WRITTEN BY OPENAI CHAT BOT
// PROMPT:
// write javascript that will create confetti on the screen
// This is insane

// Still need to test this out and see if it actually works

// create an array to store the confetti pieces
var confetti = [];

// create a function to generate a random number within a range
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// create a class to represent a confetti piece
class Confetti {
  constructor() {
    // set the initial position and size of the confetti piece
    this.x = rand(0, window.innerWidth);
    this.y = rand(-200, 0);
    this.width = rand(5, 20);
    this.height = this.width;
    // set the initial velocity of the confetti piece
    this.vx = rand(-10, 10);
    this.vy = rand(10, 20);
    // set the color of the confetti piece
    this.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
  }

  // create a method to move the confetti piece
  move() {
    // update the position of the confetti piece based on its velocity
    this.x += this.vx;
    this.y += this.vy;
    // if the confetti piece is off the screen, reset its position
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight) {
      this.x = rand(0, window.innerWidth);
      this.y = rand(-200, 0);
    }
  }
}

// create a function to draw the confetti on the screen
function drawConfetti() {
  // clear the screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  // loop through the confetti array
  for (var i = 0; i < confetti.length; i++) {
    // move the confetti piece
    confetti[i].move();
    // draw the confetti piece on the screen
    context.fillStyle = confetti[i].color;
    context.fillRect(confetti[i].x, confetti[i].y, confetti[i].width, confetti[i].height);
  }

  // request another animation frame to keep the confetti moving
  requestAnimationFrame(drawConfetti);
}

// create a canvas element to draw the confetti on
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// get the 2D drawing context for the canvas
var context = canvas.getContext("2d");

// create 100 confetti pieces and add them to the confetti array
for (var i = 0; i < 100; i++) {
  confetti.push(new Confetti());
}

// start drawing the confetti
drawConfetti();