class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }
  
    // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }
  
    render() {
      // Making the style conditional on our `state` lets us
      // update it based on user interactions.
      var style = {
        fontWeight: this.state.done ? 'bold' : 'normal'
      };
  
      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      return (
        <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
      );
    }
}


var App = () => (
    <div>
        <ul>
            <li>milk</li>
            <li>milk</li>
            <GroceryList groceries ={['boba','rice','cherios']}/>
        </ul>

    </div>
);

var GroceryList = (props) => (
    <ul>
        {props.groceries.map(grocery =>
            <GroceryListItem key={grocery} grocery={grocery}/>
        )}
    </ul>
);

ReactDOM.render(<App/>, document.getElementById("app"));
