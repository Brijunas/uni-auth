import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Form from '../shared/Form'

interface SignUpFormData {
  email: string
  password: string
  repeatPassword: string
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
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one digit and one special character'
      ),
    repeatPassword: yup
      .string()
      .required('Repeat password is required')
      .oneOf([yup.ref('password')], 'Password mismatches'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <Form onSubmit={handleSubmit(onSubmit)} submitBtnTitle='Sign up'>
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
      <TextField
        id='repeatPassword'
        label='Repeat password'
        type='password'
        margin='normal'
        autoComplete='current-password'
        error={!!errors.repeatPassword}
        helperText={errors.repeatPassword?.message}
        fullWidth
        {...register('repeatPassword')}
      />
    </Form>
  )
}

export default SignUpForm
