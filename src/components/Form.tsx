import React from 'react'
import { Button, Container } from '@mui/material'
import StyledTextField from './StyledTextField'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Form: React.FC = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(12, 'Password should be of minimum 12 characters length')
      .matches(/[a-zA-Z]/, 'Password must contain some letters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one symbol')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Container component='form' maxWidth='xs' onSubmit={formik.handleSubmit} noValidate>
      <StyledTextField
        label='Email'
        type='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <StyledTextField
        label='Password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2 }} fullWidth>
        Sign In
      </Button>
    </Container>
  )
}

export default Form
