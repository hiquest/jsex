/*
 * HOW MANY USERS PER HOBBY?
 *
 * Let's make a short break and see how you can use those functions.
 * In this exercise you need to sorta reverse the data.
*/

function convert(arr) {
	const res = []
	arr.forEach(({ name, hobbies }) =>
		hobbies.forEach(h => {
			let item = res.find(i => i.hobby === h)
			if (!item) {
				item = { hobby: h, users: [] }
				res.push(item)
			}
			if (item.users.indexOf(name) === -1)
				item.users.push(name)
		})
	)
	return res
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE =============== */

test('reduces an array', () =>
	expect(convert([
		{ name: 'John', hobbies: ['singing', 'walking', 'playing guitar'] },
		{ name: 'Terry', hobbies: ['swimming', 'playing guitar'] },
		{ name: 'Anna', hobbies: ['walking', 'swimming', 'playing guitar'] },
		{ name: 'Paul', hobbies: ['swimming', 'singing'] }
	])).toEqual([
		{ hobby: 'singing', users: ['John', 'Paul'] },
		{ hobby: 'walking', users: ['John', 'Anna'] },
		{ hobby: 'playing guitar', users: ['John', 'Terry', 'Anna'] },
		{ hobby: 'swimming', users: ['Terry', 'Anna', 'Paul'] }
	])
)