// shapes.test.js

const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('should create a Triangle object', () => {
    const triangle = new Triangle();
    expect(triangle).toBeInstanceOf(Triangle);
  });

  test('should have a type property equal to "Triangle"', () => {
    const triangle = new Triangle();
    expect(triangle.type).toEqual('Triangle');
  });

  test('should generate SVG representation of triangle', () => {
    // Add test code to verify correct SVG generation for triangle
  });
});

describe('Circle', () => {
  test('should create a Circle object', () => {
    const circle = new Circle();
    expect(circle).toBeInstanceOf(Circle);
  });

  test('should have a type property equal to "Circle"', () => {
    const circle = new Circle();
    expect(circle.type).toEqual('Circle');
  });

  test('should generate SVG representation of circle', () => {
    // Add test code to verify correct SVG generation for circle
  });
});

describe('Square', () => {
  test('should create a Square object', () => {
    const square = new Square();
    expect(square).toBeInstanceOf(Square);
  });

  test('should have a type property equal to "Square"', () => {
    const square = new Square();
    expect(square.type).toEqual('Square');
  });

  test('should generate SVG representation of square', () => {
    // Add test code to verify correct SVG generation for square
  });
});
