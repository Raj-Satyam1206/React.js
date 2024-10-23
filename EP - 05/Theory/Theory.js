/*  1.
import Header from "./src/component/Header";
import Header from "./src/component/Header.js";
import Header from "./src/component/Header.jsx";

    All 3 of them are same
*/

/*  2. 
const [listOfRestaurants , setListOfRestaurants] = useState(restaurantList);
- 'useState' hook returns an array which consists of 2 parameters::
    - state variable
    - Update function 
    
- This update function acts as a trigger which ::
    - Changes the value of the variable and
    - Calls the Component(re-renders the component) and starts the reconciliation cycle
    
    
Actually the update function does not update the variable with a new value but rather creates a new instance of that variable. Hence after every re-rendering, there is a new state variable with the updated value.       
*/



/*  3.
ARRAY DESTRUCTURING::
const arr = useState(restaurantList);
    can also be written as -
const [listOfRestaurants , setListOfRestaurants] = arr;
*/




/*  4.
<input type="search" placeholder="Search for a restaurant..." value={searchText} />

- With the above statement , we will not be able to type anything in input statement as the value attribute is linked to a state variable and a state variable can only be changed with the update function of "useState". 
- Therefore we will need a onChange event handler:

onChange((e) => {
    setSearchText(e.target.value);
})

- This input statement is linked to the searchText state variable
- We need value attribute in input statement as the "search" button needs a value to search for
- As the value will keep changing, we link the value attribute to a state variable
- When the value changes, React re-renders the entire application
*/





/*  5.
Why React is Fast?
- React effectively manages the DOM manipulation
- The data layer is synced with the UI layer
- Uses Reconciliation algorithm and React fiber
- Uses diffing algorithm


Concept of Reconciliation::
- Reconciliation is the process by which React updates the Real DOM so that it is in sync with the current state of the application.



Concept of virtual DOM:: 
- Everytime we make changes to the application, a new VDOM tree is created and is compared with the previous VDOM tree by the diffing algorithm and the changes/updates are made only in that part where the VDOM trees are different.




What is Virtual DOM?
- Virtual Dom is the virtual representation of the Real DOM.
- It is the OBJECT representation of the HTML tags in the real DOM.



Concept of Diffing Algorithm::
- Diffing algorithm finds out the difference between the two objects(Virtual DOM) and then updates the Real DOM.

*/