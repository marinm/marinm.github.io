self.addEventListener("message", function (event) {
	self.postMessage(`Got a message from the document: ${event.data}`);
});