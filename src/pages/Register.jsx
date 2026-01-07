import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const result = register(email, password, name);
    
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Registration failed");
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
        Create Account
      </h1>

      <div className="max-w-lg mx-auto px-4 py-10">
        <p className="text-4xl font-extrabold text-center">Register</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="border border-gray-700/50 px-8 py-4 my-5 space-y-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">Email Address</label>
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
            <label className="font-bold text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Enter password (min 6 characters)"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder="Re-enter password"
            />
          </div>

          {/* Submit button */}
          <div className="flex items-center flex-col justify-between">
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 my-3 rounded-sm font-bold hover:bg-red-800 transition"
            >
              REGISTER
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-red-700 font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
