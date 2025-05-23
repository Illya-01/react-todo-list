import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export default function TodoItem({ todo, deleteTodo, toggleTodo }) {
   const labelId = `checkbox-list-label-${todo.id}`

   return (
      <ListItem
         secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={deleteTodo}>
               <DeleteIcon />
            </IconButton>
         }
         disablePadding>
         <ListItemButton role={undefined} onClick={toggleTodo} dense>
            <ListItemIcon>
               <Checkbox
                  name="todo"
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
               />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
         </ListItemButton>
      </ListItem>
   )
}
