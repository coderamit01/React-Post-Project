import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../firebaseConfig';
import LoginbgImg from "../../assets/login-bg.png";
import Admin from '../../Pages/Admin';

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: ''
  });

  const navigate = useNavigate();

  const handleGoogleBtn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUser({
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        });
        // Redirect to Admin component with user data as state
        navigate('/admin', { state: { user: { name: displayName, email, photoURL } } });
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
      });
  };

  const handleSignUpWithEmailAndPassword = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed up:', user);
        // Redirect to Admin component or handle sign up success as needed
      })
      .catch((error) => {
        console.error('Sign up error:', error);
        // Handle sign up errors here
      });
  };

  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-3" style={{ backgroundImage: `url(${LoginbgImg})` }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md">
          <h2 className="text-center text-white text-2xl font-semibold mb-6">Sign Up</h2>
          <form onSubmit={handleSignUpWithEmailAndPassword}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-white mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white border-none ring-2 ring-slate-50 placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center text-white">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" required />
                <span className="ml-2">Accept Terms & Condition</span>
              </label>
            </div>
            <button type="submit" className="w-full py-2 bg-white text-purple-800 rounded">Sign Up</button>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <button type="button" onClick={handleGoogleBtn} className="px-3 py-3 rounded-full bg-red-500 text-white flex items-center justify-center">
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
