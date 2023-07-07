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
  console.log(arrayList);