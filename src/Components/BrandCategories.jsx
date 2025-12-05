export default function BrandCategories ({name,image,size}){


    //shopby catergories 

     const  sizes ={
        sm: "w-20 sm:w-24 md:w-28 lg:w-32",
        md: "w-24 sm:w-28 md:w-32 lg:w-40",
        lg: "w-28 sm:w-32 md:w-40 lg:w-56",
        xl: "w-32 sm:w-40 md:w-48 lg:w-80"
      };



    return(
        <>
         <div className='flex flex-col items-center mx-3   }} '>
            <img src={image} 
            alt={name}
            className= {`${sizes[size]} h-auto`} />
            <p className='font-bold text-red-700 bg-white w-full py-3 text-center rounded-md shadow-lg wrap-break-word'>{name}                      
                    </p>
        </div>
        </>
    )
}