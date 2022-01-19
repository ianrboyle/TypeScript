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
class Point {
  x: number;
  y: number;
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y)
  }
  getDistance(another: Point) {}
}
// must initialize Point as a new operator
let point = new Point;
point.x = 1;
point.y = 2;
point.draw();
