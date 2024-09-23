import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    <Toaster duration={1}  position='top-center' />
    </BrowserRouter>
  )
}

export default App
