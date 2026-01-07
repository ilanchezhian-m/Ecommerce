
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import Notfound from './pages/Notfound.jsx'
import ComboProductDetails from './Components/ComboProductDetails.jsx'


function App() {


  return (
    <>
   <Routes>

    <Route path="/" element={<Layout/>}>

    <Route index element ={<Home/>}/>
    
    <Route path="shop" element={<Shop/>}/>

    <Route path ="login" element={<Login/>}/>

    <Route path ="register" element={<Register/>}/>

    <Route path ="product/:id" element={<ProductDetails/>}/>

   <Route path="combo/:id" element={<ComboProductDetails />} />

    <Route path ="cart" element={<Cart/>}/>
    
    <Route path="*" element={<Notfound/>}/>
    
    </Route>
   </Routes>
    </>
  )
}

export default App
