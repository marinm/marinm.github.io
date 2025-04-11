self.addEventListener("message", function (event) {
	self.postMessage(`Got a message from the document: ${event.data}`);
});

// *****************************************************************************
// Notes

// Model worker or worker task as HTMLMediaElement
//
// See properties, methods, events on HTMLMediaElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
//
// Properties
//     .currentTime
//     .duration
//     .ended
//     .error
//     .paused
//     .played
//     .readyState
//     .seekable
//     .volume
//
// Methods
//     pause()
//     play()
//
// Events
//     ended
//     error
//     pause
//     play
//     playing
//     progress
//     seeked
//     seeking
//     stalled
//     suspend
//     timeupdate
//     volumechange
//     waiting

// Interruption
//
// Let iterations be interruptable by using a job queue
//     setTimeout(iterate, 0)

// JavaScript Execution Model
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model
