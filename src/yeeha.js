export function yeeha(n) {
	if (!Number.isInteger(n)) {
		throw new TypeError('yeeha expects an integer parameter')
	}
	const divisibleBy3 = n % 3 === 0
	const divisibleBy7 = n % 7 === 0

	if (divisibleBy3 && divisibleBy7) return 'Yee Ha'
	if (divisibleBy3) return 'Yee'
	if (divisibleBy7) return 'Ha'

	return 'Nada'
}

if (import.meta.main) {
    console.log(`for your input, the result is ${yeeha(30)}`)
}