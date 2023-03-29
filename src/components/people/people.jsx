

import React, { memo } from 'react'
import { Container, Grid } from '@mui/material'
import { Person } from '../person'

const People = ({ people }) => (
  <Container fixed sx={{ pt: 10 }}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12, lg: 20 }}
    >
      {
        people.map((person, i) => (
          <Grid item xs={2} sm={4} md={4} key={person.email}>
            <Person person={person} />
          </Grid>
        ))
      }
    </Grid>
  </Container>
)

export default memo(People)
