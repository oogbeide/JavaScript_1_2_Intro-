"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i);
}
}

printIndices(['a','b','c'])
//   for (const item of items) 
//    for (const i in items); 
// ... {console.log(`${item} ${i}`);
// ... }

// Thrown:
// ReferenceError: fruit is not defined
// > for (const fruit of fruits) {
// ... console.log(fruit);
// ... } for (const i in fruits) {
// ... console.log(i);
// ... }
// cherry
// berry
// apple
// 0
// 1
// 2




// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
