import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Home'
import { BrowserRouter, Routes , Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout/Layout'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import DashBoard from './pages/DashBoard'
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoutes><DashBoard/></ProtectedRoutes>,
      }
    ]
  }
]);

  return (
    <>
    <RouterProvider router={router} />
    <Toaster duration={1}  position='top-center' />
    </>
  );

}

export default App
