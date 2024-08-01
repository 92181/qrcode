# QR Code Generation Library JS
A very tiny and performant QR code generation library, The main logic is around 2 KB. Useful in online services &amp; data exchange, communication, you name it. It takes just a few very simple parameters. It is designed to be minimalistic and tweakable, you can easily change it's algoritms or routines.

# Usage
The library has two demo files, index and clock. Both contain example use cases of the library. 
The QR clock shows the time and updates the canvas every second. The index file can be used to interactively try out the library.

The library can be easly used to generate QR codes on a HTML canvas. It can be embedded in several ways, inlined or not. It can be used as seen below.

```javascript
// It can be called with the following parameters: text, size, offset y & x.
qg("wikipedia.org",12,50,50);
```
# License
This project is licenced under the permissive MIT license.
