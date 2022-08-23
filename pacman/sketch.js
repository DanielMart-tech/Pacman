function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER)
}

function draw() {
  stroke("black")
  line(200, 0, 200, 400);
  line(0, 200, 400, 200);
  fill("white")
  square(200, 200, 100);

  describe("a quarter of an indigo arc")
  fill("indigo")
  noStroke()
  arc(100, 100, 90, 90, 0, HALF_PI)

  describe("maroon arc less a quarter in the upper-right corner")
  fill("maroon")
  arc(300, 100, 90, 90, 0, PI + HALF_PI)

  describe("turquoise arc less a quarter in the bottom-left corner")
  fill("turquoise")
  arc(100, 300, 90, 90, PI, HALF_PI)

  describe("lightsalmon arc, a closed semi-circle at upper-right corner")
  fill("lightsalmon")
  arc(300, 300, 90, 90, 0, PI + QUARTER_PI, CHORD)

  describe("Pacman")
  fill("yellow")
  stroke("black")
  arc(200, 200, 90, 90, QUARTER_PI, PI + HALF_PI + QUARTER_PI, PIE)

  describe("Pacman's eye")
  fill("black")
  circle(190, 180, 10)
}
