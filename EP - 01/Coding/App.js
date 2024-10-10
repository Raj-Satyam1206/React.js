/* 
<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>
*/



//React.createElement creates a React element which is a JS Object
const heading = React.createElement(
    "div", //Which element is to be created?
    {id : "parent"}, //Setting attributes to the element created
    React.createElement("div", {id : "child"}, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")   //Siblings in an array
    ])
);//what to display?

// console.log(heading);

//Rendering react
const root = ReactDOM.createRoot(document.getElementById("root"));


// console.log(root);


/*
render() => renders a JS object(heading) and 
creates the element which the browser understands and puts it up in the DOM.
*/
root.render(heading);