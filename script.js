// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it


// function addNumber(n){
//     return function(x){
//         return n+x;
//     }
// }

// const addTwoNumbers = addNumber(50);
// const anotherNumber = addTwoNumbers(10);
// console.log(anotherNumber);


// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// function recursiveArray(arr, val) {
  
    
//     // Base case: value is found
//     if (arr[0] === val) {
//       return true;
//     }
    
//     // Recursive case: search rest of array
//     return recursiveArray(arr.slice(1), val);
//   }
  

  
//   const searching =recursiveArray([1,2,3,4,9], 1);
//   console.log(searching);




//  Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// function addNewParagraph(text) {
    
//     var newParagraph = document.createElement('p');
    
  
//     var paragraphText = document.createTextNode(text);
//     newParagraph.appendChild(paragraphText);
    
    
//     var body = document.getElementsByTagName('body')[0];
//     body.appendChild(newParagraph);
//   }
//  addNewParagraph('Hello Welcome this is a student doing course form SMIT!');



// . Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// Not able to do it 


// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// function changeBackgroundColor(bg, color) {
//     bg.style.backgroundColor = color;
//   }


//   var bg = document.getElementById('bg-change');
// changeBackgroundColor(bg, 'violet');

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


// function getObject(key) {
//     var objString = localStorage.getItem(key);
//     if (objString) {
//       return JSON.parse(objString);
//     } else {
//       return null;
//     }
//   }


//   var myObject = getObject('myKey');
// if (myObject) {
//   console.log('take object from localStorage:', myObject);
// } else {
//   console.log('Not able to find object');
// }