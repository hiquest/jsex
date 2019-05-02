/*
 * REDUCE
 *
 * You can implement almost anything with reduce.
 * But how do you implement reduce?
 * TIP: Use your friend, recursion
 */

function reduce(arr, fn, initial) {
  return arr.length === 0
    ? initial
    : reduce(arr.slice(1), fn, fn(initial, arr[0]))
}

/* =========== TESTS =============== */

test('reduces an array', () =>
  expect(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)).toEqual(15))
