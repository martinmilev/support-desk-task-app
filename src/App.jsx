import { AppBar, Box, Toolbar, Typography, TextField } from '@mui/material';

const App = () => (
  <Box>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Support Desk
        </Typography>
        <TextField id="search" label="Search" />
      </Toolbar>
    </AppBar>
  </Box>
)

export default App
