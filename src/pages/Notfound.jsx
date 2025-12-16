import { Link} from "react-router-dom";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";




export default function Notfound(){
    
    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);






    return(
         <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-gray-600 text-7xl mb-6"> Page not found. Redirecting to home...</p>
      <Link to="/" className="text-blue-600 underline text-5xl">
          If not redirect  Click here 
      </Link>
    </div>
    )
}