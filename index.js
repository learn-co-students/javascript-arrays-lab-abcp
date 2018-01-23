const app = "I don't do much."

var kitens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return [...kitens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten(){
  var cats = kittens.slice(1)
  return cats
}

function removeLastKitten(){
  var newcats = kittens.slice(0,kittens.length -1)
  return newcats
}

