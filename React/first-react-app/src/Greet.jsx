// export default function Greet(props){
//    return <h1>Well hello there, {props.person}!</h1>
// }

export default function Greet({ person = "Everyone", from = "Anynomous" }) {
   return (
      <div>
         <h1>Well hello there, {person}!</h1>
         <h2>- From {from}</h2>
      </div>
   );
}