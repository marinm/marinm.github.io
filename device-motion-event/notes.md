# remote-device-orientation-receiver

Make this file a single, self-contained web page with zero external dependencies. It is meant for mobile use but should also work on any screen size.

The page is a black background with default-size white text in the center of the screen.

First the screen displays "Tap to enable motion events", which when tapped requests the browser for permissions for 'motionevent'.

If permission is not granted, the label changes to "Permission not granted".

If permission is granted, the label changes to a fixed-size table. The left column shows all main the keys that motionevent provides. The right column shows all the values, right-aligned.

Here are the keys I'm thinking of:

- `acceleration`
- `accelerationIncludingGravity`
- `rotationRate (alpha)`
- `rotationRate (beta)`
- `rotationRate (gamma)`
- `interval`

The table should have no borders.

Do not add any other text on the screen.

Finally, add an entry to the parent index.html page.

Before building, ask me questions to clarify.
