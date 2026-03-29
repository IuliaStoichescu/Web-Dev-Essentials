function Property({ name, rating, price }) {
   return (
      <div>
         <h2>{name}</h2>
         <h3>{price}$ a night</h3>
         <h3>⭐ {rating}</h3>
      </div>
   );
}

export default Property;