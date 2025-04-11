let running = false;
let interval = null;

let i = 0;

self.addEventListener("message", function (event) {
    switch (event.data) {
        case "run":
            run();
            break;
        case "pause":
            pause();
            break;
        case "reset":
            reset();
            break;
        default:
            self.postMessage("received unknown message");
    }
});

function run() {
    if (running) {
        return;
    }
    running = true;

    interval = setInterval(iterate, 250);
}

function pause() {
    if (!running) {
        return;
    }
    running = false;
    emitState();
}

function reset() {
    if (!interval) {
        return;
    }
    running = false;
    i = 0;
    clearInterval(interval);
    emitState();
}

function iterate() {
    if (!running) {
        return;
    }
    i++;
    emitState();
}

function emitState() {
    self.postMessage({ running, i });
}
