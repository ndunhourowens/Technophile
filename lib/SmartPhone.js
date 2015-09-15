/*
Smart Phone

This class inherits from the Phone class, Tablet class,
Game Console class, and the Web Browser class.

The constructor should accept a single argument phoneNumber
and invoke the Phone class constructor passing in phoneNumber,
and invoke the Game Console class constructor with the hard coded
constructor argument 'Smart Phone'
*/

var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber) {
  GameConsole.call(this, 'Smart Phone');
  Phone.call(this, phoneNumber);
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;