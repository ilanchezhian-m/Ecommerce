
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/Login'


function App() {


  return (
    <>
   <Routes>

    <Route path="/" element={<Layout/>}>

    <Route index element ={<Home/>}/>
    
    <Route path="shop" element={<Shop/>}/>

    <Route path ="product" element={<Product/>}/>

    <Route path ="login" element={<Login/>}/>

    <Route path ="cart" element={<Cart/>}/>
    
    </Route>
   </Routes>
    </>
  )
}

export default App
