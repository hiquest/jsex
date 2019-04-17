/*
 * REDUCE
 *
 * You can implement almost anything with reduce.
 * But how do you implement reduce?
 * TIP: Use your friend, recursion
 *
*/

function reduce(arr, fn, initial) {
  if (arr.length === 0) return initial
  const [head, ...tail] = arr
  return reduce(tail, fn, fn(initial, head))
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

test('reduces an array', () => {
  const sum = (a, b) => a + b
  expect(
    reduce([1, 2, 3, 4, 5], sum, 0)
  ).toEqual(15)
})
