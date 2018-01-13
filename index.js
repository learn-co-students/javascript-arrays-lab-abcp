
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(n){
  kittens.push(n);
  
  return kittens;
  
}


function destructivelyPrependKitten(n){
   kittens.unshift(n);
  
  return kittens;
  
}

function destructivelyRemoveLastKitten(){
   kittens.pop();
  
  return kittens;
  
}

function destructivelyRemoveFirstKitten(){
   kittens.shift();
  
  return kittens;
  
}

function appendKitten(n){

var kittenArr =  [...kittens, n];
  
return kittenArr;
  
}

function prependKitten(n){

var kittenArr =  [n, ...kittens];
  
return kittenArr;
  
}

function removeLastKitten(){

var kittenArr =  [...kittens];
kittenArr.pop();
  
return kittenArr;
  
}

function removeFirstKitten(){

var kittenArr =  [...kittens];
kittenArr.shift();
  
return kittenArr;
  
}

