import React from 'react'
import { LinearProgress } from '@mui/material'
import { Score } from '@zxcvbn-ts/core/dist/types'

const getColor = (score: Score | undefined): 'error' | 'warning' | 'info' | 'success' | 'primary' => {
  switch (score) {
    case 0:
    case 1:
      return 'error'
    case 2:
      return 'warning'
    case 3:
      return 'info'
    case 4:
      return 'success'
    default:
      return 'primary'
  }
}

interface PasswordStrengthProgress {
  score: Score | undefined
}

const PasswordStrengthProgress: React.FC<PasswordStrengthProgress> = ({ score }) => (
  <LinearProgress variant='determinate' value={(score ?? 0) * 25} color={getColor(score)} />
)

export default PasswordStrengthProgress
