// TO Do

function App() {
  return (
  <div>
      <GroceryList groceryItems={['meat', 'cheese', 'an item']} />
  </div>
  )
};
function GroceryList(props) {
  const listItems = props.groceryItems.map((item) => (
    <GroceryItem item={item} />
  ));
  return (
    <ul> Groceries:
     {listItems}
    </ul>
  )
};
function GroceryItem(props) {
  const [isBold, setIsBold] = React.useState(false);
  const style = isBold ? {fontWeight: 'bold'} : {fontWeight: 'normal'};
  return (
    <li
      style={style}
      onMouseEnter={() => setIsBold(true)}
      onMouseLeave={() => setIsBold(false)}
      >
        {props.item}
      </li>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));