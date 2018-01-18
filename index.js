const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}
function prependKitten(name){
  var newKitten = [name,...kittens]
  return newKitten
}
function appendKitten(name){
  var newKitten2 = [...kittens,name]
  return newKitten2
}
function removeLastKitten(name){
  var newKitten3 = kittens.slice(0, kittens.length-1)
  return newKitten3
}
function removeFirstKitten(name){
  var newKitten4 = kittens.slice(1)
  return newKitten4
}