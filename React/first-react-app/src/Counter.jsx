import { useState } from "react";

export default function Counter() {
   let num = 0;
   const incrementNum = () => (num += 1);
   const [count, setCount] = useState(0);
   //returns an array
   //state - the piece of state itself || setState = the function to change the piece of state 
   // const [state,setState] = useState(initialState);
   const changeNum = () => {
      setCount(count + 1);
   }

   return (
      <div>
         <p>The count is: {count}</p>
         <button onClick={changeNum}>Increment</button>
      </div>
   )
}