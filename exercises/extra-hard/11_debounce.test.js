/*
 * DEBOUNCE
 *
 * Creates a function that will not be called until the triggered time runs out.
 * That means you can call it many times, but it will only actually be executed
 * when the specified time passed since the last call.
 */

function debounce(func, wait, immediate) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func(...args)
    }, wait)
    if (immediate && !timeout) func(...args)
  }
}

/* =========== TESTS =============== */

test('debounce', done => {
  const costlyFn = jest.fn()
  const fn = debounce(costlyFn, 100)
  fn()
  fn()
  fn()
  expect(costlyFn).toHaveBeenCalledTimes(0)
  setTimeout(() => {
    expect(costlyFn).toHaveBeenCalledTimes(1)
    done()
  }, 200)
})
