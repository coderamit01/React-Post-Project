import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import LoginbgImg from "../../assets/login-bg.png";
import { ToastContainer, toast } from 'react-toastify';
import { auth } from "../../firebaseConfig"; // Import your Firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const validate = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate Email 
    if (!email) {
      errors.email = "Email is Required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid Email Address";
    }
    // Validate Password 
    if (!password) {
      errors.password = "Password is Required";
    } else if (!passwordPattern.test(password)) {
      errors.password = "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, a number, and a special character";
    }
    // Match Password and Confirm Password 
    if (password !== confirmPass) {
      errors.confirmPass = "Passwords do not match";
    }

    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registered successfully");
        navigate("/signin",{state : {message: "Registered successfully"}}); // Redirect to sign-in page or home page
      } catch (error) {
        setErrors({ firebase: error.message });
        toast.error(error.message);
      }
    } else {
      setSuccessMessage("");
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-3" style={{ backgroundImage: `url(${LoginbgImg})` }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-center text-white text-2xl font-semibold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input type="email" id="email"  name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your email"
                required
              />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-white mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm password"
                required
              />
              {errors.confirmPass && <p className='text-red-500 text-sm mt-1'>{errors.confirmPass}</p>}
            </div>
            <div className="mb-4">
              <label className="flex items-center text-white">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="ml-2">Accept Terms & Conditions</span>
              </label>
            </div>
            <button type="submit" className="w-full py-2 bg-white text-purple-800 rounded">Sign Up</button>
            {errors.firebase && <p className='text-red-500 text-sm mt-1'>{errors.firebase}</p>}
            <div className="mt-4 flex items-center justify-center space-x-2">
              <button type="button" className="px-3 py-3 rounded-full bg-red-500 text-white flex items-center justify-center">
                <FaGoogle />
              </button>
              <button type="button" className="px-3 py-3 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaFacebook />
              </button>
              <button type="button" className="px-3 py-3 rounded-full bg-blue-400 text-white flex items-center justify-center">
                <FaTwitter />
              </button>
            </div>
            <p className="text-center text-white mt-4">
              Already have an account?{" "}
              <Link to="/signin" className="text-purple-300 hover:text-purple-100">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
