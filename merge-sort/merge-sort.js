// https://en.wikipedia.org/wiki/Merge_sort

export async function mergeSort(values, interrupt) {
    // Start with subarrays of size 1, and double the size each iteration
    for (let blockSize = 1; blockSize < values.length; blockSize *= 2) {
        // Iterate through array, a _pair_ of blocks at a time
        for (let i = 0; i < values.length; i += 2 * blockSize) {
            await merge(values, i, blockSize, interrupt);
        }
    }
}

async function merge(values, leftStart, blockSize, interrupt) {
    let rightStart = Math.min(leftStart + blockSize, values.length);
    let rightEnd = Math.min(rightStart + blockSize, values.length);

    let j = rightStart;

    //         i               j
    //     L L L L L L L L R R R R R R R R
    //     * * * * * * * * * * * * * * * *

    for (let i = leftStart; i < j && j < rightEnd; i++) {
        if (values[i] >= values[j]) {
            move(values, j, i);
            j++;

            await interrupt();
        }
    }
}

function move(values, from, to) {
    let [value] = values.splice(from, 1);
    values.splice(to, 0, value);
}
