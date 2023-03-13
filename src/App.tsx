import { BrowserRouter, Route, Routes } from 'react-router-dom'
import URL, { Layout, Login, NotFound, SignUp } from './pages'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index path={URL.LOGIN} element={<Login />} />
        <Route path={URL.SIGN_UP} element={<SignUp />} />
        <Route path={URL.CATCH_ALL} element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
