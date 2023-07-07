//Js Scripts
    //Callback function example
    function doSomething(callback) {
        console.log("Doing something ...");

        callback();
    }

    function callback() {
        console.log(" executing callback function");
    }

doSomething(callback); //Pass callback function as object to doSomething function


//Check if object is an array or now
var arrayList = [1 , 2, 3];

function greet(param) {
    if(Array.isArray(param)) {
      // here have to check whether param is array or not
      console.log("This is an array!");
    }
    else {
        console.log("This is not an array");
    }
  }

  greet(arrayList);

  //Empty an array list
  var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];

  arrayList = [];
  //arrayList.length = 0;
  //arrayList.splice(0, arrayList.length);
//   while(arrayList.length) {
//     arrayList.pop();
//   }
  console.log(arrayList);

  //How would you check if a number is an integer?
  const num = 10;
  console.log(typeof(num));

  if(num % 1 === 0) {
    console.log("int");
  } else {
    console.log("Not a number");
  }

  //Implement enqueue and dequeue using only two stacks(Enqueue means to add an element, dequeue to remove an element.)
  const inputArray = [];
  const outputArray = [];

  //Add item to list
  function enqueue(inputArray, item) {
        inputArray.push(item);

        console.log(inputArray);
  }

  function dequeue(inputArray, outputArray) {
    // If the dequeue stack is empty, transfer elements from enqueue stack
    if (outputArray.length <= 0) {
        while(inputArray.length > 0) {
          let elementToOutput = inputArray.pop();
          outputArray.push(elementToOutput);
        }
      }
  
      // Pop an element from the dequeue stack
      return outputArray.pop();
  }

  enqueue(inputArray, 1);
  enqueue(inputArray, 2);
  enqueue(inputArray, 3);
  dequeue(inputArray, outputArray);

  console.log(outputArray);

  //Make this work 

//  duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

  function duplicate(arr) {
    console.log([...arr, ...arr]);

    //or

    console.log(arr.concat(arr));
  }

  duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]


  //FizzBuzz Challenge
  //Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

  
  for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log("Fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("Fizz");
    } else if(i % 3 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
  }