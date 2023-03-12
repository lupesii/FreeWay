//Localização Ator
let xAtor = 350;
let yAtor = 590;
let hit = false; //Váriavel de colisão false, já que não há colisão no inicio do jogo

//Placar
let pontos = 0;

function showAtor(){
    image(ator1, xAtor, yAtor, 40, 40);
  }

function moveAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 5
    }
    
    if (keyIsDown(DOWN_ARROW)){
      if(movecolision()){
        yAtor += 5
      }
    }
  }

function verifyColision(){
  //Criado uma repetição para analisar o x e y de todos os carros, caso um deles encoste em nosso ator, ele voltará a posição inicial
  for(let i = 0; i < imgCarros.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xAtor, yAtor, 20);
    if(hit){
      colision();
      if(pointpositive()){
        pontos -= 1
      }
    }
  }
}

function colision(){
  yAtor = 590;
}

function placar(){
  textAlign(CENTER);
  textSize(30);
  fill(color(255, 240, 60));
  text(pontos, 400,39);
}

function matchPoint(){
  if(yAtor < 40){
    pontos += 1;
    colision();
  }
}

function pointpositive(){
  return pontos > 0
}

function movecolision(){
  return yAtor < 590;
}