import './App.css';
import Greet from "./Greet";
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import BoxGrid from './BoxGrid';

const shoppingList = [
  { id: 1, item: "Espresso Beans", quantity: 2, completed: true },
  { id: 2, item: "Oat Milk", quantity: 1, completed: false },
  { id: 3, item: "Avocados", quantity: 4, completed: false },
  { id: 4, item: "Dark Chocolate", quantity: 1, completed: true },
  { id: 5, item: "Paper Towels", quantity: 12, completed: false }
];

const properties = [
  { id: "p101", name: "Beachfront Villa", rating: 4.8, price: 250 },
  { id: "p102", name: "Mountain Cabin", rating: 4.5, price: 120 },
  { id: "p103", name: "Urban Loft", rating: 4.9, price: 180 },
  { id: "p104", name: "Countryside Farmhouse", rating: 4.2, price: 95 },
  { id: "p105", name: "City Center Studio", rating: 3.9, price: 85 }
];

function App() {

  return (
    <>
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <ListPicker values={{ a: 1, b: 2 }} /> */}
      {/* <Greet person="Iuli" from="Admin" />
      <Die numSides={20} />
      <Greet />
      <Die />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "pink", "purple", "teal"]} /> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍌" />
      <Slots val1="🍌" val2="🍌" val3="🍌" /> */}
      {/* <ShoppingList items={shoppingList} />
      <Clicker />
      <Form />
      <Counter />
      <Toggler /> */}
      {/* <div>
        <PropertyList properties={properties} />
      </div> */}
      {/* <Box /> */}
      <BoxGrid />
    </>
  )
}

export default App
