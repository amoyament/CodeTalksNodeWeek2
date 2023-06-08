// What is a promise?
// A promise is an object used as a placeholder for a certain period of time until we recieve a value from an asycnchronous operation.
// Or it can also be known as a container for a future value
// A promise is just an empty object with some undefined data value in it. Once the data is filled, the promise's code is executed in the .then() function.
// A promise is always in one of three states: pending, fulfilled, or rejected

// What are promises used for?
// Promises are used  for asynchronous API calls, file operations (reading and writing files), database operations, and animation and timeout events
// Promises are also often used in place of nested callback functions to combat "callback hell."

// What are pro/cons to using a promise?
// Promise Pros:
// Better control over the order and execution of asynchronous operations in your code
// Minimizes the interdependencies or connections between different asynchronous components
// Better error handling (built in cache function)
// Promise Cons:
// Only one object can be returned
// We cannot return multiple arguments.
// Once a promise is created and initiated, it cannot be paused, resumed, or canceled

// Please code some example of promises to show to the class.

// Create a new Promise with an executor function that takes two parameters: resolve and reject
var aubreysPromise = new Promise(function (resolve, reject) {
  // Make a request using the "request" library, passing options and a callback function
  request.get(options, function (err, resp, body) {
    // If there is an error in the request, reject the promise with the error
    if (err) {
      reject(err);
      // If the request is successful, parse the response body as JSON and resolve the promise with the parsed data
    } else {
      resolve(JSON.parse(body));
    }
  });
});
