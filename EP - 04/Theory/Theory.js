// Props are a way to dynamically pass data from one component to another. 
// We pass props so that the same card when called with different props will show different data on the UI

<div className="res-container">
            {
                resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))
            }
</div>


/*
- resList is a hardcoded array of objects (to give the feel of JSON data which comes from the API. ) 
- RestaurantCard is a separate component which will receive the props and display the data.
- We are mapping over the array to iterate over each object and then pass that data to the child component. 
- We are passing each object in the array to the child component via the "resData" variable. 
- All the props that we send ("key" , "resData") will be wrapped inside an object and sent to the child component. 
*/



const RestaurantCard = (props) => {
    console.log(props);
    const {resData} = props;
}

/*
- Each time we map over the array of objects and pass the data to the child component using "resData" , "props" object will be populated . 
- We can then destructure the "resData" from the "props" object to access the object contents.
- Therefore, when we console, we will get as many objects as many objects in the array.  
*/

