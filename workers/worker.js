let counter = 0;

self.addEventListener("message", function (event) {
	counter++;
	self.postMessage(`pong ${counter}`);
});