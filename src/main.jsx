import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/MainRoute.js'
import { AnimatePresence } from 'framer-motion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router}></RouterProvider>
    </AnimatePresence>
  </StrictMode>,
)
