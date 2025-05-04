const allNumbersDiv = document.querySelector("#all-numbers");

function divAt(position) {
	return document.querySelector(
		`.number[data-position="${position}"]`
	);
}

export async function generateDivs(values) {
	for (let i = 0; i < values.length; i++) {
		let numberDiv = document.createElement("div");
		numberDiv.classList.add("number");
		numberDiv.style.height = `1px`;
		numberDiv.dataset.position = `${i}`;
		allNumbersDiv.appendChild(numberDiv);
	}
}

export function render(values) {
	values.forEach((value, i) => {
		divAt(i).style.height = `${value + 1}px`;
	});
}