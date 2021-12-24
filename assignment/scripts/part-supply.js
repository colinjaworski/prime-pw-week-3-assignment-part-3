console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable called 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3,5,-6,0,7,11]
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
removed = supplyChanges.pop();
console.log('4. Removed item:', removed);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25);
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'

console.log('6. Showing supplyChanges...');

for( let i = 0; i < supplyChanges.length; i++){
  if (supplyChanges[i] > 0){
    console.log('added', supplyChanges[i], 'parts');
  }
  if (supplyChanges[i] < 0){
    console.log('removed', supplyChanges[i], 'parts');
  }
  if (supplyChanges[i] === 0){
    console.log('no change', supplyChanges[i]);
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for (let x of supplyChanges){
  if (x > 0){
    console.log('Added x parts', x);
  }
  if (x == 0){
    console.log('no change', x);
  }
  if (x < 0){
    console.log('Removed x parts', x);
  }
}


// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 3 + 5 + -6 + 0 + 7 + 25
console.log(supplyChanges.reduce((a, b) => a + b, 0));
console.log('expected value = 34');

//using for loop to sum an array
let sum = 0;
for (let i = 0; i < supplyChanges.length; i++) {
     sum += supplyChanges[i];

}
console.log('another way to add',sum);

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
//This one seems super brittle, but it does work. if the total parts changes for any reason,
//the logic won't work. This bothers me but I have to move on.

let totalParts = 0;
let filledBoxes = 0;

while (totalParts < 565) {
    totalParts = totalParts + 7;
    filledBoxes++;
  }
leftOverParts = 572-totalParts
console.log('filled boxes=', filledBoxes );
console.log('parts left over=', leftOverParts );
