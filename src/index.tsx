import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element not found')
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
