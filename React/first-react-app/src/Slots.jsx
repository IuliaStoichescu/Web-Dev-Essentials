export default function Slots({ val1, val2, val3 }) {
   const isWin = val1 === val2 && val2 === val3;
   const styles = { color: isWin ? "green" : "red" }
   return (
      <div>
         <h1>{val1} {val2} {val3}</h1>
         <h2 style={styles}>
            {isWin ? <h3>You win!!</h3> : <h3>You lose!!</h3>}
         </h2>
         {isWin ? <p>Congrats!</p> : null}
      </div>
   )
}