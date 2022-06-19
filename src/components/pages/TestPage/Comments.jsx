import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
  const comments = useSelector((state) => state.comments);
  console.log(comments)
  return (
    <>
      {comments.map((item) => {
        return (
          <>
            <input></input>
            <div>{item.text}</div>
          </>
        );
      })}
    </>
  );
};

export default Comments;
