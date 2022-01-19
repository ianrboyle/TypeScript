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

  }
  getDistance(another: Point) {}
}

let drawPoint = (point: Point) => {

}

