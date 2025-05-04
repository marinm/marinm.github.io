// https://en.wikipedia.org/wiki/Quicksort

export async function quicksort(values, interrupt) {
    const stack = [[0, values.length - 1]];

    while (stack.length > 0) {
        const [lowIndex, highIndex] = stack.pop();

        if (lowIndex >= 0 && highIndex >= 0 && lowIndex < highIndex) {
            const pivotIndex = await partition(values, lowIndex, highIndex, interrupt);
            stack.push([lowIndex, pivotIndex]);
            stack.push([pivotIndex + 1, highIndex]);
        }
    }
}

async function partition(values, lowIndex, highIndex, interrupt) {
    const pivotValue = values[lowIndex];

    let i = lowIndex;
    let j = highIndex;

    let MAX_ITERATIONS = 100;
    let iteration = 0;

    while (iteration < MAX_ITERATIONS) {
        while (values[i] < pivotValue) i++;

        while (values[j] > pivotValue) j--;

        if (i >= j) {
            return j;
        }

        swap(values, i, j);
        iteration++;

        await interrupt();
    }
}

function swap(values, i, j) {
    const iValue = values[i];
    const jValue = values[j];

    values[i] = jValue;
    values[j] = iValue;
}
