import './Box.css'
import { useState } from "react";

function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

export default function Box() {
   const myColor = getRandomColor();
   console.log(myColor);
   const [randColor, setRandColor] = useState(myColor);
   const setColor = () => {
      setRandColor(getRandomColor());
   }
   return (
      <div className="Box" style={{ backgroundColor: randColor }} onClick={setColor}>
      </div>
   )
}