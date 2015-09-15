/*
Nintendo DS

This class inherits from the Game Console class and the
Web Browser class.

The constructor should invoke the Game Console class constructor
with the hard coded constructor argument 'Nintendo DS'

*/

var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');


function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;