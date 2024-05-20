import React, { useState } from "react";
import LoginbgImg from "../../assets/login-bg.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(password)) {
      errors.password = "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, a number, and a special character";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Successfully signed in!");
      toast.success("Successfully signed in!", {
        autoClose: 2000
      });
      // Perform sign-in logic here
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-3"
        style={{ backgroundImage: `url(${LoginbgImg})` }}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-center text-white text-2xl font-semibold mb-6">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-1">
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-1">
                Password
              </label>
              <input
                type="password" name="password" id="password"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
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
              className="w-full py-2 bg-white text-purple-800 rounded"
            >
              Sign In
            </button>
            <p className="text-center text-white mt-4">Don't have an account?{" "}
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
