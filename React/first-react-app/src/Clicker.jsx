function handleClick() {
   console.log("Cliked the button");
}

function handleMouseOver() {
   console.log("Moused over!!");
}

function Clicker() {
   return (
      <div>
         <p>Clicke mee</p>
         <button onClick={handleClick}>On Click</button>
         <button onMouseOver={handleMouseOver}>On Mouse Over</button>
      </div>
   )
}

export default Clicker;