import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();

    // Cleanup function if needed
    return () => {
      // Any cleanup code if needed
    };
  }, [postId]);

  return (
    <div>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {/* You can display other details of the post here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
