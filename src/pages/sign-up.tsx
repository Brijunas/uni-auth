import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import SignUpForm from '../components/sign-up-form'
import StyledButton from '../shared/styled-button'
import URL from './urls'

const SignUp: React.FC = () => (
  <>
    <SignUpForm />
    <Container maxWidth='xs'>
      <StyledButton component={Link} to={URL.LOGIN} variant='outlined' fullWidth>
        Cancel
      </StyledButton>
    </Container>
  </>
)

export default SignUp
