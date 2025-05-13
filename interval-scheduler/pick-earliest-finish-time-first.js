export function pickEarliestFinishTimeFirst(tasks) {
    const picked = [];
    let lastEnd = -Infinity;

    tasks.forEach((t, i) => {
        const [start, end] = t;
        if (start > lastEnd) {
            picked.push(i);
            lastEnd = end;
        }
    });

    return picked;
}
