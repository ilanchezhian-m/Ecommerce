import { Link } from 'react-router-dom';

export default function BrandCategories ({name,image,size, link}){


    //shopby catergories 

     const  sizes ={
        sm: "w-20 sm:w-24 md:w-28 lg:w-32",
        md: "w-24 sm:w-28 md:w-32 lg:w-40",
        lg: "w-28 sm:w-32 md:w-40 lg:w-56",
        xl: "w-32 sm:w-40 md:w-48 lg:w-80"
      };



    return(
        <>
         <Link to={link || '/shop'} className='flex flex-col items-center mx-3 group'>
            <img src={image} 
            alt={name}
            className= {`${sizes[size]} h-auto transition-transform duration-200 group-hover:scale-105`} />
            <p className='font-extrabold text-red-700  bg-white w-full py-4 text-center rounded-md shadow-lg text-xs sm:text-sm whitespace-wrap md:text-xs lg:text-base group-hover:-translate-y-1 transition-all duration-200'>{name}                      
                    </p>
        </Link>
        </>
    )
}