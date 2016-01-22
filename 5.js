'use strict';

function CarStore(arrayOfCars) {
  this.cars = arrayOfCars;
  this.addCar = function(type, price, year) {
    var newCar = {type: type,
                  price: price,
                  year: year};
    this.cars.push(newCar);
    console.log(this.cars);
  }
  this.getSumPrice = function() {
    var sum = 0;
    for(var i = 0; i < this.cars.length; i++) {
      sum += this.cars[i].price
    }
    return sum
  };
  this.getOldestCarType = function() {
    var oldestCar = this.cars[0];
    for(var j = 0; j < this.cars.length; j++) {
      if(this.cars[j].year < oldestCar.year) {
        oldestCar = this.cars[j]
      }
    }
    return oldestCar.type;
  };
  this.deleteCarByType = function(type) {
    var newArrayOfCars = [];
    for(var k = 0; k < this.cars.length; k++) {
      if(type !== this.cars[k].type) {
        newArrayOfCars.push(cars[k])
      }
    }
    this.cars = newArrayOfCars
    return this.cars
  }
}

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000
