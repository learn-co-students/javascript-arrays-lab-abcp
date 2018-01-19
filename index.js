const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

 function kittens() {
  return kittens
 }
 var kittens = ["Milo", "Otis", "Garfield"]
 function destructivelyAppendKitten(wiskers) {
   kittens.push(wiskers)
 }
 var kittens = ["Milo", "Otis", "Garfield"]
 function destructivelyPrependKitten(name) {
  kittens.unshift(name)
 }
 var kittens = ["Milo", "Otis", "Garfield"]
 function destructivelyRemoveLastKitten() {
  kittens.pop()
 }
 var kittens = ["Milo", "Otis", "Garfield"]
 function destructivelyRemoveFirstKitten() {
  kittens.shift()
 }
 var kittens = ["Milo", "Otis", "Garfield"]
 function appendKitten(name) {
   var newArr = kittens.slice()
   newArr.push(name)
   return newArr
 }

 var kittens = ["Milo", "Otis", "Garfield"]
 function prependKitten(name) {
  var newArr = kittens.slice()
  newArr.unshift(name)
  return newArr
 }

 var kittens = ["Milo", "Otis", "Garfield"]
 function removeLastKitten(name) {
   var newArr = kittens.slice()
  newArr.pop()
 return newArr
 }
 var kittens = ["Milo", "Otis", "Garfield"]
 function removeFirstKitten(name) {
   var newArr = kittens.slice()
  newArr.shift()
   return newArr
 }
