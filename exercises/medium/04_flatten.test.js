/*
 * FLATTEN
 *
 * Removes the inner arrays and puts all the elements in the top array.
 */

function flatten(arr) {
  return arr.reduce((acc, element) => acc.concat(Array.isArray(element) ? flatten(element) : element), [])
}

/* =========== TESTS =============== */

test('flattens an array', () => expect(flatten([[1, 2], 3])).toEqual([1, 2, 3]))

test('deeply flattens an array', () =>
  expect(flatten([[1], 2, [[3], 4]])).toEqual([1, 2, 3, 4]))
