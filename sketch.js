
let starCount = 200;
var starSpeedFactor = 0.01;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  stars = createStars();
}

var n = 0;
var stars = [];

function draw() {
  background(0);
  if(n === 0) {
    stars = createStars();
    n++;
  }
  if(mouseIsPressed) {
    starSpeedFactor = 0.1;
  } else {
    starSpeedFactor = 0.01;
  }
  moveStars(stars);
}

function createStars() {
  var stars = [];
  for (i = 0; i < starCount; i++) {
    stars[i] = [Math.floor(Math.random() * windowWidth + 1), Math.floor(Math.random() * windowHeight + 1)];
  }
  return stars;
}

function moveStars(stars) {
    var i = 0;
    while(i < starCount) {
      if (stars[i][0] > windowWidth / 2) {
        stars[i][0] += (stars[i][0] - windowWidth / 2) * starSpeedFactor;
      } else {
        stars[i][0] -= (windowWidth / 2 - stars[i][0]) * starSpeedFactor;
      }
      if (stars[i][1] > windowHeight / 2) {
        stars[i][1] += (stars[i][1] - windowHeight / 2) * starSpeedFactor;
      } else {
        stars[i][1] -= (windowHeight / 2 - stars[i][1]) * starSpeedFactor;
      }
      if(stars[i][0] > windowWidth || stars[i][0] < 0 || stars[i][1] > windowHeight || stars[i][1] < 0) {
        stars[i] = [windowWidth * 25 / 60 + Math.floor(Math.random() * (windowWidth * 10 / 60)), windowHeight * 25 / 60 + Math.floor(Math.random() * (windowHeight * 10 / 60))];
      } else {
        var euclid_dist = Math.sqrt(Math.pow(stars[i][0] - windowWidth / 2, 2) + Math.pow(stars[i][1] - windowHeight / 2, 2));
        var size = euclid_dist / (windowWidth / 2) * 7;
        ellipse(stars[i][0], stars[i][1], size, size);
      }
      i++;
    }
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
