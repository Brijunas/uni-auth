import React from 'react'
import { Button, Container } from '@mui/material'
import StyledTextField from './StyledTextField'
import { useFormik } from 'formik'

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
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
