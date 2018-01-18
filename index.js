
function  kittens(){
  var kittens=["Milo", "Otis", "Garfield"]
  console.log(kittens)
}

function destructivelyAppendKitten(x){
  kittens.push(x)
console.log(kittens)
}
function destructivelyPrependKitten(x){
  kittens.unshift(x)
console.log(kittens)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
console.log(kittens)
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
console.log(kittens)
}
function appendKitten(name){
  return [...kittens, name]
  return (kittens)
}
function prependKitten(name){
  return [name, ...kittens]
  return (kittens)
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
  return kittens
}
function removeFirstKitten(){
  return kittens.slice(1)
  return kittens
}
