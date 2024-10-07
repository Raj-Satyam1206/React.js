
## Chapter - 01

## Q: What is `Emmet`?
A:  
    &emsp;&emsp;&emsp;`Emmet` is a powerful toolkit for web developers.  
    &emsp;&emsp;&emsp;It allows developers to `type shorcuts` which gets expanded into fully-fledged `boilerplate code` for writing HTML and CSS.

### **i) HTML Expansion**: Emmet allows us to quickly generate HTML code by using abbreviations.
For instance, `div>ul>li.item$*3`
```
<div>
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
    </ul>
</div>
```
### **ii) CSS Abbreviations**: Emmet also supports expanding CSS abbreviations
For instance, `m10`
```
margin: 10px;
```
### iii) Nested Elements: We can use > to nest elements within each other. 
For instance, `ul>li*4` would generate an unordered list with three list items.
```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

### iv) Numbering: Use $ to indicate a number that should be incremented in each subsequent item. 
For instance, `ul>li.item$*3` would create list items with classes item1, item2, and item3.
```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>
```


<br>
<br>


## Q: Difference between `Library and Framework`?
A:  
&emsp;&emsp;&emsp;`Library` is a collection of `pre-written code` that provides specific functionalities or features.  
&emsp;&emsp;&emsp;It is designed to be `reused across different projects` for faster development time and fewer errors.  
&emsp;&emsp;&emsp;It can even be used for a single web page i.e. Required library functions are used for that single web page



- **Control**: &nbsp;When using a library, the developer has control over the structure and flow of the application. The developer decides when and how to use the library's components and functions.
- **Usage**: &nbsp;Used to solve specific tasks or provide utilities. They are often "called" by the developer's code to perform specific actions or computations.
- **Inversion of Control**: &nbsp;The developer controls the flow of the application and calls the library functions when needed in the project.

For instance, `React.js` is a JavaScript library developed by Facebook.
React is primarily concerned with rendering UI components and managing their state and updates. It can be integrated into different project setups and combined with other libraries to create complete applications.

<br>
<br>
<br>

&emsp;&emsp;&emsp;`Framework` is a pre-designed architecture that provides a basic foundation or structure for building an entire application/website.  
&emsp;&emsp;&emsp;It controls the structure, flow, and design patterns of the application.

- **Control**:  &nbsp;When using a framework, the developer gives up some control over the application's structure and flow. The framework enforces certain rules that the developer must follow.
- **Usage**:  &nbsp;Frameworks are used to build entire applications. They provide a foundation and a set of tools to handle various aspects of application development, such as routing, database interactions, user authentication, etc.
- **Inversion of Control**:  &nbsp;In a framework, control is often inverted, meaning the framework controls the application's flow. Developers extend or customize the framework's components to build the application's logic.

For instance, Angular is a front-end framework developed by Google.
Angular is used for building dynamic and feature-rich web applications.

<br>
<br>
<br>


## Q: What is `CDN`? Why do we `use` it?
A:  
- &nbsp;`CDN` stands for Content Delivery Network.  
- &nbsp;It is a `network of distributed servers` located in various data centers around the world.  
- &nbsp;The primary purpose of a CDN is to deliver web content, such as images, videos, scripts, stylesheets, and other static or dynamic resources, to users more efficiently and with higher performance.  
- &nbsp;A CDN solves this problem by `replicating the website's content on multiple servers` spread across various geographic locations.When a user requests a specific piece of content, the CDN automatically routes the request to the nearest server in its network.  
- &nbsp;This way, the content is delivered from a server closer to the user, reducing latency and ensuring faster loading times.

### Key benefits of using a CDN include:
- **Improved website performance:** Faster load times and reduced latency leads to a better user experience, lower bounce rates, and higher engagement.
- **Scalability:** CDNs can handle large amounts of traffic and distribute it across their network, reducing the load on the origin server.

<br>
<br>
<br>

## Q: Why is `React known as React`?
A:  
 &emsp;`React` is known as "React" because of its core principle, which is to efficiently `react to changes in state and data` and efficiently update the user interface (UI) accordingly. The name "React" reflects the core concept of how the library operates.

<br>
<br>
<br>

## Q: What is `crossorigin in script tag`?
A:  
The `crossorigin` attribute enables the `Cross-Origin Resource Sharing(CORS)` for loading external JavaScript files from a different origin that the hosting web page.  
When a web page includes resources from different domains, it can introduce security and privacy concerns. Modern web browsers implement the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is designed to prevent malicious websites from accessing sensitive data from other domains without permission.

<br>
<br>
<br>

## Q What is difference between `React and ReactDOM`?
A:  
`React` is the core library of the React ecosystem.  
It is a JavaScript library for :  
- &emsp;building user interfaces,  
- &emsp;focusing on creating reusable UI components and   
- &emsp;efficiently managing their state.

 React provides the tools and infrastructure to define components, handle their lifecycle, and manage state changes.

<br>
<br>
<br>
  
`ReactDOM` is a package that provides the integration between React and the DOM (Document Object Model).  
It is designed for web applications, as it handles rendering React components to the HTML DOM.  
When you want to display React components in the browser, you need ReactDOM to take care of the rendering process.  
It provides methods like **`ReactDOM.render()`** to attach a React component to a specific HTML element in the DOM.

<br>
<br>
<br>


## Q What is difference between `react.development.js` and `react.production.js` files via CDN?
A:  
`react.development.js`
- This file is intended for development purposes. It contains the `full version of the React library`, including helpful warning messages and development-specific features.
- It is `larger in size` compared to the production version since it includes additional information and code to help developers in identifying potential issues during development and debugging.
- When using **`react.development.js`**, developers get `more error messages and warnings` in the browser's console, making it easier to identify and address problems in the code.



  `react.production.js`
- This file is intended for production deployment. It contains the `optimized version of the React library`, does not have any development-specific code, warnings, and console logs.
- It is `smaller in size` compared to the development version
- Using **`react.production.js`** results in `faster loading times and improved performance` for end-users, as the minimized code is more efficient and consumes fewer resources.

When deploying a React application to a production environment, it is best practice to use **`react.production.js`** (along with the corresponding **`react-dom.production.js`** file) from the CDN. This ensures that the application is delivered to users with a smaller and more optimized bundle, reducing the load time and improving overall performance.

During development, developers may prefer to use **`react.development.js`** (and **`react-dom.development.js`**) to take advantage of the helpful error messages and development tools that assist in identifying and resolving issues during the development and testing phase. However, it's essential to switch to the production version before deploying the application to a live environment to achieve better performance and user experience.