#metalsmith-paragraph-count

> Metalsmith plugin to compute the number of paragraphs in a HTML file.

## Installation

This doesn't work yet as I forgot to upload it to NPM.

```bash
npm install --save metalsmith-paragraph-count
```
## Usage

```javascript
var Metalsmith = require("metalsmith");
var paragraph = require("metalsmith-paragraph-count");

Metalsmith(__dirname)
  // HTML files are available (e.g. state after Markdown has been compiled).
  .use(paragraph())
  // ...

```

## Options

There is only one customization option.

### `metaParagraphCount` (optional)
`String`: Name of the key that will store the paragraph count in a file's metadata.
default: `paragraphCount`

## Full example with options set

```javascript
Metalsmith(__dirname)
  .use(paragraph({
    metaParagraphCount: "paragraphCount"
  })
  // ...
```

## Problems?
File an issue or fork 'n' fix and send a pull request.

## License
(c) 2017 Paul Kerrigan
[MIT License](majodev.mit-license.org)
