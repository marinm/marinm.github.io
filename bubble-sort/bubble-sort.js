// https://en.wikipedia.org/wiki/Bubble_sort

export async function bubbleSort(values, interrupt) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < values.length - 1; i++) {
            if (values[i] > values[i + 1]) {
				swap(values, i, i + 1);
                sorted = false;
            }
            await interrupt();
        }
    }
}

function swap(values, i, j) {
    const iValue = values[i];
    const jValue = values[j];

    values[i] = jValue;
    values[j] = iValue;
}