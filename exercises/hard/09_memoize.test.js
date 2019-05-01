/*
 * MEMOIZE
 *
 * Memoize converts a function into a new function that caches it's values for
 * the same set of arguments (this is handy when a function executes some heavy
 * logic and you don't want to waste resources)
*/

const addKeyVal = dict => key => val => {
  dict[key] = val
  return dict
}

function memoize(fn) {
  const cache = {}
  return (...args) => {
    const key = args.join('-')
    return Object.keys(cache).includes(key) ? cache[key] : addKeyVal(cache)(key)(fn(...args))
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
