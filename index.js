const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return
}

function appendKitten(name) {
  var kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten(name) {
  var kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten() {
  var kittens2 = [...kittens]
  kittens2.pop()
  return kittens2
}

function removeFirstKitten() {
  var kittens2 = [...kittens]
  kittens2.shift()
  return kittens2
}