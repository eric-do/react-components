var GroceryList = (props) => (
  <ul>
    {
      props.items.map(item => (
        <GroceryListItem key={item.toString()} name={item} />
      ))
    }
  </ul>
);

// var GroceryListItem = (props) => (
//   <li>{props.name}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  onListItemEnter() {
    console.log('Mouse has entered');
    this.setState({
      hover: true
    });
  }

  onListItemLeave() {
    console.log('Mouse has left');
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      textDecoration: this.state.hover === true ? 'underline' : 'none'
    }
    return (
      <li style={style} 
          onMouseEnter={this.onListItemEnter.bind(this)} 
          onMouseLeave={this.onListItemLeave.bind(this)}>
          {this.props.name}
      </li>
    );
  }
}

ReactDOM.render(<GroceryList items={['Bananas', 'Apples']} />, document.getElementById("app"));

