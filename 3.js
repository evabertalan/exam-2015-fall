'use strict';

function Circle(radius) {
  this.Circumference = 0;
  this.area = 0;

  this.getCircumference = function() {
    this.Circumference = 2 * Math.PI * radius;
    return this.Circumference;
  }
  this.getArea = function() {
    this.area = Math.pow(radius, 2) * Math.PI;
    return this.area
  }
  this.toString = function() {
    return 'Radius: ' + radius + ', Circumference: ' + this.Circumference + ', Area: ' + this.area;
  }
}

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


var circle = new Circle(4);
console.log(circle.getCircumference());
console.log(circle.getArea());
console.log(circle.toString());
