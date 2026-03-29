// export default function DoubleDice() {
//    const num1 = Math.floor(Math.random() * 3) + 1;
//    const num2 = Math.floor(Math.random() * 3) + 1;
//    const result = num1 === num2 ? "You Win!!" : "You Lose! :(";
//    return (
//       <div>
//          <p>{result}</p>
//          <p>Num1: {num1}</p>
//          <p>Num2: {num2}</p>
//       </div>
//    )
// }

// export default function DoubleDice() {
//    const num1 = Math.floor(Math.random() * 3) + 1;
//    const num2 = Math.floor(Math.random() * 3) + 1;
//    return (
//       <div>
//          <p>{num1 === num2 ? "You Win!!" : "You Lose! :("}</p>
//          <p>Num1: {num1}</p>
//          <p>Num2: {num2}</p>
//       </div>
//{num1 === num2 ? <h3>You Win!!</h3> : null} 
//    )
// }

export default function DoubleDice() {
   const num1 = Math.floor(Math.random() * 3) + 1;
   const num2 = Math.floor(Math.random() * 3) + 1;
   const isWinner = num1 === num2;
   const styles = { color: isWinner ? "green" : "red" }
   return (
      <div style={styles}>
         <h2 style={styles}>Double Dice</h2>
         {isWinner && <h3>You win!!</h3>}
         <p>Num1: {num1}</p>
         <p>Num2: {num2}</p>
      </div>
   )
}