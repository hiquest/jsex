/*
 * SAMPLE
 *
 * Takes an array of items and a number n,
 * returns n random and uniq items from that list
*/

function sample(arr, n) {
  return arr.reduce(acc => {
    const index = Math.floor(Math.random() * arr.length)
    return acc.concat(acc.indexOf(index) === -1 && acc.length < n ? arr[index] : [])
  }, [])
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE =============== */

test('returns a sample from an array', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (i = 0; i < 10; i++) {
    const out = sample(numbers, 3)
    expect(out.length).toEqual(3)
    expect(out.every(x => x >= 1 && x <= 9)).toEqual(true)
  }
})
