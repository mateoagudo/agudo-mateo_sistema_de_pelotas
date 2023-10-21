class Pelota {
  constructor(_piso) {
    this.posX = random(windowWidth * 0.1, windowWidth * 0.9);
    this.posY = random(50, 70);
    this.velX = random(-1, 1);
    this.velY = 0;
    this.acelY = random(0.5, 0.98);

    this.diam = int(random(10, 50));
    this.rad = this.diam / 2;
    this.c = color(255, random(50, 200), 50);

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
      this.diam = random(10, 50);
      if (this.esRectangulo == false) {
        this.c = color(random(50, 200), 50, 255);
        this.esRectangulo = true;
      } else {
        this.c = color(255, random(50, 200), 50);
        this.esRectangulo = false;
      }
    }
  }

  display(_piso) {
    fill(this.c);
    if (this.esRectangulo == true) {
      rect(this.posX, this.posY, this.diam);
    } else {
      circle(this.posX, this.posY, this.diam);
    }
  }
}
