const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens);

destructivelyAppendKitten(array, element); {
  array.push(element);
  return array;
}

console.log(destructivelyAppendKitten(kittens, "Ralph"));