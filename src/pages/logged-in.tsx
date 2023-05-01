import { Link } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import StyledButton from '../shared/styled-button'
import URL from './urls'

const LoggedIn: React.FC = () => (
  <Container maxWidth='xs'>
    <Typography align='center'>You are logged in!</Typography>
    <StyledButton component={Link} to={URL.LOGOUT} variant='contained' fullWidth>
      Logout
    </StyledButton>
  </Container>
)

export default LoggedIn
