# Chapter 05

### Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A:  
- In JavaScript, when working with modules (ES6 modules), we can export values, functions, or objects from one module and import them into another.  
- There are three common ways to export from a module: `named exports`, `default exports`, and `wildcard or namespace exports`.

1 `Named Exports` 
- Allows us to export `multiple values, functions, or objects` from a module by giving them names.
- We can export several items from a module using the export keyword followed by the export statement with a name.

**For example:**
```
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

To import these named exports in another module, we can specify the name `using curly braces` in the import statement:
```
import { add, subtract } from './mathUtils';
```

2 `Default Exports`
- Allow us to export a `single value, function, or object` as the default export of a module.
- We can use the export default syntax to specify the default export.

For example:
```
// main.js
const greeting = "Hello, world!";
export default greeting;
```
To import the default export, you can use any name you like, and it does not require curly braces:
```
import myGreeting from './main';
```

3 `Wildcard or Namespace Exports (* as)`
- Wildcard or namespace exports allow you to export all named exports from a module `under a single namespace or object`.
- To create a wildcard export, you use the export * syntax.

For example:
```
// utilities.js
export const funcA = () => { /* ... */ };
export const funcB = () => { /* ... */ };
```
To import all named exports using the wildcard or namespace syntax:
```
import * as utils from './utilities';
// You can then access them using utils.funcA, utils.funcB, etc.
```
`named exports` allow you to export multiple items with specific names, `default exports` let you export a single item, and `wildcard or namespace exports` enable you to bundle all named exports under a single object when importing. 

---

### Q: What is the importance of `config.js` file?
A:  
- `Config.js` files are `text files` that hold essential `program information`.  
- They are structured for user configuration.  
- Many programs, such as office suites and web browsers, rely on menu-driven configurations.  
- These files `follow a simple structure, using key-value pairs` for settings. For instance, if an application only needs to store a user's preferred name, the config file might look like this:

However, most applications require multiple settings, so config files often contain key-value pairs for various options:
```
NAME='Divya'
SURNAME='Reddy'
```
---

### Q: What are React Hooks?
A:  
- `React Hooks` is a feature introduced in React 16.8  
- It allows `functional components to manage state and side effects` without the need for class components.  
- They provide a more concise and easier-to-understand way to work with component state and lifecycle methods.


1 `useState` -  
- This hook allows us to `add a state to our functional components`.  
- We can use it to declare and manage component-specific state variables.
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

2 `useEffect` -  
- This hook enables us to `perform side effects in our components, such as data fetching, subscriptions, or manually changing the DOM`.  
- It's the functional equivalent of the componentDidMount, componentDidUpdate, and `componentWillUnmount` lifecycle methods in class components.
```
import React, { useEffect, useState } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data and update the state
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

3 `useContext` -  
- This hook allows us to `access the context` in our component tree.  
- It's used to `consume context values` provided by a `Context.Provider`.
```
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const value = useContext(MyContext);

  return <div>Context Value: {value}</div>;
}
```

4 `useRef` -  
- It is a React Hook that provides a way to create and access mutable references to a DOM element or a value that persists across renders in a functional component.  
- Useful for `accessing and interacting with DOM elements` directly or for storing values that you don't want to trigger a re-render when they change.

`Accessing DOM elements` - We can use useRef to get a reference to a DOM element and then manipulate it directly. For example, we can focus on an input field or measure the size of an element.

```
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

---

### Q: Why do we use `useState` Hook?
A:  
- The `useState` Hook is an essential part of React because it `allows functional components to manage and update their local state`.  
- State management is a fundamental concept in React, as it `enables components to store and update data` that affects their behavior and appearance. 

Here are some key reasons why the useState Hook is used:

`Local Component State` - useState `allows functional components to maintain their own local state`. This state is isolated to the component and doesn't affect the state of other components.

`Reactive Updates` - When we use useState, React `automatically handles re-rendering the component when the state changes`. This means that when we call setState (the function returned by useState), React efficiently updates the component's user interface to reflect the new state.

`Functional Components` - Before the introduction of Hooks in React, state management was primarily achieved in class components using the `this.state` and `this.setState` mechanisms. With Hooks, functional components can now have their own state, making them more powerful and easier to work with.

`Declarative Programming` - Using useState promotes a declarative style of programming. Instead of directly manipulating the DOM or managing state changes imperatively, we declare how our UI should look based on the current state. React takes care of updating the DOM to match the desired state.

```
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0.
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the 'count' state by calling 'setCount'.
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, useState is used to create and manage the 'count' state variable. When the button is clicked, it triggers a state update, and React re-renders the component to reflect the new state. This is the core mechanism for creating interactive and dynamic user interfaces in React.

---