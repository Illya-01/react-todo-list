import './App.css'
import CssBaseLine from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
   return (
      <>
         <CssBaseLine />
         <Navbar />
         <Box component="main">
            <TodoList />
         </Box>
      </>
   )
}

export default App
