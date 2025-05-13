export function render(tasks, picked, nTimes) {
    const table = document.querySelector("table");

    const row = document.createElement("tr");
    row.classList.add("tasks-row");

    const emptyTd = document.createElement("td");
    row.appendChild(emptyTd);

    for (let t = 0; t < tasks.length; t++) {
        const td = document.createElement("td");
        td.innerText = `${t.toString().padStart(2, "0")}`;
        row.appendChild(td);
    }

    table.appendChild(row);

    for (let i = 0; i < tasks.length; i++) {
        table.appendChild(tasksRow(tasks[i], i, picked, nTimes));
    }
}

function tasksRow(task, i, picked, nTimes) {
    const [start, end] = task;

    const row = document.createElement("tr");
    row.classList.add("tasks-row");

    const labelTd = document.createElement("td");
    labelTd.innerText = `${i.toString().padStart(2, "0")}`;
    row.appendChild(labelTd);

    for (let t = 0; t < nTimes; t++) {
        const td = document.createElement("td");
        if (scheduledAt(task, t)) {
            td.innerText = "**";
            if (picked.includes(i)) {
                td.classList.add("lime");
            }
        } else {
            td.innerText = "--";
        }
        row.appendChild(td);
    }

    const duration = end - start + 1;
    const durationTd = document.createElement("td");
    durationTd.innerText = `${duration}`;
    durationTd.classList.add("bold");
    row.appendChild(durationTd);

    return row;
}

function scheduledAt(task, time) {
    // Starts before and ends after
    return task[0] <= time && task[1] >= time;
}
