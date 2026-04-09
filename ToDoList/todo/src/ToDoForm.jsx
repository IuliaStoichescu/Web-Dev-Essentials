import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Create from "@mui/icons-material/Create";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export default function ToDoForm({ adding }) {
   const [text, setText] = useState("");
   const handleChange = (evt) => {
      setText(evt.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      adding(text);
      setText("");
   }
   return (
      <ListItem sx={{ color: '#751d46' }}>
         <form onSubmit={handleSubmit}>
            <TextField sx={{ marginLeft: '100px', marginTop: '1vh' }}
               id="standard-basic" label="Add To Do" variant="standard" onChange={handleChange} value={text}
               InputProps={{
                  endAdornment: <InputAdornment position="end" >
                     <IconButton type='submit' sx={{ color: '#751d46' }}
                        aria-label='create toDo'>
                        <Create />
                     </IconButton>
                  </InputAdornment>
               }}
            />
         </form>
      </ListItem>
   )
}