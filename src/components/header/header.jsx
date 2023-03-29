import React from 'react'
import { AppBar, Box, Toolbar, Typography, TextField } from '@mui/material';

const Header = () => (
  <Box>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Support Desk
        </Typography>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: 'white' }}
          />
      </Toolbar>
    </AppBar>
  </Box>
)

export default Header
