const MAX_SAFE_WORK_ITERATIONS = 1e6;

let working = false;
let timerOn = false;

self.addEventListener("message", function (event) {
    working = true;
    const t0 = performance.now();

    const counter = timeLimitedWork(1000);

    const t1 = performance.now();
    const elapsed = parseInt(t1 - t0);
    working = false;

	self.postMessage(`worked for ${Intl.NumberFormat("en-CA").format(elapsed)} ms, counted to ${Intl.NumberFormat("en-CA").format(counter)}`);
});

function shouldWork() {
    return timerOn;
}

function timeLimitedWork(timeLimit) {
    timerOn = true;

    // The callback gets queued but is not run at the expected time.
    setTimeout(() => (timerOn = false), timeLimit);

    // work() keeps control until it reaches MAX_SAFE_WORK_ITERATIONS.
    return work();
}

function work() {
    let counter = 0;

    while (shouldWork() && counter < MAX_SAFE_WORK_ITERATIONS) {
        counter++;
    }

    return counter;
}
