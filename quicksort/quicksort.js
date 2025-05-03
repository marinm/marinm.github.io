// https://en.wikipedia.org/wiki/Quicksort

export async function quicksort(values, lowIndex, highIndex, interrupt) {
    // Ensure indices are in correct order
    if (lowIndex >= highIndex || lowIndex < 0) {
        return;
    }

    const p = partition(values, lowIndex, highIndex);

    await quicksort(values, lowIndex, p - 1, interrupt);
    await quicksort(values, p + 1, highIndex, interrupt);
}

function partition(values, lowIndex, highIndex) {
    // Choose the last element as the pivot
    const pivotValue = values[highIndex];

    // Temporary pivot index
    let i = lowIndex;

    for (let j = lowIndex; j < highIndex; j++) {
        const currentValue = values[j];
        // If the current element is less than or equal to the pivot
        if (currentValue <= pivotValue) {
            swap(values, i, j);

            // Move the temporary pivot index forward
            i++;
        }
    }

    // Swap the pivot with the last element
    swap(values, i, highIndex);
    return i;
}

function swap(values, i, j) {
    const iValue = values[i];
    const jValue = values[j];

    values[i] = jValue;
    values[j] = iValue;
}