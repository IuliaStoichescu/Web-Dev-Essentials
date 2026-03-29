import Property from "./Property";

function PropertyList({ properties }) {
   const styles = {
      display: 'flex', flexDirection: 'row', gap: '30px', justifyContent: 'center', marginTop: '300px'
   };
   return (
      <div style={styles}>
         {properties.map(p =>
            <Property key={p.id} {...p} />
         )}
      </div>
   );
}

export default PropertyList;