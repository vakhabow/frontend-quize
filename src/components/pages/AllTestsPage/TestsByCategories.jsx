import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestsByCategoryId } from "../../../feateures/testsSlice";

const TestsByCategories = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTestsByCategoryId(id));
  }, [dispatch, id]);

  const testsByCat = useSelector((state) => state.test.testsByCat);

  return (
    <div>
        {testsByCat.map(item => {
            return (
              <Link to={`/testdescription/${item._id}`}>{item.testName}</Link>  
            )
        })}
    </div>
  )
  
};

export default TestsByCategories;
