// The “this” keyword works differently in arrow functions vs regularly declared functions.
// Explain how the “this” keyword works differently in arrow functions vs normal functions.
// In a normal function, "this" is dynamic and depends on how the function is called.
// Arrow functions do not have their own "this" value and instead rely on the lexical scope of their surrounding context.
// The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions.

// Write some code that shows that you understand the difference between how the “this” keyword is used.

const obj = {
  name: "Aubrey",

  // Method using a regular function
  printName() {
    // Accesses the "name" property of the object
    console.log(this.name);
  },

  // Method using an arrow function
  printNameWithArrow: () => {
    // Accesses the "name" property from the surrounding scope (global scope)
    console.log(this.name);
  },
};

// Output: "John" - .this accesses the "name" property of the object "obj"
obj.printName();
// Output: "undefined" - Since arrow functions do not have their own "this" value, it refers to the surrounding scope (global scope), where the "name" property is not defined, resulting in "undefined"
obj.printNameWithArrow();
