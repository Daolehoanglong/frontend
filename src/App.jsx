import Index from './Components/Layout/Index'
import Product from './Components/Layout/Product'
import Detail from './Components/Layout/Detail'
import Cart from './Components/Layout/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layoutCompoent'
import Admin from './AdminCompoent'
import './App.css'
import Test from './Components/Layout/Test'
import Login from './Components/Layout/Login'
import Register from './Components/Layout/Register'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProductAdmin from './Components/Layout/ProductAdmin'
import AddProduct from './Components/Layout/AddProduct'
import EditProduct from './Components/Layout/EditProduct'
import ForgotPass from './Components/Layout/ForgotPass'
import CheckCode from './Components/Layout/CheckCode'
import UpdatePass from './Components/Layout/UpdatePass'

// import HeaderAdmin from './Components/Layout/HeaderAdmin'
function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="27143805094-60uj5oepaibab1s0r9aabpathqf560et.apps.googleusercontent.com">
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/product" element={<Layout><Product /></Layout>} />
            <Route path="/product/:categoryID" element={<Layout><Product /></Layout>} />
            <Route path="/detail/:ID" element={<Layout><Detail /></Layout>} />
            <Route path="/cart" element={<Layout><Cart /></Layout>} />
            <Route path="/test" element={<Layout><Test /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/register" element={<Layout><Register /></Layout>} />
            <Route path="/forgotpass" element={<Layout><ForgotPass /></Layout>} />
            <Route path="/checkcode" element={<Layout><CheckCode /></Layout>} />
            <Route path="/updatePass" element={<Layout><UpdatePass /></Layout>} />
            {/* <Route path='/headeradmin' element={<HeaderAdmin />} /> */}
            <Route path='/productadmin' element={<Admin><ProductAdmin /></Admin>} />
            <Route path='/addproduct' element={<Admin><AddProduct /></Admin>} />
            <Route path='/editproduct/:id' element={<Admin><EditProduct /></Admin>} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
