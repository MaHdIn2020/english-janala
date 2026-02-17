1) What is the difference between null and undefined?
Answer: In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, while null is an intentional assignment that represents "no value" or "empty value." undefined is automatically assigned by JavaScript, whereas null is explicitly set by the developer. Although both represent absence of value, they are different types (undefined is its own type, and null is of type object due to a historical JavaScript bug).

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Answer: The map() function is used to create a new array by applying a function to each element of an existing array, and it returns the new transformed array. In contrast, forEach() executes a function for each array element but does not return a new array (it returns undefined). Therefore, map() is used when you want to transform data and store the result, while forEach() is typically used for performing side effects like logging or updating external variables.

3) What is the difference between == and ===?
Answer: The == operator compares two values for equality after performing type conversion (type coercion), meaning it can convert different data types to match before comparing. On the other hand, === is the strict equality operator, which compares both value and data type without performing type conversion. Because of this, === is generally recommended to avoid unexpected results caused by automatic type coercion.

4) What is the significance of async/await in fetching API data?
Answer: The async/await syntax in JavaScript simplifies working with asynchronous operations like fetching API data by making asynchronous code look and behave more like synchronous code. The async keyword allows a function to return a promise, while await pauses the execution of that function until the promise resolves, improving readability and making error handling easier compared to using .then() and .catch() chains.

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Answer: Scope in JavaScript determines where variables are accessible within the code. Global scope means a variable is accessible anywhere in the program. Function scope means a variable declared inside a function is only accessible within that function. Block scope, introduced with let and const, means a variable declared inside a block {} (such as in loops or conditional statements) is only accessible within that block, helping prevent unintended variable access and conflicts.
