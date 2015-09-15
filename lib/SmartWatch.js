/*
Smart Watch

This class inherits from the Watch class and the Tablet class.

The constructor should invoke the Watch class constructor.

*/
var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(this);
}
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;