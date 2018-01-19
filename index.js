const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield"]

function destructivelyAppendKitten(string, array){
  var newKittens = kittens
  return newKittens.push(string)
}

function destructivelyPrependKitten(string, array){
  var newKitten = kittens
  return newKitten.unshift(string)
}

function destructivelyRemoveLastKitten(string, array){
  var newKitty = kittens
  return newKitty.pop(string)
}

function destructivelyRemoveFirstKitten(string, array){
  var newKit = kittens
  return newKit.shift(string)
}

function appendKitten(string, array){
  var newArray = kittens
  return [...newArray, string]
}

function prependKitten(string, array){
  var newKitt = kittens
  return [string, ...newKitt]
}

function removeLastKitten(array){
  var newArrays = kittens
  return newArrays.slice(0, newArrays.length -1)
}

function removeFirstKitten(array){
  var newKitts = kittens
  return newKitts.slice(1)
}