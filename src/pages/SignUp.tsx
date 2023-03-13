import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import SignUpForm from '../components/SignUpForm'
import URL from '../pages'
import StyledButton from '../shared/StyledButton'

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
