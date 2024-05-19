import React, { useState } from "react";
import LoginbgImg from "../../assets/login-bg.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleBlur = (e) => {
    let isFormValid;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = e.target.value.length > 6;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-3"
        style={{ backgroundImage: `url(${LoginbgImg})` }}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-center text-white text-2xl font-semibold mb-6">
            Sign In
          </h2>
          <form>
            <div className="mb-4">
              <label for="email" className="block text-white mb-1">
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
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
                name="password"
                id="password"
                onBlur={handleBlur}
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
              Sign In
            </button>
            <p className="text-center text-white mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-300 hover:text-purple-100"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
