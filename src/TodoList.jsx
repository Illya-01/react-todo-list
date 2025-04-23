import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { useEffect, useState } from 'react'

const getInitTodos = () => {
   const localStorageTodos = JSON.parse(localStorage.getItem('todos'))
   if (!localStorageTodos) return []
   return localStorageTodos
}

export default function TodoList() {
   const [todos, setTodos] = useState(getInitTodos)
   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

   const deleteTodo = id => {
      setTodos(prevTodos => {
         return prevTodos.filter(todo => todo.id !== id)
      })
   }
   const toggleTodo = id => {
      setTodos(prevTodos => {
         return prevTodos.map(todo => {
            if (todo.id === id) {
               return { ...todo, completed: !todo.completed }
            } else {
               return todo
            }
         })
      })
   }
   const addTodo = text => {
      setTodos(prevTodos => {
         return [
            ...prevTodos,
            { id: crypto.randomUUID(), text: text, completed: false },
         ]
      })
   }

   return (
      <Box
         component="section"
         sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            mt: 2,
         }}>
         <Typography component="h1" variant="h3">
            Todo list
         </Typography>

         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
               <TodoItem
                  todo={todo}
                  key={todo.id}
                  deleteTodo={() => deleteTodo(todo.id)}
                  toggleTodo={() => toggleTodo(todo.id)}
               />
            ))}
         </List>
         <TodoForm addTodo={addTodo} />
      </Box>
   )
}
