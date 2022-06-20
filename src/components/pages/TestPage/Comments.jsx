import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments, postComment } from "../../../feateures/commentsSlice";

const Comments = ({ test }) => {
  const comments = useSelector((state) => state.comments.comments);
  console.log(comments);
  const { id } = useParams();
  const [text, setText] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  const handleText = (e) => {
    setText(e.target.value)
  } 
  const handleAddComment = () => {
    dispatch(postComment({id, text}));
    setText('')
  }

  return (
    <>
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()} >
        <input type="text" value={text} onChange={handleText} />
        <input type="submit" onClick={() => handleAddComment()} disabled={!text}/>
      </form>
    </div>
      {comments.map((item) => {
        if (id === test._id) {
          
        }
        return (
            
              <div key={item._id}>{item.text}</div>
        );
      })}
    </>
  );
};

export default Comments;
