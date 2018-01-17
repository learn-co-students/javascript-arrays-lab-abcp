const app = "I don't do much."
function
destructivelyAppendKitten()
{return kittens.push("Ralph")}
function
destructivelyPrependKitten()
{return kittens.unshift("Bob")}
function
destructivelyRemoveLastKitten()
{return kittens.pop("Garfield")}
function
destructivelyRemoveFirstKitten()
{return kittens.shift('Milo')}
function
appendKitten()
{return [...kittens,"Broom"]}
function
prependKitten()
{return ["Arnold",...kittens]}
function
removeLastKitten()
{var removeLastKitten = [kittens.slice(-1)];return removeLastKitten,kittens}
/*function
removeFirstKitten()
*/
var removeFirstKitten = [kittens.slice(-2)]
console.log(removeFirstKitten);




/*

  

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
*/