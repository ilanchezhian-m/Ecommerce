import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("demo@wavs.com");
  const [password, setPassword] = useState("Demo@2026!");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const result = login(email, password, rememberMe);
    
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Login failed");
    }
  };

  // Redirect if already logged in
  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <>
    
      <h1 className="text-3xl font-extrabold text-center mt-6">
        My Account
      </h1>

      <div className="max-w-lg mx-auto px-4 py-10">
        <p className="text-4xl font-extrabold text-center">Login</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}

  {/* Login form */}
        <form
          onSubmit={handleSubmit}
          className="border border-gray-700/50  px-8 py-4 my-5  space-y-6"
        >
          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">
              Username or Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your password"
            />
          </div>
          
          <label className="flex items-center gap-2 text-sm">
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-red-700" 
            />
            <span>Remember Me</span>
          </label>

          {/* { button } */}
          <div className="flex items-center flex-col justify-between">
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 my-3 rounded-sm font-bold hover:bg-red-800 transition">
              LOG IN
            </button>

            {/* Forgot password */}
            <p className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
              Lost your password?
            </p>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-700 font-bold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
