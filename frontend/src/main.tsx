import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Excel from './pages/Excel'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/excel_data',
    element: <Excel/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
