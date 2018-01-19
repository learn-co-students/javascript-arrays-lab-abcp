const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function  destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
  
}
destructivelyAppendKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
destructivelyPrependKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
  return kittens
  
}
destructivelyRemoveLastKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
  return kittens
}
destructivelyRemoveFirstKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name){
  return [...kittens, "Broom"]
 
}
appendKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function prependKitten(name){
  return ["Arnold",...kittens]
}
prependKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
  
}
removeLastKitten();

kittens = ['Milo', 'Otis', 'Garfield']

function removeFirstKitten() {
  return kittens.slice(1)
  
}
removeFirstKitten();




