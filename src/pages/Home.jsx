
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
       }
    </div>
{/* 2nd coloumn */}
<div className='w-full flex justify-center '>
      <div className='grid grid-cols-2 md:grid-cols-4'>
          {brands.slice(3,7).map((a)=>(
            <Brandcard
            key={a.id}
            image={a.image}
            name={a.name}
            size={a.size} //sm/md/lg/xl ajustable
            />
          ))
          }
      </div>
</div>


<div className="w-full flex flex-col lg:flex-row gap-3  px-3 my-10 lg:justify-center">

  {/* Card 1 */}
  <div className="flex w-full lg:w-1/2 lg:max-w-3xl ">
    <div className="flex w-full  items-center gap-3 border border-red-700 py-7 px-2 rounded-3xl justify-evenly">
      <img src={logo} className="w-20 h-20 bg-red-700 rounded-lg" alt="logo truck design" />
      <div className="flex flex-col leading-tight">
        <p className="font-bold text-red-700 ">FREE SHIPPING</p>
        <br />
        <p className="font-medium">We Do Free Shipping All over India</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex w-full lg:w-1/2 lg:max-w-3xl ">
    <div className="flex w-full  items-center gap-3 border border-red-700 py-7 px-2 rounded-3xl justify-evenly">
      <img src={logo} className="w-20 h-20 bg-red-700 rounded-3xl " alt="logo truck design" />
      <div className="flex flex-col leading-tight">
        <p className="font-bold text-red-700">FREE CONSULTATION</p>
        <br />
        <p className="font-medium">24/7 online free consultation</p>
      </div>
    </div>
  </div>

</div>


 <div className='text-center my-10'>
  <h1 className='font-bold text-red-700 text-3xl'>WAVS SPORTS NUTRITION</h1>
  <p className='font-bold text-gray-700 text-2xl'>Premium Grade Supplements</p>
 </div>




{/* logos page shop by brands logo  brandlogocard.jsx*/}

        < div className='w-full px-3 my-3 mx-auto max-w-none  md:max-w-none lg:max-w-7xl '>
                <div className='flex justify-between my-10 lg:mx-3'>
                    <p className='font-extrabold text-gray-600 text-4xl '>SHOP BY BRANDS</p>
                    <p className='font-extrabold text-red-700 text-2xl'>Explore</p>
               </div>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-3 '>
              {brandslogo.map((b)=>(
                <BrandLogocard
                key ={b.id}
                image ={b.image}
                name ={b.name}
                size ={b.size}
                />
              ))
               }
             </div>
          </div>


{/* shop items categories list brandcategories.jsx */}


        < div className=' w-full px-3 my-3 mx-auto max-w-none  md:max-w-none lg:max-w-7xl'>

                <div className='flex justify-between my-10 lg:mx-3'>
                  <p className='font-extrabold text-gray-700 text-4xl'>SHOP BY CATEGORIES</p>
                  <p className='font-extrabold text-red-700 text-2xl'>Explore</p>
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
               }

              </div>
        </div>

          </>

  )
}
export default Home
