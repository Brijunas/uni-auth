import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, Login, NotFound, SignUp } from './pages'
import URL from './pages'

const AppRoutes: React.FC = () => (
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

export default AppRoutes
