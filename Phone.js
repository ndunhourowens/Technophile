
/*

Phone

The constructor should accept a single argument phoneNumber, and set a public variable phoneNumber to the value of that constructor argument.

The class should define a callPhone method that accepts a single argument phoneNumber and return a status message. status message should be in the format: 'this phone number calls other phone number'
example: 5555555 calls 4444444

*/

function Phone(phoneNumber) {
  this._phoneNumber = phoneNumber;
}
Phone.prototype.callNumber = function(phoneNumber) {
  return  phoneNumber + ' calls ' + callNumber;
};







//module.export = Phone;