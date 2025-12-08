export default function Login() {
  return (
    <>
    
      <h1 className="text-3xl font-extrabold text-center mt-6">
        My Account
      </h1>

      <div className="max-w-lg mx-auto px-4 py-10">
        <p className="text-4xl font-extrabold text-center">Login</p>

  {/* Login form */}
        <form
          action=""
          className="border border-gray-700/50  px-8 py-4 my-5  space-y-6"
        >
          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">
              Username or Email Address
            </label>
            <input
              type="text"
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder=""
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg">
              Password
            </label>
            <input
              type="password"
              className="border border-gray-700/50 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700"
              placeholder=""
            />
          </div>
  <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-red-700" />
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
      </div>

<form action="">


</form>

      <div>
        <h1>Search</h1>
        <input type="text" />
        <button>search</button>
      </div>
    </>
  );
}
