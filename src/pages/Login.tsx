import { Link } from 'react-router-dom'
import { Container, Divider } from '@mui/material'
import LoginForm from '../components/LoginForm'
import URL from '../pages'
import StyledButton from '../shared/StyledButton'

const Login: React.FC = () => (
  <>
    <LoginForm />
    <Container maxWidth='xs'>
      <Divider variant='fullWidth' sx={{ mt: 2, mb: 2 }}>
        Or
      </Divider>
      <StyledButton component={Link} to={URL.SIGN_UP} variant='outlined' fullWidth>
        Sign Up
      </StyledButton>
    </Container>
  </>
)

export default Login
