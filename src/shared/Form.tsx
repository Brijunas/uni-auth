import React from 'react'
import { Container } from '@mui/material'
import StyledButton from './StyledButton'

interface Form {
  children: React.ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
  submitBtnTitle: string
  submitBtnDisabled?: boolean | undefined
}

const Form: React.FC<Form> = ({ children, onSubmit, submitBtnTitle, submitBtnDisabled }) => (
  <Container component='form' maxWidth='xs' onSubmit={onSubmit} noValidate>
    {children}
    <StyledButton disabled={submitBtnDisabled} type='submit' variant='contained' fullWidth>
      {submitBtnTitle}
    </StyledButton>
  </Container>
)

export default Form
