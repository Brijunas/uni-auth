import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, Divider, TextField } from '@mui/material'
import * as yup from 'yup'
import URL from '../pages'
import StyledButton from './StyledButton'

interface SignInFormData {
  email: string
  password: string
}

const Form: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  const schema = yup.object({
    email: yup.string().email('Enter a valid email'),
    password: yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({ resolver: yupResolver(schema), mode: 'onBlur' })

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

  return (
    <Container component='form' maxWidth='xs' onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        id='email'
        label='Email'
        type='email'
        margin='normal'
        autoComplete='username'
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        inputRef={emailRef}
        {...register('email')}
      />
      <TextField
        id='password'
        label='Password'
        type='password'
        margin='normal'
        autoComplete='current-password'
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        {...register('password')}
      />
      <StyledButton type='submit' variant='contained' fullWidth>
        Log In
      </StyledButton>
      <Divider variant='fullWidth' sx={{ mt: 2, mb: 2 }}>
        Or
      </Divider>
      <StyledButton component={Link} to={URL.SIGN_UP} variant='outlined' fullWidth>
        Sign Up
      </StyledButton>
    </Container>
  )
}

export default Form
