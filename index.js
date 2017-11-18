var cheerio = require('cheerio');
var extname = require('path').extname;

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to compute the number of paragraphs within a HTML file.
 *
 * Uses a simple regular expression to count the number of <p>, <ul>, <ol>, <pre> and <table> tags.
 *
 * @return {Function}
 */

function plugin(options) {
  return function(files, metalsmith, done) {
    var opts = options || {};

    // Set default values.
    opts.metaParagraphCount = opts.metaParagraphCount || "paragraphCount";

    setImmediate(done);
    Object.keys(files).forEach(function(file) {

      var processedCounts;

      // Only parse HTML files.
      if (isHTML(file) === false) {
        return;
      }

      processedCounts = processHTML(files[file].contents, opts);

      files[file][opts.metaKeyCount] = processedCounts.count;
    });
  };
}

// Count the paragraphs in a piece of HTML.
function processHTML(contents, opts) {
  var $ = cheerio.load(contents);
  var html = $.html();

  // Split the text by <p> tags, remove any empty strings, then return the array length.
  var paragraphs = html.match(/<(p|ul|ol|pre|table)>[\s\S]*?<\/\1>/g).filter(
    function(text) { return /\S/.test(text); }
  );
  var paragraphCount = (paragraphs !== null) ? paragraphs.length : 0;

  return {
    count: paragraphCount
  }
}

// Test whether a file has a .html extension.
function isHTML(file) {
  return /\.html/.test(extname(file));
}