import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Form from '../shared/Form'

interface LogInFormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  const schema = yup.object({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({ resolver: yupResolver(schema), mode: 'onSubmit' })

  const onSubmit: SubmitHandler<LogInFormData> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

  return (
    <Form onSubmit={handleSubmit(onSubmit)} submitBtnTitle='Log in'>
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
    </Form>
  )
}

export default LoginForm
