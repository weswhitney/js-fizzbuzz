var FizzBuzz = function () {

};

FizzBuzz.prototype.forNumber = function(n){
    if (n % 3 == 0 && n % 5 == 0) {
      return 'fizz buzz';
    } else if (n % 3 == 0) {
      return 'fizz';
    } else if (n % 5 == 0) {
      return 'buzz';
    } else {
      return n.toString();
    }
};


printTo: function (n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push('fizz buzz');
    } else if (i % 3 == 0) {
      arr.push('fizz');
    } else if (i % 5 == 0) {
      arr.push('buzz');
    } else {
      arr.push(i.toString());
    }
  }
    return arr.join(', ');
}
