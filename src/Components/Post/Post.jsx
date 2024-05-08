import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { title, body } = props.post;
  return (
    <div className="bg-white px-3 py-5 rounded shadow-md">
      <h2 className="text-lg font-semibold capitalize line-clamp-2">{title}</h2>
      <p className="line-clamp-4 my-2">{body}</p>
      <Link
        to="/"
        className="py-2 px-4 rounded b bg-emerald-700 text-white inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default Post;
