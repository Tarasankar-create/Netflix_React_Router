import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Home/>}/>
      <Route path="/" element={<Layout />}>
          <Route path="Login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
      </Route>
      </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
