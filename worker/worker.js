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
    self.postMessage("received run message");
}

function pause() {
    self.postMessage("received pause message");
}

function reset() {
    self.postMessage("received reset message");
}
