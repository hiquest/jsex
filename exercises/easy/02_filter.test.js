/*
 * FILTER
 *
 * Filter takes in an array and a filter function and returns a new array
 * containing only the elements for which the filter function returns true.
 *
 * This time use Array.prototype.reduce
 */

function filter(arr, fn) {
	return arr.reduce((acc, element) => acc.concat(fn(element) ? element : []), [])
}

/* =========== TESTS =============== */

test('maps an array', () =>
  expect(filter([-1, 0, 1, 2, 3], x => x > 0)).toEqual([1, 2, 3]))
