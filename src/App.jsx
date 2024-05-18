import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetails from "./Components/PostDetails/PostDetails";
import SignIn from "./Components/SignUp/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Admin from "./Pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
