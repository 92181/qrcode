# QR Code Generation Library JS
A very tiny and performant QR code generation library, The main logic is around 2.5 KB. Useful in online services &amp; data exchange, communication, you name it. It takes just a few very simple parameters. It is designed to be minimalistic and tweakable, you can easily change it's algoritms or routines.

You can view the [live demo](https://798.pages.dev/projects) over at my personal site.

Various things that it can do are...
* Write directly to a Javascript canvas, while changing the color, size and position.
* Export as an vector image (SVG), usefull to be used along with html, or to save it in high resolution.
* Be used as clock, exchange for encryption keys, or use the raw data as a flat array for further processing.

# Usage
The library has three demo files, an basic, clock and SVG demo. All contain example use cases of the library. 
The QR clock shows the time and updates the canvas every second. The basic and SVG demo can be used to interactively try out the library.

The library can be easly used to generate QR codes on a HTML canvas. It can be embedded in several ways, inlined or not. It can be used as seen below.

```javascript
// Draw A QR Code On The Canvas (Text, Canvas, Size, Offset X, Offset Y);
qg("wikipedia.org");qb(ctx,12,50,50);

// Return An Path And Append The Path To An SVG (Text, SVG, Path);
qg("mailto:google@gmail.com");qv(c,p);
```
# License
This project is part of the public domain, feel free to use it in whatever form you want.
