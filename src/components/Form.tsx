import React from 'react'
import { Button, Container } from '@mui/material'
import StyledTextField from './StyledTextField'

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Container component='form' maxWidth='xs' onSubmit={handleSubmit} noValidate>
      <StyledTextField label='Email' type='email' />
      <StyledTextField label='Password' type='password' />
      <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2 }} fullWidth>
        Sign In
      </Button>
    </Container>
  )
}

export default Form
