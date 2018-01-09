const app = "I don't do much."
let kittens = ["Milo", "Otis", "Garfiels"];

function destructivelyAppendKitten(newCat){
  return kittens.push(newCat)
}

function destructivelyPrependKitten(newCat){
  return kittens.unshift(newCat)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(newCat){
  let newArr = [...kittens]
  newArr.push(newCat)
  return newArr
}

function prependKitten(newCat){
  let newArr = [...kittens]
  newArr.unshift(newCat)
  return newArr
}

function removeLastKitten(newCat){
  let newArr = [...kittens]
  newArr.pop()
  return newArr
}

function removeFirstKitten(newCat){
  let newArr = [...kittens]
  newArr.shift()
  return newArr
}

