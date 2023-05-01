import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import URL, { Layout, LoggedIn, Login, Logout, NotFound, SignUp } from './pages'

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index path={URL.LOGIN} element={<Login />} />
        <Route path={URL.SIGN_UP} element={<SignUp />} />
        <Route path={URL.LOGGED_IN} element={<LoggedIn />} />
        <Route path={URL.LOGOUT} element={<Logout />} />
        <Route path={URL.CATCH_ALL} element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
