//Imagens
let estrada;
let ator1;
let carro1;
let carro2;
let carro3;

//Sons
let colidiu;
let sompontos;
let trilha;

function preload(){
  estrada = loadImage("images/estrada.png");
  ator1 = loadImage("images/ator-1.png");
  carro1 = loadImage("images/carro-1.png");
  carro2 = loadImage("images/carro-2.png");
  carro3 = loadImage("images/carro-3.png");
  imgCarros = [carro1, carro2, carro3, carro1, carro2, carro3, carro1, carro2, carro3];
  colidiu = loadSound("./sounds/colidiu.mp3");
  sompontos = loadSound("./sounds/pontos.wav");
  trilha = loadSound("./sounds/trilha.mp3");

}
