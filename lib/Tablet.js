/*

Tablet

The class should define a touch method that accepts two arguments x and y and return a
literal object with keys x and y with values set to the method's arguments.

*/

function Tablet(x,y) {

}
Tablet.prototype.touch = function(x,y) {
  this.x = x;
  this.y = y;

  return {
    x: this.x,
    y: this.y
  };
};


module.exports = Tablet;


