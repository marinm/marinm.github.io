# remote-device-orientation-receiver

Make this file a single, self-contained web page with zero external dependencies. It is meant for mobile use but should also work on any screen size.

The page is a black screen with white text.

On page load, it will generate a random 4 digit number. This is used to compose a channel name `remote-device-orientation-XXXX` where XXXX is the random 4 digit number. It will connect to a websockets broadcast server hosted at `wss://broadcast.marinm.net`. The source code for the broadcast server is hosted in a private repo at `https://github.com/marinm/websockets-broadcast` which can be accessed via SSH. Look at the repo for details on how to listen for and send messages.

The XXXX number should be displayed at the top of the screen. Users will see that number and use it to connect their devices, which are the clients.

This page will act as a receiver host that only listens for messages and never sends any messages. When a client connects, the page displays the client's UUID, even if the client hasn't sent any messages yet.

The page listens for messages of this form from clients:

```
{
    "alpha": 0,
    "beta": 0,
    "gamma": 0,
}
```

Any messages that don't follow this form are silently ignored.

When a valid client message arrives, the page should print just the values in comman separated format under the client's UUID. The values should be formatted to a fixed 1 decimal point.

Under the values I'd also like to display a simple 3d rendering of the alpha/beta/gamma (yaw/pitch/roll) values. The object being rotated will imitate a phone: a rectangle with a slight thickness. The front of the phone will be a green rectangle face and the back of the phone will be a red rectangle phone. The edges should be gray.

Each client gets its own 3d rendering.

Before building, ask me questions to clarify.
