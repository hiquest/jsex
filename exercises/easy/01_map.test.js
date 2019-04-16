/*
 * MAP
 *
 * It takes an array and a mapper function and returns a new array
 * each element of each is the result of appling the mapper function to the
 * initial element
 *
 * !!! You can't use Array.prototype.map
 * It's fine to use an imperative approach
*/

function map() {
  // TODO: IMPLEMENT ME
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

test('maps an array', () => {
  expect(map([1, 2, 3], (x) => x * x)).toEqual([1, 4, 9])
});
