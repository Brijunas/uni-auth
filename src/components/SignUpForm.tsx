import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Form from '../shared/Form'

const regexForAtLeastOneLowercaseLetter = /^(?=.*[a-z])/
const regexForAtLeastOneUppercaseLetter = /^(?=.*[A-Z])/
const regexForAtLeastOneDigit = /^(?=.*\d)/
const regexForAtLeastOneSpecialCharacter = /^(?=.*[!@#$%^&*()_+\-={}|[\]\\:";'<>?,./~])/

interface SignUpFormData {
  email: string
  repeatEmail: string
  password: string
  repeatPassword: string
}

const SignUpForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  const schema = yup.object({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    repeatEmail: yup
      .string()
      .required('Repeat email is required')
      .oneOf([yup.ref('email')], 'Email mismatches'),
    password: yup
      .string()
      .required('Password is required')
      .min(12, 'Password must be at least 12 characters')
      .max(50, 'Password must be at most 50 characters')
      .matches(regexForAtLeastOneLowercaseLetter, 'Password must contain at least one lowercase letter')
      .matches(regexForAtLeastOneUppercaseLetter, 'Password must contain at least one uppercase letter')
      .matches(regexForAtLeastOneDigit, 'Password must contain at least one digit')
      .matches(regexForAtLeastOneSpecialCharacter, 'Password must contain at least one special character'),
    repeatPassword: yup
      .string()
      .required('Repeat password is required')
      .oneOf([yup.ref('password')], 'Password mismatches'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({ resolver: yupResolver(schema), mode: 'onBlur' })

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

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
        id='repeatEmail'
        label='Repeat email'
        type='email'
        margin='normal'
        autoComplete='username'
        error={!!errors.repeatEmail}
        helperText={errors.repeatEmail?.message}
        fullWidth
        required
        {...register('repeatEmail')}
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
        required
        {...register('password')}
      />
      <TextField
        id='repeatPassword'
        label='Repeat password'
        type='password'
        margin='normal'
        autoComplete='current-password'
        error={!!errors.repeatPassword}
        helperText={errors.repeatPassword?.message}
        fullWidth
        required
        {...register('repeatPassword')}
      />
    </Form>
  )
}

export default SignUpForm
