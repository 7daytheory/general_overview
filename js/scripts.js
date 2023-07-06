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