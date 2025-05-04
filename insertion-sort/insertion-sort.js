// https://en.wikipedia.org/wiki/Insertion_sort

export async function insertionSort(values, interrupt) {
    // Starting at the 2nd value, going forwards, stopping at the last value...
    for (let i = 1; i < values.length; i++) {
        // Starting at i, going backwards, stopping at the first value...
        for (let j = i; j > 0; j--) {
            if (values[j] < values[j - 1]) {
                swap(values, j, j - 1);
                await interrupt();
            } else {
                break;
            }
        }
    }
}

function swap(values, i, j) {
    const iValue = values[i];
    const jValue = values[j];

    values[i] = jValue;
    values[j] = iValue;
}
