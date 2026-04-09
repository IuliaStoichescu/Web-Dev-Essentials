import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { v4 as uuid } from 'uuid';
// const initialToDo = [
//    {
//       id: 1, text: "Feed the cats", completed: false
//    },
//    {
//       id: 2, text: "Do the laboratory task", completed: true
//    },
//    {
//       id: 3, text: "Make dinner", completed: false
//    }
// ]

const getInitialData = () => {
   const data = JSON.parse(localStorage.getItem("todo"));
   if (!data) {
      return [];
   }
   else return data;
}

export default function ToDoList() {
   const [todo, setTodo] = useState(getInitialData);

   useEffect(() => {
      localStorage.setItem(
         "todo", JSON.stringify(todo)
      )
   }, [todo])

   const removeTodo = (id) => {
      setTodo(initTodo => {
         return initTodo.filter(i => i.id !== id)
      })
   }

   const toggleTodo = (id) => {
      setTodo(prevTodo => {
         return prevTodo.map(p => {
            if (p.id === id) {
               return { ...p, completed: !p.completed }
            }
            else {
               return p;
            }
         })
      })
   }

   const addTodo = (text) => {
      setTodo(prevTodo => {
         return [...prevTodo, { text: text, id: uuid(), completed: false }]
      })
   }
   return (

      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', margin: 'auto', color: '#751d46' }}>
         {todo.map((value) => {
            return <ToDoItem
               todo={value}
               key={value.id}
               removeTodo={() => removeTodo(value.id)}
               toggleTodo={() => toggleTodo(value.id)}
            />
         })}
         <ToDoForm adding={addTodo} />
      </List>
   )
}


