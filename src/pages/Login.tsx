import { Link } from 'react-router-dom'
import { Container, Divider, Typography } from '@mui/material'
import LoginForm from '../components/login-form'
import StyledButton from '../shared/styled-button'
import URL from './urls'

const Login: React.FC = () => (
  <>
    <LoginForm />
    <Container maxWidth='xs'>
      <Divider variant='fullWidth' sx={{ mt: 2, mb: 2 }}>
        <Typography color='textSecondary' align='center'>
          Or
        </Typography>
      </Divider>
      <StyledButton component={Link} to={URL.SIGN_UP} variant='outlined' fullWidth>
        Sign Up
      </StyledButton>
    </Container>
  </>
)

export default Login
