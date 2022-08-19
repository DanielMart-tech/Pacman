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

  fill("indigo")
  noStroke()
  arc(100, 100, 90, 90, 0, HALF_PI)

  fill("maroon")
  arc(300, 100, 90, 90, 0, PI + HALF_PI)

  fill("turquoise")
  arc(100, 300, 90, 90, PI, HALF_PI)

  fill("lightsalmon")
  arc(300, 300, 90, 90, 0, PI + QUARTER_PI, CHORD)

  fill("yellow")
  stroke("black")
  arc(200, 200, 90, 90, QUARTER_PI, PI + HALF_PI + QUARTER_PI, PIE)

  fill("black")
  circle(190, 180, 10)
}
