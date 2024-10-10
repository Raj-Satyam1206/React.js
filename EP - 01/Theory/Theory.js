const heading = React.createElement(
    "h1",{ id:"heading"},"Hello World"
);


console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


/* 
Q. What will be printed on line 6?

A. Object

-  React.createElement() creates React element which is a JS object.
-  So , 'heading' will be JS Object of type "h1". 
-  The attributes and the message(children) are sent as props to the object 'heading'. 

- While using the render() method, this object converts into the "h1" element which browser understands.
*/


<h1>Hello above root</h1>
<div id="root">
    <h1>Satyam is here!</h1>
</div>
<h1>Hello below root</h1>


/*
    The content of "root" will be replaced with whatever is rendered inside root in APP.js . It is not appended but replaced.

    The h1 statements above and below 'div' statements will work as it is.
*/

//We are able to work on react in our current code because of the CDN Links injected. Later we will se that the CDN links can be taken away and "react" & "react-dom" packages will be directly installed from npm and the code for these will be stored in the node_modules. 