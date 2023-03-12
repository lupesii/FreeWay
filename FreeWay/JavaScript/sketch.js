function setup() {
  createCanvas(1200, 640);
}

function draw() {
  background(estrada);
  //Ator
  showAtor();
  verifyColision();
  moveAtor();
  //Carro
  showCarro();
  moveCarro();
  loopCar();
  //Placar
  placar();
  matchPoint();
}

