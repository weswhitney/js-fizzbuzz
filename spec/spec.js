
var FizzBuzz = require('../fizzbuzz.js');

describe("forNumber", function (n) {
  var fizzBuzz = new FizzBuzz();

  xit("returns the number when provided 1 as input", function () {
    expect(fizzBuzz.forNumber(1)).toEqual('1');
  });

  xit("returns the number when provided 2 as input", function () {
    expect(fizzBuzz.forNumber(2)).toEqual('2');
  });

  xit("returns the word 'fizz' when provided 3 as input", function () {
    expect(fizzBuzz.forNumber(3)).toEqual('fizz');
  });

  xit("returns the word 'buzz' when provided 5 as input", function () {
    expect(fizzBuzz.forNumber(5)).toEqual('buzz');
  });

  xit("returns the word 'fizz' when provided a multiple of 3", function () {
    expect(fizzBuzz.forNumber(9)).toEqual('fizz');
  });

  xit("returns the word 'buzz' when provided a multiple of 5", function () {
    expect(fizzBuzz.forNumber(10)).toEqual('buzz');
  });

  xit("returns the phrase 'fizz buzz' when provided a multiple of both 3 and 5", function () {
    expect(fizzBuzz.forNumber(15)).toEqual('fizz buzz');
  });

  xit("for all other numbers it returns the number as a string", function () {
    expect(fizzBuzz.forNumber(4)).toEqual('4');
  });

});



// describe("printTo", function (n) {
//   var fizzBuzz = new FizzBuzz();
//
//   xit("returns a string with values for each number up to n", function () {
//     expect(fizzBuzz.printTo(10)).toEqual('1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz');
//   });
//
// });
