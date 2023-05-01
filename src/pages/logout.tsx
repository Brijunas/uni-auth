import { Link } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import StyledButton from '../shared/styled-button'
import URL from './urls'

const Logout: React.FC = () => (
  <Container maxWidth='xs'>
    <Typography align='center'>You are logged off!</Typography>
    <StyledButton component={Link} to={URL.LOGIN} variant='outlined' fullWidth>
      Back to Login
    </StyledButton>
  </Container>
)

export default Logout
