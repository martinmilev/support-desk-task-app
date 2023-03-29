import { Box } from '@mui/material'
import { Header } from './components/header'
import { People } from './components/people'
import data from './assets/api.json'

const App = () => (
  <Box>
    <Header />
    <People people={data} />
  </Box>
)

export default App
