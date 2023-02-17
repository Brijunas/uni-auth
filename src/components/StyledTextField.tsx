import React, { HTMLInputTypeAttribute } from 'react'
import { TextField } from '@mui/material'

type Props = {
  label: string
  type: HTMLInputTypeAttribute
}

const StyledTextField: React.FC<Props> = ({ label, type }) => {
  const labelLowerCase = label.toLocaleLowerCase()

  return (
    <TextField
      id={labelLowerCase}
      label={label}
      name={labelLowerCase}
      autoComplete={labelLowerCase}
      type={type}
      margin='normal'
      autoFocus
      fullWidth
      required
    />
  )
}

export default StyledTextField
