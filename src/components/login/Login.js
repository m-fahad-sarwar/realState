import { Box, Button, TextField, Typography } from '@mui/material'
import { fireEvent } from '@testing-library/react'
import React from 'react'
import './style.css'
import UseLogin from './UseLogin'

export default function Login() {
  const {
    loginHandeler,
    email,
    setEmail,
    password,
    setPassword,
    setSignUpScreen,
    signUpScreen,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    signUpHandeler
  } = UseLogin()
  if (signUpScreen) {
    return (
      <Box className='signUp'>
      <Typography variant='h2'>SignUp</Typography>
      <TextField variant='outlined' label='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ margin: 10 }} />
      <TextField variant='outlined' label='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ margin: 10 }} />
      <TextField variant='outlined' label='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} style={{ margin: 10 }} />
      
      <TextField variant='outlined' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: 10 }} />
      
      <TextField variant='outlined' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: 10 }} />
      
      <Button variant='contained' style={{ margin: 10 }} onClick={signUpHandeler}>SignUp</Button>
      <Button onClick={() => setSignUpScreen(false)}>Login to your account</Button>
    </Box>
    )
  } else {


    return (
      <Box className='LoginBox'>
        <Typography variant='h2' style={{ margin: 10 }}>Login</Typography>
        <TextField variant='outlined' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: 10 }} />
        <TextField variant='outlined' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: 10 }} />
        <Button variant='contained' style={{ margin: 10 }} onClick={loginHandeler}>Login</Button>
        <Button onClick={() => setSignUpScreen(true)}>SignUp</Button>
      </Box>
    )
  }

}