
import image1 from '../assets/HomepageImages/Homeimage/Hero-banner-wavs.webp'
import { brands } from '../data/brands'
import {brandslogo} from '../data/brandslogo'
import { brandscategory } from '../data/brandscategory'
import logo from '../assets/HomepageImages/Homeimage/logo.svg'
import Brandcard from '../Components/Brandcard'
import BrandLogocard from '../Components/BrandLogocard'
import BrandCategories from '../Components/BrandCategories'





function Home() {
  return (
    <>
       <img src={image1} alt="front-banner" className='w-full h-auto'/>
    <div className='flex justify-center my-3'>
        <button className='bg-red-700 font-bold px-3 py-2 text-white text-lg'>Visit Combo Page</button>
       </div>
{/* this file is from brandcard.jsx */}
       <div className='flex justify-center my-3'>
       {brands.slice(0,3).map((a)=>(
        <Brandcard
         key={a.id}
         image={a.image}
         name={a.name}
         size={a.size} //sm/md/lg/xl ajustable
        />
       ))
       };
    </div>
{/* 2nd coloumn */}
      <div className='grid grid-cols-2 md:grid-cols-4'>
          {brands.slice(3,7).map((a)=>(
            <Brandcard
            key={a.id}
            image={a.image}
            name={a.name}
            size={a.size} //sm/md/lg/xl ajustable
            />
          ))
          };
      </div>


<div className='flex flex-col gap-4 md:flex-row justify-center my-4 '>
            <div className="flex justify-center mx-2 ">
        <div className="inline-flex items-center gap-3 border border-red-700 py-3 px-4 rounded-md">
          <img src={logo} className="w-6 h-6 bg-red-700" alt="logo truck design" />
          <div className="flex flex-col leading-tight">
            <p className="font-bold text-red-700">FREE SHIPPING</p>
            <p className="font-medium">We Do Free Shipping All over India</p>
          </div>
        </div>
      </div>
            <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 border border-red-700 py-3 px-4 rounded-md">
          <img src={logo} className="w-6 h-6 bg-red-700" alt="logo truck design" />
          <div className="flex flex-col leading-tight">
            <p className="font-bold text-red-700">FREE SHIPPING</p>
            <p className="font-medium">We Do Free Shipping All over India</p>
          </div>
        </div>
      </div>
 </div>

 <div className='text-center my-10'>
  <h1 className='font-bold text-red-700 text-3xl'>WAVS SPORTS NUTRITION</h1>
  <p className='font-bold text-gray-700 text-2xl'>Premium Grade Supplements</p>
 </div>




{/* logos page shop by brands */}

        < div className='container mx-auto px-6 my-3'>
                <div className='flex justify-evenly my-10'>
                    <p className='font-bold text-gray-700 text-3xl'>SHOP BY BRANDS</p>
                    <p className='font-bold text-red-700 text-2xl'>Explore</p>
               </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
              {brandslogo.map((b)=>(
                <BrandLogocard
                key ={b.id}
                image ={b.image}
                name ={b.name}
                size ={b.size}
                />
              ))
               };
             </div>
          </div>


{/* shop items categories list */}


        < div className=' container mx-auto px-6 my-3'>

                <div className='flex justify-evenly my-10'>
                  <p className='font-bold text-gray-700 text-3xl'>SHOP BY CATEGORIES</p>
                  <p className='font-bold text-red-700 text-2xl'>Explore</p>
                </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 '>
               {brandscategory.map((c)=>(
                <BrandCategories
                key={c.id}
                image={c.image}
                name={c.name}
                size={c.size}   
                />
               ))
               };

              </div>
        </div>

          </>

  )
}
export default Home
