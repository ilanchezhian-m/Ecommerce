import Header from '../Components/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


export default function Layout(){
    return(
        <>
        <Header/>

     <main className="pt-28 lg:pt-32">
        <Outlet />
      </main>
      <Footer />
        
        </>
    )
}