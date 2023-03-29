import React from 'react'
import { Card, Box, CardContent, CardMedia, Typography } from '@mui/material'
import IconAvailable from '../../assets/icon-available.svg'
import IconBusy from '../../assets//icon-busy.svg'

const Person = ({ person }) => (
  <Card sx={{
    width: '200px',
    height: '250px',
  }}>
    <Box sx={{ padding: '10px 10px 0 10px' }} >
      <Box
        sx={{
          position: 'absolute',
          marginTop: '125px',
          marginLeft: '155px',
        }}
      >
        <img
          src={person.available ? IconAvailable : IconBusy}
          height={25}
          width={25}
        />
      </Box>
      <CardMedia
        component='img'
        alt='image'
        height='150'
        image={person.image}
      />
    </Box>
    <CardContent sx={{ padding: '12px', paddingTop: '5px' }} >
      <Typography variant='body2'>
        {`${person.firstName} ${person.lastName}`}
      </Typography>
      <Typography variant='caption' color='text.secondary'>
        {person.location}
      </Typography>
      <Box>
        <Typography variant='caption' component='p' color='text.secondary'>
          {`phone: ${person.phone}`}
        </Typography>
        <Typography variant='caption' component='p' color='text.secondary' >
          {`e-mail: ${person.email}`}
        </Typography>
      </Box>
    </CardContent>
  </Card >
)

export default Person
