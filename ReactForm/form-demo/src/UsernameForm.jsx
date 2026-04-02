import { useState } from "react"

export default function UsernameForm() {
   const [username, setUsername] = useState("");
   function updateUsername(evt) {
      //evt.target.value
      setUsername(evt.target.value);
   }
   return (
      <div>
         <label htmlFor="username">Enter username</label>
         <input type="text" id="username" placeholder="username" value={username} onChange={updateUsername} />
         <button>Submit</button>
      </div>
   )
} 