
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Product from './pages/product'
import Cart from './pages/cart'


function App() {


  return (
    <>
   <Routes>

    <Route path="/" element={<Layout/>}>

    <Route index element ={<Home/>}/>

    <Route path ="product" element={<Product/>}/>

    <Route path ="cart" element={<Cart/>}/>
    
    </Route>
   </Routes>
    </>
  )
}

export default App
