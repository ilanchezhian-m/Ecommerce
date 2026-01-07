import wavslogo from '../assets/wavslogo.webp' ;
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/brand/product';

export default function Footer(){
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const seen = new Set();
    const results = [];
    
    products.forEach((product) => {
      if (product.name.toLowerCase().includes(query) && !seen.has(product.name)) {
        seen.add(product.name);
        results.push({ name: product.name, type: 'product' });
      }
      if (product.brand.toLowerCase().includes(query) && !seen.has(product.brand)) {
        seen.add(product.brand);
        results.push({ name: product.brand, type: 'brand' });
      }
    });
    
    return results.slice(0, 8);
  }, [searchQuery]);

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSearch(suggestion.name);
  };
return(
    <>

< div className=' flex flex-col md:flex-row text-red-700 container  max-w-7xl mx-auto items-start gap-4 my-20 px-3'>

    <div className="max-w-md">
    <img src={wavslogo} alt="wavslogo" className='w-60 h-auto ' />
    <p className=" text-xl text-wrap">
        Our Passion For Fitness Drives Us In Providing
        Custom-Built Product Recommendations And diet consultations, 
        thus establishing A strong presence  This industry.
    </p>
    </div>


    <div className="flex flex-col ">
        <p className="text-red font-semibold">QUICK LINKS</p>
        <p>Shop</p>
        <p>Brands</p>
        <p>Catergories</p>
        <p>Blogs</p>
        <p>My Account</p>
    </div>

                <div className="flex flex-col ">
                        <p className='font-semibold text-red'>FOLLOW US</p>
                        <div className="flex items-center gap-3 py-2">
                            <a href="https://www.facebook.com" aria-label="Facebook" className="flex items-center justify-center w-8 h-8 bg-red-600 rounded hover:bg-red-700 transition">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="h-4 w-4 invert" />
                            </a>
                            <a href="https://www.instagram.com" aria-label="Instagram" className="flex items-center justify-center w-8 h-8 bg-red-600 rounded hover:bg-red-700 transition">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="h-4 w-4 invert" />
                            </a>
                            <a href="https://www.youtube.com" aria-label="YouTube" className="flex items-center justify-center w-8 h-8 bg-red-600 rounded hover:bg-red-700 transition">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="h-4 w-4 invert" />
                            </a>
                            <a href="https://www.x.com" aria-label="X" className="flex items-center justify-center w-8 h-8 bg-red-600 rounded hover:bg-red-700 transition">
                                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="h-4 w-4 invert" />
                            </a>
                        </div>
                        <p className='font-semibold text-red'>CONTACT INFO</p>
            {/* image */} 
            <p className='font-semibold'>Mobile:</p>
            <p>07905039456</p>
            <p className='font-semibold'>Email:</p>
            <p>Wavsnutritionweb@Gmail.com</p>
        </div>

        <div className="flex flex-col">
             <p className="font-semibold text-black mb-2">SEARCH</p>
             <div className="flex flex-col relative w-48">
               <div className="flex">
                 <input 
                   type="text" 
                   placeholder="Search products..." 
                   value={searchQuery}
                   onChange={(e) => {
                     setSearchQuery(e.target.value);
                     setShowSuggestions(true);
                   }}
                   onKeyPress={handleKeyPress}
                   onFocus={() => searchQuery && setShowSuggestions(true)}
                   className="px-3 py-2 border border-gray-300 rounded-l flex-1 focus:outline-none focus:ring-2 focus:ring-red-600 cursor-text text-black placeholder-gray-400"
                 />
                 <button 
                   onClick={() => handleSearch()}
                   className="px-4 py-2 bg-red-600 text-white rounded-r hover:bg-red-700 transition-all duration-200 ease-out cursor-pointer hover:-translate-y-0.5 hover:shadow-md flex items-center gap-1"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                   Search
                 </button>
               </div>
               
               {showSuggestions && suggestions.length > 0 && (
                 <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
                   {suggestions.map((suggestion, index) => (
                     <button
                       key={index}
                       onClick={() => handleSuggestionClick(suggestion)}
                       className="w-full text-left px-3 py-2 hover:bg-red-100 border-b last:border-b-0 transition text-sm"
                     >
                       <span className="font-semibold">{suggestion.name}</span>
                       <span className="text-gray-500 text-xs ml-2">({suggestion.type})</span>
                     </button>
                   ))}
                 </div>
               )}
             </div>
        </div>
           
        


</div>

<p className="text-center font-bold text-white bg-red-700 py-4">ALL RIGHTS RESERVED@ WAVSSPORTSNUTRITION</p>








    </>



)
   
}