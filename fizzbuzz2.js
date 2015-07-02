var forNumber = function(n) {

  if (n == 1) {
    return '1';
  } else if (n == 2) {
    return '2';
  } else if (n == 3) {
    return 'fizz';
  } else if (n == 5) {
    return 'buzz';
  } else if (n % 3 == 0 && n % 5 != 0) {
    return 'fizz';
  } else if (n % 5 == 0 && n % 3 != 0) {
    return 'buzz';
  } else if (n % 3 == 0 && n % 5 == 0) {
    return 'fizz buzz';
  } else {
    return n.toString();
  }

};



































// var printTo = function (n) {
//   var arr = [];
//   for (var i = 1; i <= n; i++) {
//     arr.push(forNumber(i));
//   }
//     return arr.join(', ');
// };



// if (n % 3 == 0 && n % 5 == 0) {
//   return 'fizz buzz';
// } else if (n % 3 == 0) {
//   return 'fizz';
// } else if (n % 5 == 0) {
//   return 'buzz';
// } else {
//   return n.toString();
// }

module.exports.forNumber = forNumber;
// module.exports.printTo = printTo;
