export default function Die({ numSides = 6 }) {
   // default value is 6
   const roll = Math.floor(Math.random() * numSides) + 1;
   return <h1 className="Die">{numSides} sided die roll: {roll}</h1>;
}