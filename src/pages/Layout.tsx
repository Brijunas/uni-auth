import { Outlet } from 'react-router-dom'
import StyledGrid from '../shared/styled-grid'

const Layout: React.FC = () => (
  <StyledGrid container direction='column' justifyContent='center' alignItems='center'>
    <Outlet />
  </StyledGrid>
)

export default Layout
