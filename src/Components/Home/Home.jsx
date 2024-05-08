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
