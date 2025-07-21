import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/MainRoute.js'
import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatePresence mode='wait'>
    <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </AnimatePresence>
  </StrictMode>,
)
