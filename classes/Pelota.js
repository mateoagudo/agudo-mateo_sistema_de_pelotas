class Pelota {
  constructor(_piso) {
    this.posX = random(windowWidth * 0.1, windowWidth * 0.9);
    this.posY = random(50, 70);
    this.velX = random(-1, 1);
    this.velY = 0;
    this.acelY = 0.98;

    this.diam = int(random(10, 50));
    this.rad = this.diam / 2;
    this.c = color(255, random(100, 255), 50);

    this.esRectangulo = this.posY + this.rad <= _piso ? true : false;
    rectMode(CENTER);

    print("Hola, estoy vive!");
  }

  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1;
      this.posY += this.velY;
      this.c = color(255, random(100, 255), 50);
      this.diam = random(10, 50);
      this.esRectangulo = true;
    }
  }

  display(_piso) {
    fill(this.c);
    if (this.esRectangulo) {
      rect(this.posX, this.posY, this.diam);
    } else {
      circle(this.posX, this.posY, this.diam);
    }
  }
}
