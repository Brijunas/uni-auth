import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import usePasswordStrength from '../hooks/use-password-strength'
import Form from '../shared/Form'
import PasswordStrengthProgress from './PasswordStrengthProgress'

const bannedWords = ['root', 'admin', 'abuse', 'webmaster', 'spam', 'help', 'username', 'password', 'pass']

interface SignUpFormData {
  username: string
  password: string
  confirmPassword: string
}

const SignUpForm: React.FC = () => {
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const [isStrongPassword, setIsStrongPassword] = useState<boolean | undefined>(undefined)

  const schema = yup.object({
    username: yup
      .string()
      .required('Username is required')
      .min(2, 'Username must be at least 2 characters long.')
      .max(20, 'Username cannot be longer than 20 characters.')
      .test('no-leading-trailing-whitespace', 'Username cannot start or end with whitespace', (value) => {
        if (value && (value.startsWith(' ') || value.endsWith(' '))) {
          return false
        }
        return true
      })
      .matches(
        /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*$/,
        'Username can only contain letters, numbers, and the characters _, -, and ., which must be separated by at least one letter or number.'
      )
      .notOneOf(bannedWords, 'Username cannot contain banned words.')
      .strict(true),
    password: yup
      .string()
      .required('Password is required')
      .test('is-strong-password', 'Password is too weak', () => isStrongPassword),
    confirmPassword: yup
      .string()
      .required('Repeat password is required')
      .oneOf([yup.ref('password')], 'Password mismatches'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpFormData>({ resolver: yupResolver(schema), mode: 'onBlur' })

  const password = watch('password')
  const result = usePasswordStrength(password)

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (result && result.score !== 4) {
      setIsStrongPassword(false)
    } else {
      setIsStrongPassword(true)
    }
  }, [result])

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} submitBtnTitle='Sign up' submitBtnDisabled={!isValid}>
      <TextField
        id='username'
        label='Username'
        type='text'
        margin='normal'
        autoComplete='username'
        error={!!errors.username}
        helperText={errors.username?.message}
        fullWidth
        required
        inputRef={usernameInputRef}
        {...register('username')}
      />
      <TextField
        id='password'
        label='Password'
        type='password'
        margin='normal'
        autoComplete='new-password'
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        required
        {...register('password')}
      />
      <PasswordStrengthProgress score={result?.score} />
      <TextField
        id='confirmPassword'
        label='Repeat password'
        type='password'
        margin='normal'
        autoComplete='confirm-password'
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        fullWidth
        required
        {...register('confirmPassword')}
      />
    </Form>
  )
}

export default SignUpForm
