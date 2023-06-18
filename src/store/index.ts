import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import backendApi from './backend-api'

export const store = configureStore({
  reducer: { [backendApi.reducerPath]: backendApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
