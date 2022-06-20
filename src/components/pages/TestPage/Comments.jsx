import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../../feateures/commentsSlice";

const Comments = () => {
  const comments = useSelector((state) => state.comments.comments);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  return (
    <>
      {comments.map((item) => {
        return (
          <>
            <input></input>
            <div key={item._id}>{item.text}</div>
          </>
        );
      })}
    </>
  );
};

export default Comments;
