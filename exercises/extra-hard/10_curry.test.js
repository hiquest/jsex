/*
 * CURRY
 *
 * Currying is a very common operation in functional programming. A curried
 * function is a function that can be invoked with only some of the arguments.
 * In this case it will return a new function that should take the rest
 */

function curry(fn, arity) {
  arity = arity || fn.length
  return (...args) =>
    args.length < arity
      ? curry((...lefts) => fn(...args, ...lefts), arity - args.length)
      : fn(...args)
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE =============== */

test('curries a function', () =>
  expect(curry((x, y) => x + y)(5)(10)).toEqual(15))

test('curries a function of many arguments', () => {
  const sum = curry((a, b, c) => a + b + c)
  expect(sum(1, 2, 3)).toEqual(6)
  expect(sum(1)(2, 3)).toEqual(6)
  expect(sum(1, 2)(3)).toEqual(6)
  expect(sum(1)(2)(3)).toEqual(6)
})
