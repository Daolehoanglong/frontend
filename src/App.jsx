import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Index from './Components/Layout/Index'
import Product from './Components/Layout/Product'
import Detail from './Components/Layout/Detail'
import Cart from './Components/Layout/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Test from './Components/Layout/Test'
import Login from './Components/Layout/Login'
import Register from './Components/Layout/Register'
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="27143805094-60uj5oepaibab1s0r9aabpathqf560et.apps.googleusercontent.com">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/product/' element={<Product />} />
            <Route path='/product/:categoryID' element={<Product />} />
            <Route path='/detail/:ID' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/test' element={<Test />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
