import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state


  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const abortController = new AbortController(); // Create an AbortController
    const signal = abortController.signal;

    fetch(`https://jsonplaceholder.typicode.com/posts`, { signal })
      .then((res) => {
        if (!isMounted) return; // Ignore setting state if component is unmounted

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return; // Ignore setting state if component is unmounted
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        if (!isMounted) return; // Ignore setting state if component is unmounted
        setError(error); // Set error state
        setLoading(false);
      });

    // Cleanup function
    return () => {
      isMounted = false; // Update flag when component is unmounted
      abortController.abort(); // Abort the fetch request
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message
  }

  
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
