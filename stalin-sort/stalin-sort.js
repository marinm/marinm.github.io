// https://github.com/gustavo-depaula/stalin-sort

export async function stalinSort(values, interrupt) {
    let min = values[0];

    let i = 0;
    while (i < values.length) {
        if (values[i] >= min) {
            min = values[i];
            i++;
        } else {
            values.splice(i, 1);
        }
        await interrupt();
    }
}
