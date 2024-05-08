import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Create an AbortController
    const signal = abortController.signal;

    fetch(`https://jsonplaceholder.typicode.com/posts`, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      // .then((data) => {
      //   setPosts(data);
      //   setLoading(false);
      // })
      // .catch((error) => {
      //   setError(error); // Set error state
      //   setLoading(false);
      // });

    // Cleanup function
    return () => {
      abortController.abort(); // Abort the fetch request
    };
  }, []);
  
  return (
    <div className="pt-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {posts.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
