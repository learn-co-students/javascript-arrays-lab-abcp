
function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  let newKittens = [...kittens,(name)];
  return newKittens;
}

function prependKitten(name) {
  let newKittens = [(name),...kittens];
  return newKittens;
}

function removeLastKitten() {

  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten() {

  return kittens.slice(1,kittens.length);
}
