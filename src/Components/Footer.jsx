import wavslogo from '../assets/wavslogo.webp' ;
export default function Footer(){
return(
    <>

< div className=' flex flex-col md:flex-row text-red-700 container mx-auto px-10 items-start gap-4 md:gap-25 my-20'>

    <div className="max-w-lg">
    <img src={wavslogo} alt="wavslogo" className='w-60 h-auto ' />
    <p className=" text-xl text-wrap">
        Our Passion For Fitness Drives Us In Providing
        Custom-Built Product Recommendations And diet consultations, 
        thus establishing A strong presence  This industry.
    </p>
    </div>


    <div className="flex flex-col ">
        <p className="text-black font-semibold">QUICK LINKS</p>
        <p>Shop</p>
        <p>Brands</p>
        <p>Catergories</p>
        <p>Blogs</p>
        <p>My Account</p>
    </div>

        <div className="flex flex-col ">
            <p className='font-semibold text-black'>FOLLOW US</p>
            <p>4 images</p>
            {/* IAMGES */}
            <p className='font-semibold text-black'>CONTACT INFO</p>
            {/* image */} 
            <p className='font-semibold'>Mobile:</p>
            <p>07905039456</p>
            <p className='font-semibold'>Email:</p>
            <p>Wavsnutritionweb@Gmail.com</p>
        </div>

        <div>
             <p>search bar</p>
        </div>
           
        


</div>

<p className="text-center font-bold text-white bg-red-700 py-4">ALL RIGHTS RESERVED@ WAVSSPORTSNUTRITION</p>








    </>



)
   
}