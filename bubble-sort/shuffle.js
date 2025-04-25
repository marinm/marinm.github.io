export async function shuffle(arrayLength, getValue, setValue, interrupt) {
	for (let i = 0; i < arrayLength; i++) {
		swapRandom(arrayLength, getValue, setValue);
		await interrupt();
	}
}

function swapRandom(arrayLength, getValue, setValue) {
	const position1 = getRandomPosition(arrayLength);
	const position2 = getRandomPosition(arrayLength);

	const value1 = getValue(position1);
	const value2 = getValue(position2);

	setValue(position1, value2);
	setValue(position2, value1);
}

function getRandomPosition(arrayLength) {
	return getRandomInt(arrayLength);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
