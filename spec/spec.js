
var yourCode = require('../src');

describe("fizzBuzz", function (n) {

  it("returns the number when provided 1 as input", function () {
    expect(yourCode.fizzBuzz(1)).toEqual('1');
  });

  xit("returns the number when provided 2 as input", function () {
    expect(yourCode.fizzBuzz(2)).toEqual('2');
  });

  xit("returns the word 'fizz' when provided 3 as input", function () {
    expect(yourCode.fizzBuzz(3)).toEqual('fizz');
  });

  xit("returns the word 'buzz' when provided 5 as input", function () {
    expect(yourCode.fizzBuzz(5)).toEqual('buzz');
  });

  xit("returns the word 'fizz' when provided a multiple of 3", function () {
    expect(yourCode.fizzBuzz(9)).toEqual('fizz');
  });

  xit("returns the word 'buzz' when provided a multiple of 5", function () {
    expect(yourCode.fizzBuzz(10)).toEqual('buzz');
  });

  xit("returns the phrase 'fizz buzz' when provided a multiple of both 3 and 5", function () {
    expect(yourCode.fizzBuzz(15)).toEqual('fizz buzz');
  });

  xit("for all other numbers it returns the number as a string", function () {
    expect(yourCode.fizzBuzz(4)).toEqual('4');
  });

});
