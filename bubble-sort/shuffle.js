export async function shuffle(values, nSwaps, interrupt) {
	for (let i = 0; i < nSwaps; i++) {
		swapRandom(values);
		await interrupt();
	}
}

function swapRandom(values) {
	const position1 = getRandomInt(values.length);
	const position2 = getRandomInt(values.length);

	const value1 = values[position1];
	const value2 = values[position2];

	values[position1] = value2;
	values[position2] = value1;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
