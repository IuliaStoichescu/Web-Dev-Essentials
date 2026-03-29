export default function ListPicker({ values }) {
   const randIndex = Math.floor(Math.random() * values.length);
   const randElement = values[randIndex];
   return (
      <div>
         <p>List of values: {values}</p>
         <h2>Random picked value: {randElement}</h2>
      </div>
   )
}