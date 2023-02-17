import React, { HTMLInputTypeAttribute } from 'react'
import { InputProps, TextField } from '@mui/material'

type Props = {
  label: string
  type: HTMLInputTypeAttribute
  value: unknown
  onChange: InputProps['onChange']
  error: boolean | undefined
  helperText: React.ReactNode
}

const StyledTextField: React.FC<Props> = ({ label, type, value, onChange, error, helperText }) => {
  const labelLowerCase = label.toLocaleLowerCase()

  return (
    <TextField
      id={labelLowerCase}
      label={label}
      name={labelLowerCase}
      autoComplete={labelLowerCase}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      margin='normal'
      autoFocus
      fullWidth
      required
    />
  )
}

export default StyledTextField
