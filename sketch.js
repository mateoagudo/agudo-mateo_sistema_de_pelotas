let miPelota;
let frutas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function draw() {
  background(0, 50, 150);
  let anchura = 30;
  let gap = 20;

  for (let x = 10; x < windowWidth - anchura; x += anchura + gap) {
    for (let y = 10; y < windowHeight - anchura; y += anchura + gap) {
      fill(100, 200, 221);
      noStroke(0);
      square(x, y, anchura);
    }
  }
  print("se termino todo");
}
