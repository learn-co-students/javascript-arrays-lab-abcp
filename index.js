const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var a = kittens.slice();
  a.push(name);
  return a;
}

function prependKitten(name){
  var a = kittens.slice();
  a.unshift(name);
  return a;
}

function removeLastKitten(){
  var a = kittens.slice();
  a.pop();
  return a;
}

function removeFirstKitten(){
  var a = kittens.slice();
  a.shift();
  return a;
}


