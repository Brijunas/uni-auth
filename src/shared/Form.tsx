import React from 'react'
import { Container } from '@mui/material'
import StyledButton from './StyledButton'

interface Form {
  children: React.ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
  submitBtnTitle: string
}

const Form: React.FC<Form> = ({ children, onSubmit, submitBtnTitle }) => (
  <Container component='form' maxWidth='xs' onSubmit={onSubmit} noValidate>
    {children}
    <StyledButton type='submit' variant='contained' fullWidth>
      {submitBtnTitle}
    </StyledButton>
  </Container>
)

export default Form
