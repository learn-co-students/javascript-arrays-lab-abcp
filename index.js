const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens);

function destructivelyAppendKitten(array, element) {
  array.push(element);
  return array;
}
console.log(destructivelyAppendKitten(kittens, "Ralph"));

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(array, element) {
  array.unshift(element);
  return array;
}
console.log(destructivelyPrependKitten(kittens, "Bob"));

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten(array) {
  array.pop();
  return array;
}
console.log(destructivelyRemoveLastKitten(kittens));

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten(array) {
  array.shift();
  return array;
}
console.log(destructivelyRemoveFirstKitten(kittens));

var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(array, element) {
  return [...array, element];
}
console.log(appendKitten(kittens, "Broom"));
console.log(kittens);

var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(array, element) {
  return [element, ...array]
}

console.log(prependKitten(kittens, "Arnold"));

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
  return(kittens.slice(0, 2));
}
console.log(removeLastKitten());

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten() {
  return(kittens.splice(1, 2));
}
console.log(removeFirstKitten());