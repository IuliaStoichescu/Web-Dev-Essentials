import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
   const [emojis, setEmoji] = useState([{ id: uuid(), emoji: "😋" }])
   function addEmoji() {
      // setEmoji([...emoji, "😛"]);
      setEmoji((oldEmoji) => [...oldEmoji, { id: uuid(), emoji: "😛" }]);
   }
   function deleteEmoji(id) {
      setEmoji(prevEmoji => {
         return prevEmoji.filter(e => e.id !== id)
      });
   }
   //
   function makeHearts() {
      setEmoji(prevEmoji => {
         return prevEmoji.map((e) => ({
            ...e,
            emoji: "❤️"
         }))
      })
   }
   return (
      <div>
         {emojis.map((e) => (
            <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
         ))}
         <button onClick={addEmoji}>Add emoji</button>
         <button onClick={makeHearts}>Make hearts</button>
      </div>
   )
}