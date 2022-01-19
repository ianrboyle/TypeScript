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

  //private keyword makes a variable private - its an access modifier- variables are not accessible outside of the class Point - once a point object is initialized, it cannot be changed
  private x: number;
  private y: number;

  //adding a question mark makes the parameters optional
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y)
  }
}
// must initialize Point as a new operator
// uses constructor - gets rid of need to declare x and y in the point.x = 1 way
let point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
point.draw();
