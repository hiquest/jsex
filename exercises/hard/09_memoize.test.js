/*
 * MEMOIZE
 *
 * Memoize converts a function into a new function that caches it's values for
 * the same set of arguments (this is handy when a function executets some heavy
 * logic and you don't want to waste resources)
*/

function memoize(fn) {
  const cache = {}
  return function(...args) {
    const key = args.join('-')
    if (Object.keys(cache).indexOf(key) === -1) cache[key] = fn(...args)
    return cache[key]
  }
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE =============== */

test('caches the value of a function', () => {
  const costlyFn = jest.fn()
  const fn = memoize(costlyFn)
  fn(1)
  fn(1)
  fn(2)
  fn(1)
  expect(costlyFn).toHaveBeenCalledTimes(2)
})
