//var kittens = ["Milo","Otis","Garfield"];

function destructivelyAppendKitten(kittenName) {
  kittens.push(kittenName);
  
}

function destructivelyPrependKitten(kittenName) {
  kittens.unshift(kittenName);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(kittenName) {
  return [...kittens,kittenName];
}

function prependKitten(kittenName) {
  return [kittenName,...kittens];
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1,kittens.length);
}