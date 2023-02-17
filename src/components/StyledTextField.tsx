import React from 'react'
import { TextField } from '@mui/material'

type Props = {
  label: string
}

const StyledTextField: React.FC<Props> = ({ label }) => {
  const labelLowerCase = label.toLocaleLowerCase()

  return (
    <TextField
      id={labelLowerCase}
      label={label}
      name={labelLowerCase}
      autoComplete={labelLowerCase}
      margin='normal'
      autoFocus
      fullWidth
      required
    />
  )
}

export default StyledTextField
