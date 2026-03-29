import { useState } from "react";
import './Toggler.css';
export default function Toggler() {
   const [toggle, setToggle] = useState(true);
   const changeFace = () => {
      setToggle(!toggle);
   }
   return (
      <div>
         <p>Change my face!</p>
         <button onClick={changeFace}>Click me</button>
         <p className="Toggler">{toggle ? '😺' : '😔'}</p>
      </div>
   )
}