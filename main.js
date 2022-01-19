//in line annotation - a tad verbose
// let drawPoint = (point: { x: number, y: number}) => {
// }
// use interfaces instead
// interfaces - purely for declaration, no implementation
// interface Point {
//   x: number,
//   y: number,
//   draw: () => void
// }
// for cohesion, we need a class, instead of interface
// allows inclusion of functions, where interfaces do not
var Point = /** @class */ (function () {
  //private keyword makes a variable private - its an access modifier- variables are not accessible outside of the class Point - once a point object is initialized, it cannot be changed
  //adding a question mark makes the parameters optional
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.draw = function () {
    console.log("X: " + this.x + ", Y: " + this.y);
  };
  Object.defineProperty(Point.prototype, "X", {
    get: function () {
      return this.x;
    },
    set: function (value) {
      if (value < 0) {
        throw new Error("value cannot be less than 0");
        this.x = value;
      }
    },
    enumerable: false,
    configurable: true,
  });
  return Point;
})();
// must initialize Point as a new operator
// uses constructor - gets rid of need to declare x and y in the point.x = 1 way
var point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
var x = point.X;
point.X = 10;
point.draw();
