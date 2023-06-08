// What is a callback?
// A callback function is simply a function that passes one function into another
// Callback funtions can be called or executed at a later time or in response to a specific event.

// What is callback hell?
// AKA Pyramid of doom
// Callback hell is when many asynchronous operations (callback functions) are nested inside of eachother.

// Why does callback hell occur and why should we avoid callback hell?
// We should avoid callback hell because of the "inversion of control." Meaning you lose control of your conde when you use too many callbacks. We are blindly trusting the past function to call the next.
// Nesting several callback functions inside of eachother can create code that is difficult to read, understand, and maintain.

// Please code an example of callback hell to show to the class.
// Select all elements with the class "word" and store them in the 'words' variable

// This callback hell code makes a burger
const makeBurger = (nextStep) => {
  // 1. Get beef
  getBeef(function (beef) {
    // 2. Cook the beef
    cookBeef(beef, function (cookedBeef) {
      // 3. Get buns for the burger
      getBuns(function (buns) {
        // 4. Put the cooked beef between the buns
        putBeefBetweenBuns(buns, beef, function (burger) {
          // 5. Serve the burger (from the callback)
          nextStep(burger);
        });
      });
    });
  });
};
// As you can see, if there is an error in just one step of making the bruger, it will be hard to find and fix as each peice of code is dependent on the next.
