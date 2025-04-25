export async function bubbleSort(values, interrupt) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < values.length - 1; i++) {
            const vCurrent = values[i];
            const vNext = values[i + 1];

            if (vCurrent > vNext) {
				// Swap
				values[i] = vNext;
				values[i + 1] = vCurrent;

                sorted = false;
            }
            await interrupt();
        }
    }
}
