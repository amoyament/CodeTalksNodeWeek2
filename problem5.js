// What is a async/await?
// Async allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the "execution thread." It operates asynchronously via the event loop and always returns a value.
// The await function is used to wait for the promise. Await makes the code wait until the promise returns a result, but it only makes the async block wait.

// Why is async/await useful?
// Async/Await is just an easier way to write promises.
// You can use await to conveniently wait for promises to resolve. This makes the code more linear and less nested. Which makes the code much more simple to read, edit, update, and understand

// What are pro/cons to using async/await?
// Pros:
// Code is easier to read
// Can be easily chained
// Easier to debug
// Another way to avoid callback hell
// Cons:
// Can be difficult to handle errors
// An async function is set to show two basic results, either a resolved value or a rejected value, and error handling is not easy for these cases

// Please code some example of async/await to show to the class.

// Use async keyword before arrow function to indicate the function will be asynchronous
const getData = async () => {
  // Pause execution until the promise (string "Hello World") is resolved
  let y = await "I will wait";
  console.log(y);
};
// Logs the number 1 to the console
console.log("Hi!");
// Calls the asynchronous getData function
getData();
// Logs the number 2 to the console
console.log("Bye!");

// Because we used the await keyword, the console prints "Hi!" AND "Bye!" before the “I will wait!”.
