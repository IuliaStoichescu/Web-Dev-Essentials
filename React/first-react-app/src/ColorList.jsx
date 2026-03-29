export default function ColorList({ colors }) {
   const lis = colors.map(color => <li>{color}</li>)
   return (
      <div>
         <p>Color List</p>
         <p>{lis}</p>
         {/* or */}
         <ul>
            {colors.map((color) => (
               <li>{color}</li>
            ))}
         </ul>
      </div>
   )
}