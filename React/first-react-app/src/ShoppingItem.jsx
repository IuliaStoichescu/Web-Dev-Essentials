function ShoppingItem({ item, quantity, completed }) {
   return <li style=
      {{
         color: completed ? "black" : "grey",
         textDecoration: completed ? "line-through" : null
      }}>
      {item} - {quantity}
   </li>
}

export default ShoppingItem;

