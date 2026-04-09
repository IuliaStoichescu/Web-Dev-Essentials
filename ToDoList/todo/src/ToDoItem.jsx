import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/DeleteIcon.css';
export default function ToDoItem({ todo, removeTodo, toggleTodo }) {
   const labelId = `checkbox-list-label-${todo.id}`;

   return (

      <ListItem sx={{ marginTop: '1vh', border: '1px solid pink', borderRadius: '10px', padding: '10px' }}
         key={todo.id}
         secondaryAction={
            <DeleteIcon edge="end" aria-label="comments" onClick={removeTodo} className="DeleteIcon">
               <CommentIcon />
            </DeleteIcon>
         }
         disablePadding
      >
         <ListItemButton role={undefined} dense>
            <ListItemIcon>
               <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={toggleTodo}
                  sx={{ color: '#751d46', '&.Mui-checked': { color: '#751d46' } }}
               />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} sx={{ fontSize: '40px' }} />
         </ListItemButton>
      </ListItem>
   );
}
