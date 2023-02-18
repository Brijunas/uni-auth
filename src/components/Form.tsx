import React, { useEffect, useRef } from 'react'
import { Button, Container, TextField } from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

interface SignInFormData {
  email: string
  password: string
}

const Form: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  const schema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/, 'Enter a valid password'),
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
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        required
        inputRef={emailRef}
        {...register('email')}
      />
      <TextField
        id='password'
        label='Password'
        type='password'
        margin='normal'
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        required
        {...register('password')}
      />
      <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2 }} fullWidth>
        Sign In
      </Button>
    </Container>
  )
}

export default Form
