import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UsernamesAuthLoginRequest } from '../types'

const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BACKEND_URL ?? ''}/api` }),
  endpoints: (builder) => ({
    usernameAuthLogin: builder.query<UsernamesAuthLoginResponse, UsernamesAuthLoginRequest>({
      query: (credentials: UsernamesAuthLoginRequest) => ({
        url: 'usernames-auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export default backendApi
export const { useUsernameAuthLoginQuery } = backendApi
