//write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order
//dont reverse the array itself
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse([3, 6, 2, 5]);

// write a function which takes an array as an argument
// and returns true if all elements in the array are identical
function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

isUniform([1, 1, 1]);

//write a function sumArray that accepts an array
//of numbers and returns the sum of all numbers in the array
