const app = "I don't do much.";

 var kittens = ["Milo", "Otis", "Garfield"];
 
 var destructivelyAppendKitten = ["Milo", "Otis", "Garfield"];
 destructivelyAppendKitten.push("Ralph");
 destructivelyAppendKitten;

 var destructivelyPrependKitten = ["Milo", "Otis", "Garfield", "Ralph"];
 destructivelyPrependKitten.unshift("Bob");
 destructivelyPrependKitten;
 
 var destructivelyPrependKitten = ["Milo", "Otis", "Garfield", "Ralph"];
 destructivelyPrependKitten(kittens, "Bob");
 destructivelyPrependKitten;
 
 
var destructivelyRemoveLastKitten = ["Milo", "Otis", "Garfield", "Ralph"];
 destructivelyRemoveLastKitten.pop();
  destructivelyRemoveLastKitten;

var destructivelyRemoveFirstKitten = ["Milo", "Otis", "Garfield"];
 destructivelyRemoveLastKitten.pop();
  destructivelyRemoveLastKitten;
  

 var appendKitten = ["Broom", ...kittens];
 appendKitten;
 
 
 var prependKitten = [kittens, "Arnold"];
  prependKitten;

  var removeLastKitten = [kittens, " "];
  removeLastKitten;
  

  