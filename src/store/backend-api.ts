import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BACKEND_URL ?? ''}` }),
  endpoints: () => ({}),
})

export default backendApi
