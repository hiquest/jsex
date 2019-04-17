/*
 * safeGet
 *
 * safeGet is a function that returns a nested attribute by path from an array
 * no matter how deep. It is called safe, because if the element doesn't exists
 * it returns null.
*/


function safeGet(obj, path) {
  const keys = path.split('.')
  return keys.reduce((acc, key) => {
    return (acc || {})[key] ? acc[key] : null 
  }, obj)
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

const obj = {
  a: {
    b: {
      c: 42
    }
  }
}

test('gets a value by path', () => {
  expect(safeGet(obj, 'a.b.c')).toEqual(42)
})

test('returns null for non-existing values', () => {
  expect(safeGet(obj, 'a.b.c.d')).toEqual(null)
})
