// https://en.wikipedia.org/wiki/Insertion_sort

export async function insertionSort(values, interrupt) {
    // Starting at the 2nd value, going forwards, stopping at the last value...
    for (let i = 1; i < values.length; i++) {
        // Starting at i, going backwards, stopping at the first value...
        for (let j = i; j > 0; j--) {
            const vCurrent = values[j];
            const vPrev = values[j - 1];

            if (vCurrent < vPrev) {
                // Swap
                values[j] = vPrev;
                values[j - 1] = vCurrent;

                await interrupt();
            } else {
                break;
            }
        }
    }
}
