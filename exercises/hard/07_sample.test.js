/*
 * SAMPLE
 *
 * Takes an array of items and a number n,
 * returns n random and uniq items from that list
*/


function sample(arr, n) {
  const length = arr.length
  const indices = []
  while(indices.length < n){
    const r = Math.floor(Math.random() * length);
    if (indices.indexOf(r) === -1) indices.push(r);
  }
  return indices.map(i => arr[i])
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

test('returns a sample from an array', () => {
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

  for (i = 0; i < 10; i++) {
    // trying 10 times to be sure ;)
    const out = sample(numbers, 3)
    expect(out.length).toEqual(3)
    expect(out.every(x => x >= 1 && x <= 9)).toEqual(true)
  }
});
