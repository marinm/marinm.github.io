let counter = 0;

onconnect = function (event) {
	const port = event.ports[0];

	port.onmessage = function (event) {
		counter++;
		port.postMessage(`pong ${counter}`);
	};
};
