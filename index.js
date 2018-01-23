const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
// appends a kitten to the end of the kittens array
  kittens.push(name); 
  return kittens;
}

function destructivelyPrependKitten(name) {
// prepends a kitten to the beginning of the kittens array
  kittens.unshift(name);   
  return kittens;
}

function destructivelyRemoveLastKitten() {
// removes the last kitten from the kittens array
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
// removes the First kitten from the kittens array
  kittens.shift();   
  return kittens;
}

function appendKitten(name) {
// appends a kitten to the kittens array and returns a new array
  var newKittens = [...kittens, name];
  return newKittens;  
}

function prependKitten(name) {
// prepends a kitten to the kittensarray and returns a new array
  var newKittens = [name, ...kittens];
  return newKittens;  
}

function removeLastKitten() {
// removes the last kitten in the kittens array and returns a new array
  var newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

function removeFirstKitten() {
// removes the first kitten from the kittens array and returns a new array
  var newKittens = kittens.slice(1); 
  return newKittens;
}
