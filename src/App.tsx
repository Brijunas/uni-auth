import React from 'react'
import { Button } from '@mui/material'
import StyledGrid from './components/StyledGrid'

const App: React.FC = () => (
  <StyledGrid container direction='column' justifyContent='center' alignItems='center'>
    <Button variant='contained'>Sign In</Button>
  </StyledGrid>
)

export default App
