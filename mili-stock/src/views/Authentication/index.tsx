import React, { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Box } from '@mui/material'

export default function Authentication() {
  // authView: true - signUp / false - signIn
  const [authView, setAuthView] = useState<boolean>(false);

  return (
    <>
      <Box display='flex'>
        {authView ? (<SignUp />) : (<SignIn />)}
        

        
      </Box>
    </>
  )

}
