import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { skipToken } from '@reduxjs/toolkit/dist/query/react'
import * as yup from 'yup'
import Form from '../shared/form'
import { useUsernameAuthLoginQuery } from '../store/backend-api'
import { UsernamesAuthLoginRequest } from '../types'

const LoginForm: React.FC = () => {
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const [credentials, setCredentials] = useState<UsernamesAuthLoginRequest | undefined>(undefined)
  useUsernameAuthLoginQuery(credentials ?? skipToken)

  const schema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernamesAuthLoginRequest>({ resolver: yupResolver(schema), mode: 'onSubmit' })

  const onSubmit: SubmitHandler<UsernamesAuthLoginRequest> = (data) => {
    setCredentials(data)
  }

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus()
    }
  }, [])

  return (
    <Form onSubmit={(event) => void handleSubmit(onSubmit)(event)} submitBtnTitle='Log in'>
      <TextField
        id='username'
        label='Username'
        type='text'
        margin='normal'
        autoComplete='username'
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
        inputRef={usernameInputRef}
        {...register('username')}
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
