import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Box } from '@mui/material'

export default function Authentication() {
  return (
    <>
      <Box display='flex'>
        <SignUp />

        <SignIn />
      </Box>
    </>
  )
}
