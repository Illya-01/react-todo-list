import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import CreateIcon from '@mui/icons-material/Create'
import { useState } from 'react'

export default function TodoForm({ addTodo }) {
   const [text, setText] = useState('')
   const handleChange = evt => {
      setText(evt.target.value)
   }
   const handleSubmit = evt => {
      evt.preventDefault()
      addTodo(text)
      setText('')
   }

   return (
      <FormControl
         component="form"
         sx={{ m: 1, width: '40ch' }}
         variant="filled"
         onSubmit={handleSubmit}>
         <InputLabel htmlFor="add-todo">Add todo</InputLabel>
         <FilledInput
            id="add-todo"
            type="text"
            onChange={handleChange}
            value={text}
            endAdornment={
               <InputAdornment position="end">
                  <IconButton aria-label="add todo" edge="end" type="submit">
                     <CreateIcon />
                  </IconButton>
               </InputAdornment>
            }
         />
      </FormControl>
   )
}
