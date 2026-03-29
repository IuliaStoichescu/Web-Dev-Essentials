import Box from './Box';
import './BoxGrid.css'
export default function BoxGrid() {
   const boxes = [];
   for (let i = 0; i < 25; i++) {
      boxes.push(<Box />);
   }
   return (
      <div className='BoxGrid'>
         {boxes}
      </div>
   )
}