// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz += 1;
}


// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

for (var i = 0; i < 3; i++) {
  checkz -= 2;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
// var numbers = [1, 2, 3, 4, 5, 6, 7];
// var total = 0;
// for (var i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log(total);

// the loops runs 7 times because there are seven numbers in the length of var numbers, which is an array.
// each time the loop runs, the var total is updated to be the item in the array plus total
// the first run takes 0 + 1 and updates the total to 1.
// the second run takes 1 + 2 and updates tht total to 3.
// the third run takes 3 + 3 and updates the total to 6.
// the fourth run takes 6 + 4 and updates the total to 10.
// the fifth run takes 10 + 5 and updates the total to 15.
// the sixth run takes 15 + 6 and updates the total to 21.
// the final run updates 21 + 7 and updates the total to 28.
