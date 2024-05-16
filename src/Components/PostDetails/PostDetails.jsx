import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import personImg from "../../assets/person.webp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );

        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPost();
    fetchComments();
  }, [postId]);

  const [likeColor, setLikeColor] = useState(""); // Initialize likeColor to undefined

  const handleLike = () => {
    const color = likeColor ? "" : red[500]; // Toggle color between undefined and "primary"
    setLikeColor(color);
  };
  return (
    <div className="container mx-auto pt-20">
      {post ? (
        <div>
          <div>
            <span className="py-1 px-5 bg-orange-300 text-slate-900 rounded font-semibold">
              userid {post.userId}
            </span>
            <h3 className="text-2xl font-semibold capitalize pt-2">
              {post.title}
            </h3>
            <p className="py-2">{post.body}</p>
          </div>
          <div className="py-2 flex items-center">
            <span onClick={handleLike} className="me-2 cursor-pointer">
              {likeColor ? (
                <FavoriteIcon style={{ color: likeColor }} />
              ) : (
                <FavoriteBorderIcon style={{ color: likeColor }} />
              )}
              Like
            </span>
            <ShareIcon></ShareIcon>
          </div>

          {/* /* Display comments here */}
          <h4 className="text-xl font-semibold text-green-900 py-2">
            Comments:
          </h4>
          <div>
            {comments.map((comment) => (
              <div key={comment.id}>
                <div className="flex items-center">
                  <img src={personImg} className="h-10 w-10 rounded-full" />
                  <h5 className="font-semibold ms-2">{comment.email}</h5>
                  <span className="ms-3 text-slate-600">45 Minutes ago</span>
                </div>
                <div className="p-2 first-letter:uppercase">
                  <p>{comment.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
