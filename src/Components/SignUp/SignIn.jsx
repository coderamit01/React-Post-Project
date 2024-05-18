import React from "react";
import LoginbgImg from "../../assets/login-bg.png";

const SignIn = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-3"
        style={{ backgroundImage: `url(${LoginbgImg})` }}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-center text-white text-2xl font-semibold mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label for="email" className="block text-white mb-1">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label for="password" className="block text-white mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-600"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-purple-300 hover:text-purple-100"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-purple-800 rounded "
            >
              Login
            </button>
            <p className="text-center text-white mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-purple-300 hover:text-purple-100">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
