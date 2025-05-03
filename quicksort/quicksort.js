// https://en.wikipedia.org/wiki/Quicksort

export async function quicksort(
    values,
    interrupt,
    lowIndex = null,
    highIndex = null
) {
    lowIndex ??= 0;
    highIndex ??= values.length - 1;

    const canSort = lowIndex >= 0 && highIndex >= 0 && lowIndex < highIndex;

    if (!canSort) {
        return;
    }

    const pivotIndex = partition(values, lowIndex, highIndex, interrupt);

    await quicksort(values, interrupt, lowIndex, pivotIndex);
    await interrupt();
    await quicksort(values, interrupt, pivotIndex + 1, highIndex);
    await interrupt();
}

function partition(values, lowIndex, highIndex, interrupt) {
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
    }
}

function swap(values, i, j) {
    const iValue = values[i];
    const jValue = values[j];

    values[i] = jValue;
    values[j] = iValue;
}
