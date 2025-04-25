export async function bubbleSort(arrayLength, getValue, setValue, interrupt) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arrayLength - 1; i++) {
            const vCurrent = getValue(i);
            const vNext = getValue(i + 1);

            if (vCurrent > vNext) {
				// Swap
				setValue(i, vNext);
				setValue(i + 1, vCurrent);

                sorted = false;
            }
            await interrupt();
        }
    }
}
