import { useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);
   //different: useState(func()) with useState(func), 
   //one reruns each time

   const changeNum = () => {
      setCount(c => c + 1);
   }

   return (
      <div>
         <p>The count is: {count}</p>
         <button onClick={changeNum}>+</button>
      </div>
   )
}