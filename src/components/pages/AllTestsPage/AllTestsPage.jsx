import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTests } from "../../../feateures/testsSlice";
import { fetchCategories } from "../../../feateures/testsSlice";
import { fetchTestsByCategoryId } from "../../../feateures/testsSlice";

const AllTestsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const categories = useSelector((state) => state.test.categories);
  const tests = useSelector((state) => state.test.tests);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTestsByCategoryId(id));
  }, [dispatch, id]);

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
          return test.testName;
        })}
      </div>
    </div>
  );
};

export default AllTestsPage;
