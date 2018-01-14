const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return kittens;
};
function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens;
};
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
};
function appendKitten(name){
  var addEndKittens = [...kittens,'Broom'];
  return addEndKittens;
};
function prependKitten(name){
  var addStrtKittens = ['Arnold',...kittens];
  return addStrtKittens;
};
function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
};
function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
};
