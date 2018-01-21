const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
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

function appendKitten(name){
 var newEnd = [...kittens];
 newEnd.push(name);
 return newEnd; 
}

function prependKitten(name){
  var newBeg = [...kittens];
  newBeg.unshift(name);
  return newBeg;
}

function removeLastKitten(){
var newLast = [...kittens];
newLast.pop();
return newLast;
}
function removeFirstKitten (){
  var newFirst= [...kittens];
  newFirst.shift();
  return newFirst;
}