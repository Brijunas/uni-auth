import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import usePasswordStrength from '../hooks/use-password-strength'
import Form from '../shared/Form'
import PasswordStrenghtProgress from './PasswordStrenghtProgress'

const regexForAtLeastOneLowercaseLetter = /^(?=.*[a-z])/
const regexForAtLeastOneUppercaseLetter = /^(?=.*[A-Z])/
const regexForAtLeastOneDigit = /^(?=.*\d)/
const regexForAtLeastOneSpecialCharacter = /^(?=.*[!@#$%^&*()_+\-={}|[\]\\:";'<>?,./~])/

interface SignUpFormData {
  email: string
  password: string
  confirmPassword: string
}

const SignUpForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  const schema = yup.object({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(12, 'Password must be at least 12 characters')
      .max(50, 'Password must be at most 50 characters')
      .matches(regexForAtLeastOneLowercaseLetter, 'Password must contain at least one lowercase letter')
      .matches(regexForAtLeastOneUppercaseLetter, 'Password must contain at least one uppercase letter')
      .matches(regexForAtLeastOneDigit, 'Password must contain at least one digit')
      .matches(regexForAtLeastOneSpecialCharacter, 'Password must contain at least one special character'),
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
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} submitBtnTitle='Sign up' submitBtnDisabled={!isValid}>
      <TextField
        id='email'
        label='Email'
        type='email'
        margin='normal'
        autoComplete='username'
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
        autoComplete='new-password'
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        required
        {...register('password')}
      />
      <PasswordStrenghtProgress score={result?.score} />
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
