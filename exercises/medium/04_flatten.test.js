/*
 * FLATTEN
 *
 * Removes the inner arrays and puts all the elements in the top array.
*/

function flatten(arr) {
  // IMPLEMENT ME
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

test('flattens an array', () => {
  expect(
    flatten([[1, 2], 3])
  ).toEqual([1, 2, 3])
});

// here's an asterix exercise. Feel free to skip it.
test('deeply flattens an array', () => {
  expect(
    flatten([[1], 2, [[3], 4]])
  ).toEqual([1, 2, 3, 4])
});
