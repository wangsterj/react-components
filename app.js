// TODO
var GroceryList = (groceries) => (
    <ul>
        <li>{groceries.items[0]}</li>
        <li>{groceries.items[1]}</li>
        <li>{groceries.items[2]}</li>
    </ul>
);

var GroceryListItem = () => (
    <div>
        <h2>Grocery List</h2>
        <GroceryList items={['Coffee', 'Tea', 'Milk']}/>
    </div>
);

// var Coffee = () => (
//     <li>Coffee</li>
// );

// var Tea = () => (
//     <li>Tea</li>
// );

// var Milk = () => (
//     <li>Milk</li>
// );

ReactDOM.render(<GroceryListItem />, document.getElementById("app"));