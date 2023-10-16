pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(pelotas);
}

function draw() {
  background(100, 255, 255);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}
function mousePressed() {
  pelota = new Pelota();
  pelotas.push(pelota);
}
