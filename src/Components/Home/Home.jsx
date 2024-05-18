import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <header className="bg-white shadow p-4 ">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input type="text" placeholder="Search for..." className="bg-gray-100 outline-none text-gray-600 flex-grow" />
            <button className="bg-blue-600 text-white rounded-full p-2 ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z"></path>
                </svg>
            </button>
        </div>
        <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <button className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11.5a6.5 6.5 0 00-13 0v2.658a2.032 2.032 0 01-.595 1.437L3 17h5m2 4a2 2 0 104 0H9z"></path>
                        </svg>
                    </button>
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </div>
                <div className="relative">
                    <button className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18"></path>
                        </svg>
                    </button>
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">7</span>
                </div>
            </div>

            <Link to="/signin" className="px-4 py-2 rounded bg-slate-400">Sign In</Link>
        </div>
        </div>
      </header>
      <section className="mt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {posts.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;
