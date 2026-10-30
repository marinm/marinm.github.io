# remote-device-orientation-transmitter

Make this file a single, self-contained web page with zero external dependencies. It is meant for mobile use but should
also work on any screen size. The page is a black screen with white text.

See sibling folder /remote-device-orientation-receiver. That page contains the code for the receiver. This page is for the transmitter.

First the page will ask the user to enter a 4 digit number XXXX. The page will use XXXX to compose a channel name like `remote-device-orientation-XXXX` to connect to. The websocket server is at `wss://broadcast.marinm.net`. The XXXX number should be displayed at the top of the screen.

After successfully connecting, show a "Tap to allow device orientation" link. When clicked it requests device orientation permissions from the browser. If denied, the label changes to "Permission not granted".

If permission is granted, the device immediately starts sending transmitting its device orientation data to the websocket channel in this format:

```
{
"alpha": 0,
"beta": 0,
"gamma": 0,
}
```

(nested in a `data` key).

The values should be formatted to a fixed 1 decimal point.

The device should transmit these events at an even cadence of every 100 ms. Since local device orientation events will likely fire more requently, the page should simply sample these and send the last sampled value.

Finally, add an entry to the parent index.html

Before building, ask me questions to clarify.
