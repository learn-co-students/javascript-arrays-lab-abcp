var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop();
}

function appendKitten(name) {
  //return [...kittens, name];
  var kit = kittens.slice();
  kit.push(name);
  return kit;
}

function prependKitten(name) {
  //return [name, ...kittens];
  var kit = kittens.slice();
  kit.unshift(name);
  return kit;
}

function removeLastKitten() {
  //return kittens.slice(0, kittens.length -1);
  var kit = kittens.slice();
  kit.pop();
  return kit;
}

function removeFirstKitten() {
  //return kittens.slice(1);
  var kit = kittens.slice();
  kit.shift();
  return kit;
}
