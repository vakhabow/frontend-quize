import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTests } from "../../../feateures/testsSlice";
import { fetchCategories } from "../../../feateures/testsSlice";
import { fetchTestsByCategoryId } from "../../../feateures/testsSlice";
import { fetchAddToFavorite } from "../../../feateures/testsSlice";
import "./index.css";

const AllTestsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const categories = useSelector((state) => state.test.categories);
  const tests = useSelector((state) => state.test.tests);
  const favorite = useSelector((state) => state.test);
console.log(favorite);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTestsByCategoryId(id));
    dispatch(fetchTests());
  }, [dispatch, id]);

  const handleAddFavorite = (id) => {
    dispatch(fetchAddToFavorite(id))
  }

  return (
    <div>
      <div className="all_categories">
        {categories.map((category) => {
          return (
            <Link key={category._id} to={`/category/${category._id}`}>
              {category.title}
            </Link>
          );
        })}
      </div>
      <div className="all_tests">
        {tests.map((test) => {
          return (
            <div key={test._id} className="test_name">
              <Link to={`/testdescription/${test._id}`}>
                {test.testName}
              </Link>
              <button onClick={() => handleAddFavorite(test._id)}>добавить в избранное</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTestsPage;
