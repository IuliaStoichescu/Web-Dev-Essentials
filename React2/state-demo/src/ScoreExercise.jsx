import { useState } from "react"

export default function ScoreExercise({ numPlayers, target }) {
   const playerArray = new Array(numPlayers).fill(0);
   const [players, setNumPlayers] = useState(playerArray);
   function incScore(i) {
      setNumPlayers(
         players.map(
            (p, ind) => {
               if (ind === i) {
                  return p + 1;
               }
               else return p;
            }
         ))
   }
   function resetScore() {
      setNumPlayers(
         players.map((p) => {
            return 0;
         })
      )
   }
   return (
      <div>
         <h1>Score Exercise!!</h1>
         <p>NumPlayers: {numPlayers} - target score: {target}</p>
         <ul>
            {players.map((p, i) => {
               return <li key={i}>Player {i + 1} : {p}
                  <button onClick={() => incScore(i)}>
                     +
                  </button>
                  {p >= target ? <span>Congrats!!</span> : null}
               </li>
            })}
         </ul>
         <button onClick={resetScore}>Reset</button>
      </div>
   )
}

//array.fill