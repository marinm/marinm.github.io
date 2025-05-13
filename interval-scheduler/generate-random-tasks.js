export function generateRandomTasks(nTasks, nTimes, maxTaskDuration) {
    const tasks = [];

    // Generate random tasks
    for (let i = 0; i < nTasks; i++) {
        tasks.push(getRandomInterval(0, nTimes, maxTaskDuration));
    }

    // Sort tasks by start time
    tasks.sort((task1, task2) => task1[1] - task2[1]);

    return tasks;
}

function getRandomInterval(min, max, maxDiff) {
    const start = getRandomInt(max);
    const duration = getRandomInt(maxDiff);
    const end = Math.min(start + duration, max - 1);

    return [start, end];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
