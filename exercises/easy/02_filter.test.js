/*
 * FILTER
 *
 * Filter takes an array and a filter function and returns a new array
 * containing only the elements for which fn(el) is true.
 *
 * !!! This time use Array.prototype.reduce
*/

function filter() {
  // IMPLEMENT ME
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

test('maps an array', () => {
  expect(
    filter([-1, 0, 1, 2, 3], (x) => x > 0)
  ).toEqual([1, 2, 3])
});
