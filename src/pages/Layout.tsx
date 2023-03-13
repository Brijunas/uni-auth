import { Outlet } from 'react-router-dom'
import StyledGrid from '../shared/StyledGrid'

const Layout: React.FC = () => (
  <StyledGrid container direction='column' justifyContent='center' alignItems='center'>
    <Outlet />
  </StyledGrid>
)

export default Layout
