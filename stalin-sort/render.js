const allNumbersDiv = document.querySelector("#all-numbers");

export async function render(values) {
	allNumbersDiv.innerHTML = '';
	values.forEach((value, i) => {
		let numberDiv = document.createElement("div");
		numberDiv.classList.add("number");
		numberDiv.style.height = `${value + 1}px`;
		numberDiv.dataset.position = `${i}`;
		allNumbersDiv.appendChild(numberDiv);
	});
}
