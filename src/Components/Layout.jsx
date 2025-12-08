import Header from '../Components/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


export default function Layout(){
    return(
        <>
        <Header/>

     <main >
        <Outlet />
      </main>
      <Footer />
        
        </>
    )
}