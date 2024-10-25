# Chapter 06


### Software Architecture:  
- Monolith Architecture  
- Microservices Architecture

### Q: What is `Microservice`?
A:  
- A `Microservice` is a `software architectural style` that structures an application as a `collection of small, independent, and loosely coupled services`.  
- The application is split into `smaller, independent services`.   
- Each sevice has its `own deployment pipeline`.  
- These services `communicate with each other through well-defined APIs` (typically over HTTP or other lightweight protocols).

Key characteristics of microservices include:

`Decomposition` - In a microservices architecture, a monolithic application is `decomposed into multiple smaller independent services`. For example, one service might handle user authentication, while another manages product catalog information.

`Independence` - Each microservice is independent and `has its own codebase, database, technology stack`. This independence allows teams to develop, deploy, and scale individual services without affecting the entire application.

`Loose Coupling` - Microservices `communicate with each other through well-defined APIs or contracts`, which enables loose coupling. This means that changes to one service should not impact other services as long as the API contract remains stable.

`Scalability` - Microservices can be `scaled independently`. Services that experience higher demand can be scaled out, while others can remain unchanged. This provides efficient resource allocation.

`Flexibility` - Microservices are well-suited for applications that require flexibility. Developers can `use different technologies` and programming languages for different services, allowing them to choose the best tool for the job.

`Resilience` - Microservices are designed to be resilient. `If one service fails, it should not bring down the entire application`

<br/>

USES:  
- Large and complex applications, such as e-commerce platforms, social media networks, and financial systems,  
- Here the ability to scale and maintain individual parts of the system is crucial.  

<br/>

CHALLENGES:  
- Managing inter-service communication,  
- Data consistency,  
- Increased complexity of deployment and monitoring

---

### Q: What is `Monolith architecture`?
A:  
- A `monolithic` architecture, also known as a monolithic application, is a `traditional software architectural style` in which an entire application is built as a `single, self-contained unit`.  
- All the components are built on `one single codebase` having a `single deployment pipeline`.  
- In a monolithic architecture, all components and functionalities of the application, such as user interfaces, business logic, and data access, are `tightly integrated and packaged together`.

Key characteristics of a monolithic architecture include:

`Single Codebase` - In a monolithic application, all the code for different application parts is typically written in the `same codebase`.

`Tight Coupling` - Components and modules within a monolithic application are tightly coupled, meaning they often depend on each other. `Changes to one part of the application can have effects on other parts`, making it harder to isolate and maintain individual features.

`Single Deployment Unit` - The entire application is `deployed as a single unit`. When updates or changes are made, the entire monolith must be redeployed. This can lead to longer deployment cycles and increased risk.

`Scaling Challenges` - Scaling a monolithic application can be challenging. If one part of the application requires more resources to handle increased load, the entire application must be scaled, which can be inefficient.

`Technology Stack` - In a monolithic architecture, the entire application typically uses the same technology stack, programming language, and frameworks. This limits the flexibility to use different technologies for different parts of the application.

<br/>  

USES:  
- Smaller applications and projects  
- Simplicity and speed of development are prioritized  

<br/>


CHALLENGES:  
- Complexity  
- Scalability  
- Hard to maintain

---

### Q: What is the difference between `Monolith` and `Microservice`?
A: 
| Characteristics | Monolithic Architecture | Microservice Architecture |
| :--- | :--- | ---: |
| Architecture | Single, self-contained application | Collection of small, independent services | 
| Codebase | Single codebase for the entire application | Multiple codebases for individual services | 
| Coupling	| Tight coupling between components | Loose coupling between services | 
| Deployment Unit | Single deployment unit | Individual service deployment |
| Scalability | Application scaled as a whole | Services scaled independently | 
| Technology Stack | Single technology stack for the entire application | Flexibility to use different technologies for each service | 
| Development Teams | Single development team working on the same codebase | Teams can own and develop individual services | 
| Change Impact | Changes can impact other parts of the application | Changes are isolated and have limited impact |
| Complexity | Simpler for small applications but can become complex as the application grows | Suitable for complex applications but introduces its own challenges |

![image](https://github.com/ReddyDivya/rd-namaste-react-notes/assets/34181144/b0a72a0b-29f0-4f85-8b72-7f2e03608e4d)

---

### Q: Why do we need `useEffect Hook`?
A:  
- The `useEffect` hook is `used to manage side effects in functional components`.  
- Side effects are `actions that occur outside the normal flow of a React component`, such as `data fetching`, `DOM manipulation`, and `subscribing to external data sources`.

Here are several reasons why the useEffect hook is necessary:

`Data Fetching` - In many applications, we need to fetch data from external sources, like an API, when a component is rendered. The useEffect hook allows us to perform these data-fetching operations after the initial rendering.

`DOM Manipulation` - Sometimes, we may need to interact with the Document Object Model (DOM) directly. For instance, we might want to update the title of a webpage or manipulate the size and position of DOM elements. useEffect is used for these purposes.

`Subscriptions` - If our component needs to subscribe to external events, like `WebSocket connections` or `real-time updates from a server`, useEffect is a suitable place to `manage and clean up these subscriptions`.

`Avoiding Memory Leaks` - Using useEffect, we can ensure that any `resources or event listeners we create in a component are cleaned up when the component is unmounted`. This helps prevent `memory leaks and ensures our application runs efficiently`.

`Conditional Effects` - We can use useEffect with dependencies to run code conditionally when certain values change. This allows us to react to changes in state or props and execute side effects accordingly.

```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code will run after the component is mounted.
    // You can fetch data here and update the state when it's available.
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;
```

In this example, the useEffect hook is used to fetch data when the component is mounted, ensuring that the side effect of data fetching occurs at the appropriate time in the component's lifecycle.

---

### Q: What is `Optional Chaining`?
A:  
- `Optional chaining` is a feature in modern JavaScript that provides a concise way to `access properties and methods` on null or undefined objects without causing runtime errors.  
- It's denoted by the `?.` syntax and useful when dealing with `deeply nested object structures` or when we're unsure if a property or method exists.


1 `Accessing Object Properties` - When we use optional chaining to access object properties, `it checks if the property we're trying to access exists`. If the property is present, it returns its value; otherwise, it returns undefined.
```
const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

const city = person.address?.city; // "New York"
const country = person.address?.country; // undefined
```

2 `Invoking Object Methods` - We can also use optional chaining to call methods on objects. It ensures the method is called only if it exists.
```
const car = {
  start: function () {
    console.log("Car started");
  },
};

car.start?.(); // "Car started"
car.stop?.(); // No error, nothing happens (undefined is returned)
```

3 `Handling Arrays` - Optional chaining can also be used with arrays to access elements by their index. It `returns undefined if the index is out of bounds.`
```
const numbers = [1, 2, 3, 4];

const firstNumber = numbers[0]; // 1
const fifthNumber = numbers[4]; // undefined
const lastNumber = numbers[4]?.(); // undefined (not a function)
```

Optional chaining is especially valuable when working with `API responses, user input, or any scenario where data might be missing or incomplete`. It helps us avoid common runtime errors like "TypeError: Cannot read property 'x' of undefined" and allows us to write more robust and concise code.

---

### Q: What is `Shimmer UI`?
A:  
- A `Shimmer UI` is a UI design technique used to indicate that `content is loading or placeholders are being displayed`.  
- It gives an `impression about the structure of the web page` and visual content.  
- It involves creating an `animation or visual effect` that gives the impression of activity or content rendering, even when the actual content has not yet loaded. Shimmer UIs are often used in applications, websites, or mobile apps to enhance the user experience during loading times.

The key characteristics of Shimmer UIs include:

`Animation` - Shimmer UIs typically involve a `gentle and repetitive animation that creates a shimmering or fading effect`, mimicking the appearance of content gradually appearing on the screen.

`Placeholder Content` - Instead of displaying empty or blank areas where content will eventually appear, a Shimmer UI shows placeholder content that resembles the expected content in terms of layout, structure, and style. This gives users a visual cue about the content that will load.

`Loading State` - Shimmer UIs are used to convey that the application or webpage is in a loading state. This is particularly useful when fetching data from a server, as it provides feedback to users that something is happening in the background.

`User Engagement` - By adding a Shimmer UI, users may feel more engaged and less frustrated during loading times because they receive visual feedback that the app is working to retrieve the data.

```
import React from 'react';
import './Shimmer.css';

function ShimmerUI() {
  return (
    <div className="shimmer-container">
      <div className="shimmer-placeholder"></div>
      <div className="shimmer-placeholder"></div>
      <div className="shimmer-placeholder"></div>
    </div>
  );
}

export default ShimmerUI;
```

```
/* Shimmer.css */
.shimmer-container {
  display: flex;
  flex-direction: column;
}

.shimmer-placeholder {
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```
---

### Q: What is the difference between `JS expression` and `JS statement`?
A:  
`JavaScript Expression`  
- An expression is a `piece of code that produces a value`.  
- It can be a `single value, a variable, a function call, or a combination of values and operators` that result in a value. 

**Examples of expressions:**
```
5 + 3       // Produces the value 8
"Hello"     // Produces the string value "Hello"
myVariable  // Produces the value stored in the variable myVariable
func(4)     // Calls a function and produces its return value
```

`JavaScript Statement`  
- A statement is a `piece of code that performs an action`.  
- It doesn't produce a value like an expression.  
- Statements are often `used to control the flow of a program, define functions, declare variables, and perform other tasks`. 

**Examples of statements**:
```
if (x > 10) {
  // Conditional statement
  // Executes a block of code if x is greater than 10
}

for (let i = 0; i < 5; i++) {
  // Loop statement
  // Repeats a block of code five times
}

function greet(name) {
  // Function declaration statement
  console.log("Hello, " + name);
}

let y = 42;  // Variable assignment statement
```

In summary, expressions produce values and can be used within statements, while statements are used to `control the program's flow`, `define functions`, `declare variables`, and perform actions. Understanding the distinction between `expressions` and `statements` is important when writing JavaScript code because it affects how we structure our code and where we can use different constructs.

---

### Q: What is `Conditional Rendering`? explain with a code example.
A:  
- `Conditional rendering` refers to the practice of `displaying different content or components based on certain conditions` or states.  
- It allows us to `control what is rendered` in the user interface depending on the values of variables, props, or the application's current state.  
- Conditional rendering is a `fundamental concept in building dynamic and interactive` user interfaces.

```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <WelcomeUser />
      ) : (
        <Login />
      )}
    </div>
  );
}

function WelcomeUser() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <button>Log Out</button>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Please Log In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
```

- We have a state variable isLoggedIn that determines whether a user is logged in or not. Initially, it's set to false.

- In the App component, we use a conditional rendering technique within the JSX to display different components based on the value of isLoggedIn.

- If isLoggedIn is true, the <WelcomeUser /> component is displayed, welcoming the user.
- If isLoggedIn is false, the <Login /> component is displayed, prompting the user to log in.
- The <WelcomeUser /> and <Login /> components represent different parts of the UI that are conditionally rendered based on the state. Depending on the user's login status, one of these components will be displayed.

Conditional rendering is a powerful technique for `building responsive and interactive user interfaces` in React. It allows us to show or hide content, components, or even entire sections of our application based on user actions, data, or other factors, providing a more personalized and dynamic user experience.

---

### Q What is `async` and `await`?
A:  
- `async` and `await` are JavaScript features that simplify working with `asynchronous code` and `asynchronous operations`, such as making network requests, reading files, or waiting for timeouts.

`async` Function -  
- The async keyword is used to `define an asynchronous function`.  
- When a `function is declared as async, it always returns a promise`, which resolve to a value or reject with an error.  
- Inside async function, we can use the await keyword to `pause the function's execution until a promise is resolved`.  
- This allows us to `write asynchronous code in a more synchronous style`.

```
async function fetchData() {
  // This function is asynchronous and returns a promise.
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return data;
}
```

`await` Operator -  
- The `await keyword is used inside an async function to pause the execution of the function until a promise is resolved`.  
- It can only be used within an async function.  
- When an await statement is encountered, the function will pause at that point until the awaited promise is settled (resolved or rejected).

`Error Handling` -  
- We can use try...catch blocks to handle errors when working with async and await.  
- If an awaited promise is rejected, it will throw an exception that can be caught in a catch block.

```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

`Concise and Readable Code` - `async` and `await` make asynchronous code more concise and readable, as it resembles synchronous code flow. This can improve code maintainability and reduce callback hell or "Pyramid of Doom."

`async` and `await` are widely used in JavaScript for handling asynchronous operations, such as `fetching data from APIs`, `reading files`, `making database queries`, and performing other tasks that involve waiting for results. They provide a more structured and clean way to work with asynchronous code compared to using callbacks or promises directly.

---

### Q What is the use of `const json = await data.json();` in `getRestaurants()`?
A:  
- The line `const json = await data.json();` is used to `convert the response data from a JSON API into a JavaScript object`.

`data` represents the `response object` from a network request, obtained using a library like `fetch or axios`. This response object `contains data in a raw format`.

`.json()` is a method available on the response object that is used to `extract and parse JSON data` from the response body. It returns a promise that resolves to the parsed JavaScript object.

`await` is used within an async function to pause the execution of the function until the promise returned by data.json() is resolved. This ensures that the function won't proceed until the JSON data is ready to be used.

`const json = ...` declares a constant variable json to hold the parsed JSON data.

So, this line of code waits for the `JSON data to be parsed from the response object` and `assigns it to the json variable`, which we can then work with as a JavaScript object. Here's an example:

```
async function getRestaurants() {
  try {
    const response = await fetch('https://api.example.com/restaurants');
    const data = await response.json(); // Parse the JSON response
    console.log(data); // You can now use the JSON data as a JavaScript object
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
  }
}

getRestaurants();
```

In this example, the data variable contains the parsed JSON data from the API response, and we can access and manipulate this data as needed within the getRestaurants() function.

---