import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Header } from './components/header'
import { People } from './components/people'
import { fetchPeople } from './api'

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople().then(data => setPeople(data))
  }, [])

  return (
    <Box>
      <Header />
      <People people={people} />
    </Box>
  )
}

export default App
