import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ items }) {
   return (
      <ul>
         {items.map(i =>
            // <ShoppingItem key={i.id} item={i.item} quantity={i.quantity} completed={i.completed} />
            // or
            <ShoppingItem key={i.id} {...i} />
         )}
      </ul>
   )
}