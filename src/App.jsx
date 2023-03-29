import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Header } from './components/header'
import { People } from './components/people'
import { fetchPeople } from './api'

const App = () => {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople()
      .then(data => {
        setData(data)
        setPeople(data)
      })
  }, [])

  const search = (text) => {
    if (!text) {
      setPeople(data)
      return
    }
    
    let result = []
    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        const value = item[key]
        if (
          (typeof value === 'string' || value instanceof String) &&
          value.toLowerCase().includes(text)
        ) {
          result.push(item)
          return
        }
      })
    })
    setPeople(result)
  }

  return (
    <Box>
      <Header onSearch={search} />
      <People people={people} />
    </Box>
  )
}

export default App
