import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { store } from './app/store'
import Form from './components/Form'
import StyledGrid from './components/StyledGrid'

const theme = createTheme()

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledGrid container direction='column' justifyContent='center' alignItems='center'>
        <Form />
      </StyledGrid>
    </ThemeProvider>
  </Provider>
)

export default App
