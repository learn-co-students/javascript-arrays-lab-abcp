const app = "I don't do much."
// 1 begins
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
kittens.push(name)
}
// 2 begins
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
// 3 begins
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
// 4 begins
function appendKitten(name){
return  [...kittens,name]
}
// 5 begins
function prependKitten(name){
  return [name,...kittens]
}
// 6 begins
function removeLastKitten(){
  return kittens.slice(0,-1)
}
// 7 begins
function removeFirstKitten(){
return  kittens.slice(1)
}
