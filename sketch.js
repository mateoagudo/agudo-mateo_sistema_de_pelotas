pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    pelota = new Pelota();
    pelotas.push(pelota);
  }
  //print(pelotas);
}

function draw() {
  background(100, 255, 255);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}
