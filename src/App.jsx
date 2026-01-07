
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './Components/ProductDetails'
import Notfound from './pages/Notfound'
import ComboProductDetails from './Components/ComboProductDetails'


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
