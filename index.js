var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}

function appendKitten(name) {
  var kit = kittens.slice();
  kit.push(name);
  return kit;
}

function prependKitten(name) {
  var kit = kittens.slice();
  kit.unshift(name);
  return kit;
}

function removeLastKitten() {
  var kit = kittens.slice();
  kit.pop();
  return kit;
}

function removeFirstKitten() {
  var kit = kittens.slice();
  kit.shift();
  return kit;
}
